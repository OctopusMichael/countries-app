import React, { Suspense } from "react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { getDataAll, getDataName } from "@/utility/getData";

const Countries = async ({ country }) => {
  const [data] = await getDataName(country);
  const newData = await getDataAll();
  const currenciesNAme = Object.keys(data.currencies);

  const languages = data.languages;

  const listaIdiomas = Object.keys(languages).map((codigo) => (
    <h1 key={codigo}> {languages[codigo]} </h1>
  ));

  return (
    <section>
      <div className="container flex flex-col gap-5 my-[40px] md:my-[80px]">
        <Link
          href={"/"}
          className="rounded-lg  w-[150px] p-3 bg-white shadow-lg hover:bg-slate-200 dark:hover:bg-slate-400  dark:bg-darkLight text-black dark:text-white justify-center flex gap-5"
        >
          <MoveLeft />
          back
        </Link>

        <div className="flex flex-col md:flex-row  gap-[50px] md:gap-[100px] my-[50px] text-black dark:text-white ">
          <div className="md:w-6/12  ">
            <img
              className="w-full h-auto "
              src={data.flags.png}
              alt={data.flags.alt}
            />
          </div>
          <div className="md:w-6/12  flex flex-col gap-5 ">
            <h1 className="text-[24px] md:text-[40px] font-bold">
              {data.name.common}
            </h1>
            <div className="flex md:flex-row flex-col gap-5 md:gap-[100px]">
              <ul className=" flex flex-col gap-3">
                <li>
                  {" "}
                  <span className="font-bold">Native Name: </span>{" "}
                  {data.name.common}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Population: </span>{" "}
                  {data.population}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Region: </span> {data.region}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Sub Region: </span>{" "}
                  {data.subregion}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Capital: </span> {data.capital}
                </li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li>
                  <span className="font-bold"> Top Level Domain: </span>
                  {data.tld}
                </li>
                <li>
                  <span className="font-bold"> Currencies: </span>
                  {data.currencies[currenciesNAme]?.name}
                </li>
                <li className="flex gap-2 ">
                  <span className="font-bold"> Lenguages: </span>
                  {listaIdiomas}
                </li>
              </ul>
            </div>
            {/* //? //? //? //? BORDERS COUNTRIES !!!! //? //? //? */}
            <div className=" flex md:flex-row flex-col gap-[50px]  md:items-center">
              <span className="w-1/4 font-bold">Border Countries: </span>

              <ul className=" w-3/4 flex flex-wrap gap-3 gap-y-[30px] ">
                {data.borders ? (
                  data.borders.map((border) => (
                    <li className=" " key={border}>
                      {newData.map(
                        (country) =>
                          country.fifa === border && (
                            <Link
                              href={`/${country.name.common}`}
                              className="hover:bg-slate-200 dark:hover:bg-slate-400 rounded-lg bg-white shadow-lg dark:bg-darkLight p-3  "
                            >
                              {country.name.common}
                            </Link>
                          )
                      )}
                    </li>
                  ))
                ) : (
                  <li>
                    <h1 className="rounded-lg bg-white shadow-lg dark:bg-darkLight p-3">
                      ISLAND
                    </h1>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
