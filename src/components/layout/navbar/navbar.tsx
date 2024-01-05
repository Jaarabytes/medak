import AppLogo from "@/components/app-logo";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import MobileMenu from "./mobile-menu";
import NavDropdown from "./nav-dropdown";

const Navbar = () => {
  return (
    <div className=" shadow border-b py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <AppLogo />
        </Link>

        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-3">
            <li>
              <NavLink href="/">home</NavLink>
            </li>
            <li>
              <NavLink href="/">about us </NavLink>
            </li>

            <li>
              <NavDropdown />
            </li>

            <li>
              <NavLink href="/">About the industry (FAQ's)</NavLink>
            </li>
            <li>
              <NavLink href="/">what we do</NavLink>
            </li>
            <li>
              <NavLink href="/">industry updates</NavLink>
            </li>
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
