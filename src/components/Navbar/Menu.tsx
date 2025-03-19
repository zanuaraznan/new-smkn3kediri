"use client";

import { ChevronDown, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";

type SubNavItem = {
  name: string;
  path: string;
};

type MenuItem = {
  name: string;
  path?: string;
  sub_nav?: SubNavItem[];
};

type MenuProps = {
  menu_data: MenuItem[];
};

export default function Menu({ menu_data }: MenuProps) {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [isMobile, setMobile] = useState<boolean>(false);
  const { isOpen, isAnimate, modalRef, closeRef, handleClose } = useModal();

  useEffect(() => {
    function checkMobile() {
      window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    }
    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <button className="p-3 rounded-md btn-focus">
            <MenuIcon size={22} />
          </button>
        </>
      ) : (
        <nav className="flex items-center gap-8 font-medium">
          {menu_data.map((el, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdownIndex(index)}
              onMouseLeave={() => setDropdownIndex(null)}>
              {el.sub_nav ? (
                <>
                  <button
                    className="flex items-center gap-3 p-3"
                    title={el.name}>
                    {el.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        dropdownIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownIndex === index && (
                    <div className="absolute left-0 mt-2 bg-white shadow-md shadow-black/5 flex flex-col gap-2 font-normal min-w-max p-4 rounded-md z-50 before:absolute before:left-0 before:cursor-pointer before:-top-6 before:h-6 before:w-full">
                      {el.sub_nav.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.path}
                          className="p-2 px-4 rounded-md transition-all hover:bg-violet-50 hover:text-violet-800 btn-focus"
                          title={sub.name}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={el.path as string}
                  key={index}
                  className="p-2 px-4 rounded-md transition-all hover:bg-violet-50 hover:text-violet-800 btn-focus"
                  title={el.name}>
                  {el.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </>
  );
}
