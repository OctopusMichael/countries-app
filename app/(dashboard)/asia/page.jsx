import Regions from "@/components/Regions";
import { getData } from "@/utility/getData";

import React from "react";

const asia = async () => {
  const data = await getData("asia");

  return <Regions data={data} />;
};

export default asia;
