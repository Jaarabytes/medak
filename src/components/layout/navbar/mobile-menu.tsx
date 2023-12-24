"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";

function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <SheetTrigger asChild>
        <button className="hover:text-primary">
          <LuMenu />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Menu</SheetTitle>
        </SheetHeader>
        <div>
          <ul className="flex flex-col space-gap-4 ">
            {[
              {
                title: "Home",
                href: "/",
                isActive: pathname == "/",
              },
              {
                title: "About",
                href: "/about",
                isActive: pathname == "/about",
              },
              {
                title: "Portfolio",
                href: "/portfolio",
                isActive: pathname == "/portfolio",
              },
              {
                title: "Contact",
                href: "/contact",
                isActive: pathname == "/contact",
              },
            ].map((item, index) => {
              return (
                <NavLink
                  key={index}
                  href={item.href}
                  isActive={pathname == item.href}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
