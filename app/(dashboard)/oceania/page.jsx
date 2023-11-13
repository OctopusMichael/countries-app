import Regions from "@/components/Regions";
import { getData } from "@/utility/getData";

import React from "react";

const oceania = async () => {
  const data = await getData("oceania");

  return <Regions data={data} />;
};

export default oceania;
