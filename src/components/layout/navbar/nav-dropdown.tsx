"use client";
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
import { usePathname } from "next/navigation";

const NavDropdown = ({
  title,
  links,
  triggerActive,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
  triggerActive?: boolean;
}) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <div
            className={cn(
              "",
              triggerActive && "text-primary",
              "hover:underline uppercase font-bold text-sm hover:text-primary"
            )}
          >
            {title}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link, index) => (
            <DropdownMenuItem
              key={index}
              className="capitalize group "
              onClick={() => setOpen(false)}
            >
              <NavLink
                className="group-hover:text-primary group-hover:underline"
                href={link.href}
                isActive={
                  pathname.split("/")[2] === undefined &&
                  link.href.split("/")[2] === undefined
                    ? pathname.split("/")[1] === link.href.split("/")[1]
                    : pathname.split("/")[2] === link.href.split("/")[2]
                }
                // isActive={pathname.includes(link.href)}
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
