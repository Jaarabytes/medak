import AppLogo from "@/components/app-logo";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <div className=" shadow border-b py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <AppLogo />
        </Link>

        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-2 ">
            <li>
              <NavLink href="/">home</NavLink>
            </li>
            <li>
              <NavLink href="/">about</NavLink>
            </li>
            <li>
              <NavLink href="/">contact us</NavLink>
            </li>
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
