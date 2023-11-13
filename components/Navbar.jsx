"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(true);
  
  useEffect(() => {
    const element = document.documentElement;
    if (theme) {
      element.classList.add("dark");
      /* element.classList.add("dark") */
    } else {
      /* document.documentElement.classList.remove('dark') */
      element.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <section className="flex justify-center bg-white shadow-md dark:bg-darkLight   ">
      <nav className="text-black dark:text-white container  h-[10vh]  bg-darklLight flex   justify-between items-center ">
        <div>
          <h1 className="font-bold text-[14px] md:text-[26px]">Where in the world?</h1>
        </div>

        <button
          onClick={handleClick}
          className=" rounded-lg text-[14px] md:text-[16px] font-bold hover:bg-slate-200 dark:hover:bg-slate-500 p-3 w-[150px] cursor-pointer flex  gap-3"
        >
          {theme ? (
            <>
              <Sun />
              <h1>Light Mode</h1>
            </>
          ) : (
            <>
              <Moon />
              <h1>Dark mode</h1>
            </>
          )}
        </button>
      </nav>
    </section>
  );
};

export default Navbar;
