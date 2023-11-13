import Countries from "@/components/Countries";
import React from "react";

const country = ({ params }) => {
  const { country } = params;
  return <Countries country={country} />;
};

export default country;
