import { NavItemType } from "@/config/nav.config";
import Link from "next/link";

function NavItem({ name, url, icon: Icon, ...props }: NavItemType) {
  return (
    <li className='py-4 lg:w-full' {...props}>
      <Link href={url} className='flex w-full items-center justify-center gap-1 lg:flex-col lg:gap-2'>
        <Icon className='w-5 stroke-1' />
        <span className='text-sm font-light'>{name}</span>
      </Link>
    </li>
  );
}
export default NavItem;
