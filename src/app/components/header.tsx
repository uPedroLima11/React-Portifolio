import Link from "next/link";

 
 export default function Header(){ 
 
 return(
<nav className="py-5 font-sans bg-gradient-to-r bg-[#24242c] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] fixed w-screen z-20 top-0">
<div className="w-screen flex items-center justify-between px-2 lg:px-6 xl:px-10">
  
  <a
    href="/"
    className="flex justify-center items-center flex-col space-x-3 rtl:space-x-reverse"
  > 
  <img src="/Logos/Navbar.png" className="h-20" />
    
  </a> 
  <Link href='#' className="mr-96 -ml-28 md:hover:text-[#B38000] text-xl font-serif"><h1>Pedro Mendes Lima</h1></Link>

    <div
      className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
        </div>
  
    <>
      <div
        className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex justify-around p-4 px-6 mt-0 gap-10 font-medium">
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-white text-xs font-bold md:hover:text-[#B38000]  md:p-0 lg:text-sm xl:text-base 2xl:text-lg"
              aria-current="page"
            >
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block py-2 px-3 text-white text-xs font-bold md:hover:text-[#B38000]  md:p-0 lg:text-sm xl:text-base 2xl:text-lg"
              aria-current="page"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="/contatos"
              className="block py-2 px-3 text-white text-xs font-bold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#B38000]  md:p-0 md:dark:hover:text-[#B38000] lg:text-sm xl:text-base 2xl:text-lg"
            >
              Entre em Contato
            </Link>
          </li>
          
            <img src="/Logos/linguagens.png"
              className="h-10 filter invert opacity-90 ">
            </img>
        </ul>
      </div>
    </>
  
</div>
</nav>
);
 }