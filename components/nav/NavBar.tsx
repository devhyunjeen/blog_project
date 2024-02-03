"use client";

import { navItems } from "@/config/nav.config";
import * as Tooltip from "@radix-ui/react-tooltip";
import NavItem from "@/components/nav/NavItem";
import { useMediaQuery } from "usehooks-ts";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";
const screenConfig = resolveConfig(tailwindConfig).theme.screens;

function NavBar() {
  const isMobileScreen = useMediaQuery(`(max-width: ${screenConfig.lg}px)`);
  console.log(isMobileScreen);
  return (
    <nav className='flex size-full items-center text-zinc-600'>
      <ul className='flex size-full items-center justify-end gap-x-4 lg:mt-12 lg:flex-col lg:justify-start lg:gap-x-0'>
        {navItems.map(({ name, url, icon }, index) => {
          if (name.toLowerCase() === "search") {
            return (
              <Tooltip.Provider key={index} delayDuration={300}>
                <Tooltip.Root>
                  <Tooltip.Trigger className='lg:w-full'>
                    <NavItem name={name} url={url} icon={icon} />
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className='border bg-white px-4 py-2'
                      side={isMobileScreen ? "left" : "right"}
                      sideOffset={5}
                    >
                      키보드
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            );
          }
          return <NavItem key={index} name={name} url={url} icon={icon} />;
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
