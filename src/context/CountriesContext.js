import { createContext, useMemo, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const Context = CountriesContext;

  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const value = useMemo(
    () => ({
      search,
      setSearch,
      selectedRegion,
      setSelectedRegion,
    }),
    [search, setSearch, selectedRegion, setSelectedRegion]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CountriesProvider;
