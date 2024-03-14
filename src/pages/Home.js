import { useContext } from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Filter from "../components/Filter";
import Card from "../components/Card";

import { CountriesContext } from "../context/CountriesContext";

export default function Home() {
  const { data, isFetching } = useContext(CountriesContext);

  return (
    <Container>
      <Filter />
      <Grid>
        {isFetching ? (
          <div>Fetching countries</div>
        ) : (
          data.map((country) => (
            <Card
              key={country.name.common}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital[0]}
              flag={country.flags[1]}
            />
          ))
        )}
      </Grid>
    </Container>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 264px);
  grid-gap: 4.625rem;
  justify-content: center;
  margin-bottom: 3rem;
`;
