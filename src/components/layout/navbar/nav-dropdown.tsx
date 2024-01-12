import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import NavLink from "./nav-link";

const NavDropdown = ({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            className={cn(
              "",
              "hover:underline uppercase font-bold text-sm hover:text-primary"
            )}
          >
            {title}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link, index) => (
            <DropdownMenuItem key={index} className="capitalize group ">
              <NavLink
                className="group-hover:text-primary group-hover:underline"
                href={link.href}
              >
                {link.name}
              </NavLink>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavDropdown;
