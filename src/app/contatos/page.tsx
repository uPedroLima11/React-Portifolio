import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Contatos() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>

      <main className="flex-grow mt-44">
        <section className="text-center px-4">
          <h1 className="text-5xl font-extrabold">Contatos</h1>

          <div className="mt-16 flex items-center justify-center gap-4 flex-wrap">
            <Image
              src="/gmail.png"
              alt="Email"
              width={30}
              height={30}
              className="flex-shrink-0"
            />
            <h1 className="font-mono text-2xl">Email:</h1>
            <a
              href="mailto:Pedromendeslima2016@gmail.com"
              className="font-light text-lg text-blue-500 hover:underline"
            >
              Pedromendeslima2016@gmail.com
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Image
              src="/github.png"
              alt="Github"
              width={30}
              height={30}
              className="flex-shrink-0"
            />
            <h1 className="font-mono text-2xl">Github:</h1>
            <a
              href="https://github.com/uPedroLima11"
              className="font-light text-lg text-blue-500 hover:underline"
            >
              https://github.com/uPedroLima11
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={30}
              height={30}
              className="flex-shrink-0"
            />
            <h1 className="font-mono text-2xl">LinkedIn:</h1>
            <Link
              href="https://www.linkedin.com/in/upedrolima/"
              className="font-light text-lg text-blue-500 hover:underline"
            >
              https://www.linkedin.com/in/upedrolima/
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Image
              src="/instagram1.png"
              alt="Instagram"
              width={30}
              height={30}
              className="flex-shrink-0"
            />
            <h1 className="font-mono text-2xl">Instagram:</h1>
            <a
              href="https://www.instagram.com/upedro_lima/"
              className="font-light text-lg text-blue-500 hover:underline"
            >
              https://www.instagram.com/upedro_lima/
            </a>
          </div>

          
        </section>
      </main>
      <div className="mt-48"></div>
      <Footer />
    </div>
  );
};

