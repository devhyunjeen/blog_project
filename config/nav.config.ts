import { ArchiveIcon, FileText, LucideIcon, SearchIcon, UserIcon } from "lucide-react";

type NavItemType = {
  name: string;
  url: string;
  icon: LucideIcon;
};
const navItems: NavItemType[] = [
  { name: "Search", url: "/", icon: SearchIcon }, //
  { name: "Post", url: "/", icon: FileText },
  { name: "About", url: "/", icon: UserIcon },
  { name: "Project", url: "/", icon: ArchiveIcon },
];

export { type NavItemType, navItems };
