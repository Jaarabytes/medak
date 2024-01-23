"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import React from "react";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";

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
            triggerActive && "text-primary",
            " uppercase font-bold text-sm hover:text-primary"
          )}
        >
          {title}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4">
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              className="capitalize group "
              //   onClick={() => setOpen(false)}
            >
              <NavLink
                className="group-hover:text-primary group-hover:underline"
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
