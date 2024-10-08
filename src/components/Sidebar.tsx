import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "@/constant/data";
import { MenuItem } from "@/types/collapsible";
import CollapsibleMenuItem from "./custom/CollapsibleMenuItem";
import useToggleState from "@/hooks/useToggleState";
import useDisclosure from "@/hooks/useDisclosure";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn, buttonVariants } from "@/lib/utils";
import { Button } from "./ui";
import { useAuthContext } from "@/providers/authUtils";
import logo from "@/assets/logo.png";

/**
 * Sidebar component that displays a collapsible menu with menu items and additional features.
 */
const Sidebar: React.FC = () => {
  const { openStep: openMenuItem, handleToggle: handleMenuItemClick } =
    useToggleState();
  const { isOpen: isSidebarOpen, toggle: handleHamburgerClick } =
    useDisclosure();
  const { pathname } = useLocation();
  const { userLogout } = useAuthContext();

  return (
    <>
      {/* Hamburger button visible only on small screens */}
      <div
        className={cn(
          "md:hidden p-4 fixed w-full z-[1200]",
          !isSidebarOpen && "bg-slate-50",
        )}
      >
        <button onClick={handleHamburgerClick}>
          {isSidebarOpen ? (
            <Cross1Icon className="h-6 w-6 text-white" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar container */}
      <div
        className={cn(
          "w-[289px] z-[1000] py-[60px] top-0 h-full bg-green-700 text-white fixed flex flex-col overflow-y-auto side-scrollbar transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
        )}
      >
        {/* Sidebar header with logo */}
        <Link to="/" className="text-[40px] font-bold pb-[20px]">
          <img src={logo} alt="logo" className="w-32 m-auto" />
        </Link>

        {/* Render menu items */}
        <ul className="flex flex-col gap-[10px] mb-10">
          {menuItems.map((menuItem: MenuItem, index: number) =>
            menuItem.submenu ? (
              // Render collapsible menu item if it has a submenu
              <CollapsibleMenuItem
                key={index}
                label={menuItem.label}
                isOpen={index === openMenuItem}
                onToggle={() => handleMenuItemClick(index)}
              >
                {/* Render submenu items as children */}
                {menuItem.submenu?.map((subMenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subMenuItem.path!}
                      className={cn(
                        buttonVariants({
                          variant:
                            pathname === subMenuItem.path
                              ? "primary"
                              : "default",
                          size: "default",
                        }),
                        "block",
                      )}
                    >
                      {subMenuItem.label}
                    </Link>
                  </li>
                ))}
              </CollapsibleMenuItem>
            ) : (
              // Render menu item if it does not have a submenu
              <li key={index}>
                <Link
                  to={menuItem.path!}
                  className={cn(
                    buttonVariants({
                      variant:
                        pathname === menuItem.path ? "primary" : "default",
                      size: "default",
                    }),
                    "block",
                  )}
                >
                  {menuItem.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Logout button */}
        <Button
          type="button"
          onClick={userLogout}
          variant="secondary"
          className="justify-start"
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default Sidebar;
