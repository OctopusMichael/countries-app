import Regions from "@/components/Regions";
import { getData } from "@/utility/getData";

import React from "react";

const america = async () => {
  const data = await getData("america");

  return <Regions data={data} />;
};

export default america;
