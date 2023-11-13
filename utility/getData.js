const URL_ALL = "https://restcountries.com/v3.1/all";

export const getData = async (region) => {
  let res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  let data = await res.json();
  return data;
};

export const getDataAll = async () => {
  let res = await fetch(URL_ALL);
  let data = await res.json();
  return data;
};


export const getDataName = async (name) => {
  let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  let data = await res.json();
  return data;
};
