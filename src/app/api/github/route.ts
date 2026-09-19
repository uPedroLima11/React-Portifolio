import { NextResponse } from 'next/server';

const USUARIO = 'uPedroLima11';

export const revalidate = 3600;

interface Resposta {
  commits: number;
  incluiPrivados: boolean;
  motivo?: string;
}

async function commitsPublicos() {
  const resposta = await fetch(
    `https://api.github.com/search/commits?q=author:${USUARIO}&per_page=1`,
    {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate },
    }
  );

  if (!resposta.ok) throw new Error(`busca de commits falhou: ${resposta.status}`);

  const dados = await resposta.json();
  return (dados.total_count as number) ?? 0;
}

async function commitsComToken(token: string) {
  const consultar = async (query: string, variaveis: Record<string, unknown>) => {
    const resposta = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: variaveis }),
      next: { revalidate },
    });

    if (!resposta.ok) throw new Error(`graphql falhou: ${resposta.status}`);

    const dados = await resposta.json();
    if (dados.errors?.length) throw new Error(dados.errors[0].message);
    return dados.data;
  };

  const perfil = await consultar(
    `query($login: String!) {
      user(login: $login) {
        contributionsCollection { contributionYears }
      }
    }`,
    { login: USUARIO }
  );

  const anos: number[] = perfil?.user?.contributionsCollection?.contributionYears ?? [];

  const totais = await Promise.all(
    anos.map(async (ano) => {
      const dados = await consultar(
        `query($login: String!, $de: DateTime!, $ate: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $de, to: $ate) {
              totalCommitContributions
            }
          }
        }`,
        {
          login: USUARIO,
          de: `${ano}-01-01T00:00:00Z`,
          ate: `${ano}-12-31T23:59:59Z`,
        }
      );

      return (dados?.user?.contributionsCollection?.totalCommitContributions as number) ?? 0;
    })
  );

  return totais.reduce((total, ano) => total + ano, 0);
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  let motivo: string | undefined;

  if (token) {
    try {
      const commits = await commitsComToken(token);
      const corpo: Resposta = { commits, incluiPrivados: true };
      return NextResponse.json(corpo);
    } catch (erro) {
      motivo = erro instanceof Error ? erro.message : 'falha desconhecida no token';
      console.error('[api/github] token presente mas inutilizavel:', motivo);
    }
  } else {
    motivo = 'GITHUB_TOKEN ausente';
  }

  try {
    const commits = await commitsPublicos();
    const corpo: Resposta = { commits, incluiPrivados: false, motivo };
    return NextResponse.json(corpo);
  } catch {
    return NextResponse.json({ erro: 'github indisponivel' }, { status: 502 });
  }
}
