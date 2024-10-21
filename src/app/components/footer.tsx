import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-zinc-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-end">
                    <div className="mb-6 md:mb-0 "></div>
                    <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className="border-2 rounded-3xl"><Link href='https://www.linkedin.com/in/upedrolima/'><Image src="/Logos/linkedin.png" alt='linkeding' width={30} height={30} className='' /></Link></div>
                        <div className="border-2 rounded-2xl"><Link href='https://www.instagram.com/upedro_lima/'><Image src="/Logos/instagram1.png" alt='instagram' width={30} height={30} className='' /></Link></div>
                        <div className="border-2 rounded-3xl"><Link href='https://github.com/uPedroLima11'><Image src="/Logos/github.png" alt='github' width={30} height={30} className='' /></Link></div>
                        <div></div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center dark:text-gray-400">
                        Copyright  © 2024 by {' '}
                        <a href="" className="hover:underline">
                            Pedro Mendes Lima™
                        </a>

                    </span>
                </div>
            </div>
        </footer>
    );
}