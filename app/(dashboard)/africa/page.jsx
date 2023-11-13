import Regions from "@/components/Regions";

import { getData } from "@/utility/getData";

const africa = async () => {
  const data = await getData("africa");

  return <Regions data={data} />;
};

export default africa;
