import Regions from "@/components/Regions";
import { getData } from "@/utility/getData";

import React from "react";

const europe = async () => {
  const data = await getData("europe");

  return <Regions data={data} />;
};

export default europe;
