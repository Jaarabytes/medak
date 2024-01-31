"use client";
import AppLogo from "@/components/app-logo";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import MobileMenu from "./mobile-menu";
import NavDropdown from "./nav-dropdown";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ui/theme-switch";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className=" shadow border-b py-4 w-full z-50 sticky top-0 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <AppLogo />
        </Link>

        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center space-x-3">
            <li>
              <NavLink isActive={pathname === "/"} href="/">
                home
              </NavLink>
            </li>

            <li>
              <NavDropdown
                title="about us"
                triggerActive={
                  pathname === "/about" ||
                  pathname === "/about/our-leadership" ||
                  pathname === "/about/members" ||
                  pathname === "/about/join-medak"
                }
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
                  // {
                  //   name: "sectors",
                  //   href: "/about/sectors",
                  // },
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
              >
                About the industry
              </NavLink>
            </li>

            <li>
              <NavLink
                isActive={pathname.includes("/what-we-do")}
                href="/what-we-do"
              >
                What we do
              </NavLink>
            </li>

            {/* <li>
              <NavDropdown
                title="What We Do"
                triggerActive={pathname.includes("/what-we-do")}
                links={[
                  {
                    name: "Sectors ",
                    href: "/what-we-do/sectors",
                  },
                  {
                    name: "Focus / Priorities",
                    href: "/what-we-do/focus-priorities",
                  },
                ]}
              />
            </li> */}
            {/* <li>
              <ModeToggle />
            </li> */}
            <li>
              <NavDropdown
                title="industry updates"
                triggerActive={
                  pathname === "/news" ||
                  pathname === "/events" ||
                  pathname === "/blog"
                }
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
              <Link href={"/sign-up"}>
                <Button>Sign Up</Button>
              </Link>
            </li>
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
