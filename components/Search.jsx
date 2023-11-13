"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, SearchCheckIcon, SearchIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import useStore from "@/hooks/useStore";

const Search = () => {
  const setSearchValue = useStore((state) => state.setSearchValue);

  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const FirstLeter = pathname
    .split("")
    .slice(1)
    .join("")
    .charAt(0)
    .toUpperCase();
  const rest = pathname.split("").slice(2).join("");

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const region = [
    {
      id: 0,
      name: "All Regions",
      route: "/",
    },
    {
      id: 1,
      name: "Africa",
      route: "/africa",
    },
    {
      id: 2,
      name: "America",
      route: "/america",
    },
    {
      id: 3,
      name: "Asia",
      route: "/asia",
    },
    {
      id: 4,
      name: "Europa",
      route: "/europa",
    },
    {
      id: 5,
      name: "Oceania",
      route: "/oceania",
    },
  ];

  return (
    <section className="  dark:bg-darkBlue  flex  justify-center my-5 md:my-0  ">
      <div className="container  h-auto md:h-[20vh]   flex flex-col md:flex-row justify-between  items-start md:items-center ">
        <label className=" mt-5 relative  flex items-center my-5 md:my-0  w-full" >

          <SearchIcon className="absolute  left-[15px] md:left-[50px] text-black dark:text-white "/>
        <input
          
          className="  top-0 outline-none bg-white dark:bg-darkLight rounded-lg text-black dark:text-white  h-[50px] w-full md:w-[500px]  ps-[50px] md:ps-[100px]  "
          type="text"
          placeholder="Search for a Country"
          onChange={handleChange}
          autoComplete="off"
        />
        </label>

        <div
          onClick={handleClick}
          className="z-10 rounded-lg  flex gap-5 text-black    bg-white  dark:bg-darkLight dark:text-white relative  w-[200px] h-[50px] "
        >
          <div className="flex justify-between px-5  items-center   w-[200px] ">
            <h1>
              {" "}
              {`${
                pathname === "/" ? "Filter by Region " : FirstLeter + rest
              }`}{" "}
            </h1>
            <ChevronDown />
          </div>
          {menu && (
            <div className=" bg-white text-black dark:bg-darkLight dark:text-white  absolute top-[55px] left-0 w-[200px]  p-5  rounded-lg">
              <ul className="flex flex-col gap-3">
                {region.map((e) => (
                  <li key={e.id}>
                    <Link className="hover:text-blue-500" href={e.route}>
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
