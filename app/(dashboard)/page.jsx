import React, { Suspense } from "react";
import { getDataAll } from "@/utility/getData";
import Regions from "@/components/Regions";

const home = async () => {
  const data = await getDataAll();

  return <Regions data={data} />;
};

export default home;
