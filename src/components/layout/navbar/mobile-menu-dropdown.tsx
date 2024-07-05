"use client";
import { Collapsible , CollapsibleContent, CollapsibleTrigger} from "../../ui/collapsible";
import { cn } from "../../../lib/utils";
import React from "react";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";
import { LuArrowRight } from "react-icons/lu";

const MobileMenuDropdown = ({
  title,
  links,
  triggerActive,
  toggleMobileMenu,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
  triggerActive?: boolean;
  toggleMobileMenu?: () => void;
}) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    triggerActive ? setOpen(true) : setOpen(false);
  }, [triggerActive]);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button
          className={cn(
            " flex items-center space-x-2",
            triggerActive && "text-primary",
            " uppercase font-bold hover:text-primary text-xl"
          )}
        >
          <span>{title}</span>
          <span
            className={cn(
              "transition-all ease-linear",
              open ? "rotate-90" : ""
            )}
          >
            <LuArrowRight />
          </span>
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4">
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li
              key={index}
              className="capitalize group "
              //   onClick={() => setOpen(false)}
            >
              <NavLink
                className="group-hover:text-primary group-hover:underline text-xl"
                href={link.href}
                onClick={toggleMobileMenu}
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
            </li>
          ))}
          <li></li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default MobileMenuDropdown;
