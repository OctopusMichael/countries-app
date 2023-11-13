"use client";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import useStore from "@/hooks/useStore";

const Regions = ({ data }) => {
  const [newData, setNewData] = useState(data);
  const searchValue = useStore((state) => state.searchValue);

  useEffect(() => {
    const update = data.filter((element) =>
      element.name.common
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim())
    );
    setNewData(update);
  }, [searchValue]);

  return (
    <section>
      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] ">
          {newData.map((e) => (
            <Link
              href={e.name.common}
              key={e.name.common}
              className=" bg-white  dark:bg-darkLight text-black dark:text-slate-200 rounded-lg shadow-xl hover:scale-110 cursor-pointer hover:transition-all hover:duration-200  "
            >
              <img
                className="rounded-t-lg w-full h-[200px]"
                src={e.flags.png}
                alt={e.name.common}
              />
              <div className=" flex flex-col gap-4 p-[30px] mb-5">
                <h1 className="text-[24px] font-bold hover:text-blue-500">
                  {" "}
                  {e.name.common}
                </h1>
                <h2>
                  {" "}
                  <span className="font-bold">Population:</span> {e.population}
                </h2>
                <h2>
                  {" "}
                  <span className="font-bold">Region:</span> {e.region}
                </h2>
                <h2>
                  {" "}
                  <span className="font-bold">Capital:</span> {e.capital}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;
