import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const Context = CountriesContext;

  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchData = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3/all?fields=name,region,capital,flags,subregion,tld,currencies,languages,borders,cioc,population,cca3`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.warn("Fetch Error: ", error);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getCountryDetail = useCallback(
    (name) => {
      const countryDetail = data.find((country) => {
        return country.name.common.toLowerCase() === name.toLowerCase();
      });

      return countryDetail;
    },
    [data]
  );

  let filteredCountries = data;
  if (selectedRegion) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region.toLowerCase() === selectedRegion.toLowerCase()
    );
  }
  if (search) {
    filteredCountries = filteredCountries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  const value = useMemo(
    () => ({
      search,
      setSearch,
      selectedRegion,
      setSelectedRegion,
      data: filteredCountries,
      allCountries: data,
      isFetching,
      getCountryDetail,
    }),
    [
      search,
      setSearch,
      selectedRegion,
      setSelectedRegion,
      isFetching,
      getCountryDetail,
      filteredCountries,
      data,
    ]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default CountriesProvider;
