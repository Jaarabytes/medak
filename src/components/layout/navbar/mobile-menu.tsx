"use client";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

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
} from "../../ui/sheet";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../ui/collapsible";
import MobileMenuDropdown from "./mobile-menu-dropdown";
import Link from "next/link";
import { siteData } from "../../../site-data";

function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="hover:text-primary md:hidden">
          <LuMenu />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4 text-2xl font-bold text-left">
            {siteData.title.toUpperCase()}
          </SheetTitle>
        </SheetHeader>
        <div>
          <ul className="flex flex-col space-gap-4 space-y-3">
            <li>
              <NavLink
                isActive={pathname === "/"}
                href="/"
                onClick={() => {
                  toggleMobileMenu();
                }}
                className="text-xl"
              >
                home
              </NavLink>
            </li>

            <li>
              <MobileMenuDropdown
                title="about us"
                triggerActive={
                  pathname === "/about" ||
                  pathname === "/about/our-leadership" ||
                  pathname === "/about/members" ||
                  pathname === "/about/join-medak"
                }
                toggleMobileMenu={toggleMobileMenu}
                links={[
                  {
                    name: "who we are",
                    href: "/about",
                  },
                  {
                    name: "our leadership",
                    href: "/about/our-leadership",
                  },
                  {
                    name: "members",
                    href: "/about/members",
                  },
                  {
                    name: "join medak",
                    href: "/about/join-medak",
                  },
                ]}
              />
            </li>

            <li>
              <NavLink
                isActive={pathname === "/about-the-industry"}
                href="/about-the-industry"
                onClick={() => {
                  toggleMobileMenu();
                }}
                className="text-xl"
              >
                About the industry
              </NavLink>
            </li>

            <li>
              <NavLink
                isActive={pathname.includes("/what-we-do")}
                href="/what-we-do"
                onClick={() => {
                  toggleMobileMenu();
                }}
                className="text-xl"
              >
                What we do
              </NavLink>
            </li>
            <li>
              <MobileMenuDropdown
                title="industry updates"
                triggerActive={
                  pathname === "/news" ||
                  pathname === "/events" ||
                  pathname === "/blog"
                }
                toggleMobileMenu={toggleMobileMenu}
                links={[
                  {
                    name: "events ",
                    href: "/events",
                  },
                  {
                    name: "blog",
                    href: "/blog",
                  },
                ]}
              />
            </li>
            <li>
              <Link
                href={"/sign-up"}
                onClick={() => {
                  toggleMobileMenu();
                }}
              >
                <Button>Sign up</Button>
              </Link>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
