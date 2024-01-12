import AppLogo from "@/components/app-logo";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import MobileMenu from "./mobile-menu";
import NavDropdown from "./nav-dropdown";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className=" shadow border-b py-3  w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <AppLogo />
        </Link>

        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center space-x-3">
            <li>
              <NavLink href="/">home</NavLink>
            </li>

            <li>
              <NavDropdown
                title="about us"
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
                    name: "sectors",
                    href: "/about/sectors",
                  },
                  {
                    name: "join medak",
                    href: "/about/join-medak",
                  },
                ]}
              />
            </li>

            <li>
              <NavLink href="/">About the industry</NavLink>
            </li>
            <li>
              <NavLink href="/">what we do</NavLink>
            </li>

            <li>
              <NavDropdown
                title="industry updates"
                links={[
                  {
                    name: "news and events ",
                    href: "/",
                  },
                  {
                    name: "blog",
                    href: "/",
                  },
                  {
                    name: "latest resources",
                    href: "/",
                  },
                  {
                    name: "sectors",
                    href: "/",
                  },
                  {
                    name: "join medak",
                    href: "/",
                  },
                ]}
              />
            </li>

            <li>
              <Button>Login</Button>
            </li>
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
