import Link from "next/link";
import { Github, Home, MoonIcon } from "lucide-react";
import NavBar from "@/components/nav/NavBar";

function Header() {
  return (
    <header className='sticky top-0 size-0 lg:flex'>
      <div className='relative flex w-dvw items-center border-b px-4 sm:px-12 lg:h-dvh lg:max-h-screen lg:flex-col lg:justify-between lg:border-e lg:border-e-zinc-200 lg:px-0 lg:py-8'>
        <div className='relative after:absolute after:-bottom-6 after:left-1/2 after:z-0 after:hidden after:h-px after:w-8 after:-translate-x-1/2 after:border after:content-[""] lg:w-full lg:after:block'>
          <Link href='' className='flex w-full items-center gap-2 hover:cursor-pointer hover:opacity-75 lg:flex-col'>
            <Home />
            <span className='font-semibold uppercase lg:block'>Blog</span>
          </Link>
        </div>
        <div className='size-full lg:mt-4'>
          <NavBar />
        </div>
        <div className='lg:hidden'></div>
        <div className='hidden items-center lg:mt-4 lg:flex lg:w-24 lg:flex-col lg:gap-y-4'>
          <button>
            <div className='rounded-full border-2 p-1'>
              <Github strokeWidth='1' />
            </div>
          </button>
          <button>
            <div className='rounded-full border-2 p-1'>
              <MoonIcon strokeWidth='1' />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
