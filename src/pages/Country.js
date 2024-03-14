import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Container from "../components/Container";

import { CountriesContext } from "../context/CountriesContext";
import { device } from "../Devices";

export default function Country() {
  const { country } = useParams();
  const { getCountryDetail, isFetching, allCountries } =
    useContext(CountriesContext);
  const countryDetail = getCountryDetail(decodeURI(country));

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryDetail || {};

  const getBorderCountryButton = (borderCode) => {
    const borderCountries = allCountries.find(
      (country) => country.cca3 === borderCode
    );

    const countryLink =
      borderCountries !== null || borderCountries !== undefined
        ? encodeURI(borderCountries.name.common)
        : "";
    const countryName =
      borderCountries !== null || borderCountries !== undefined
        ? borderCountries.name.common
        : "";

    return (
      <Link to={`/${countryLink}`} key={borderCode}>
        <BorderCountryButton>{countryName}</BorderCountryButton>
      </Link>
    );
  };

  return (
    <Container>
      {!countryDetail || isFetching ? (
        <div>Fetching data</div>
      ) : (
        <DetailContainer>
          <Link to="/">
            <BackButton>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="call-made">
                  <path
                    id="Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              <span>Back</span>
            </BackButton>
          </Link>
          <CountryInfoContainer>
            <CountryFlag src={flags[1]} alt={`${name}'s flag`} />
            <CountryInfoDetail>
              <CountryName>{name.common}</CountryName>
              <InfoContainer>
                <InfoItemsContainer>
                  <InfoItem>
                    <InfoItemTitle>Native Name: </InfoItemTitle>
                    {Object.values(name.nativeName)[0].official}
                  </InfoItem>
                  <InfoItem>
                    <InfoItemTitle>Population: </InfoItemTitle>
                    {population.toLocaleString()}
                  </InfoItem>
                  <InfoItem>
                    <InfoItemTitle>Region: </InfoItemTitle>
                    {region}
                  </InfoItem>
                  <InfoItem>
                    <InfoItemTitle>Sub Region: </InfoItemTitle>
                    {subregion}
                  </InfoItem>
                  <InfoItem>
                    <InfoItemTitle>Capital: </InfoItemTitle>
                    {capital[0]}
                  </InfoItem>
                </InfoItemsContainer>
                <InfoItemsContainer>
                  <InfoItem>
                    <InfoItemTitle>Top Level Domain: </InfoItemTitle>
                    {tld}
                  </InfoItem>
                  <InfoItem>
                    <InfoItemTitle>Currencies: </InfoItemTitle>
                    {Object.values(currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </InfoItem>
                  <InfoItem>
                    <InfoItemTitle>Languages: </InfoItemTitle>
                    {Object.values(languages).join(", ")}
                  </InfoItem>
                </InfoItemsContainer>
              </InfoContainer>
              <BorderItem>
                <BorderTitle>Border Countries: </BorderTitle>
                <BorderCountriesContainer>
                  {borders.map((borderCode) =>
                    getBorderCountryButton(borderCode)
                  )}
                </BorderCountriesContainer>
              </BorderItem>
            </CountryInfoDetail>
          </CountryInfoContainer>
        </DetailContainer>
      )}
    </Container>
  );
}

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  min-width: 8.5rem;
  justify-content: center;
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  @media ${device.sm} {
    padding: 0.375rem 1.5rem;
  }
`;

const DetailContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: flex-start;

  @media ${device.sm} {
    margin: 2.875rem 0;
    gap: 4rem;
  }
  a {
    text-decoration: none;
  }
`;

const CountryInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  justify-content: space-between;
  gap: 6rem;
  width: 100%;
  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
  }
`;

const CountryFlag = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  border-radius: 0.625rem;
`;

const CountryInfoDetail = styled.div``;

const CountryName = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  @media ${device.sm} {
    font-size: 1.375rem;
  }
`;

const InfoItem = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  @media ${device.sm} {
    font-size: 0.875rem;
  }
`;

const BorderItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 4.25rem;
  @media ${device.sm} {
    margin-top: 2.125rem;
    flex-direction: column;
  }
`;

const InfoItemTitle = styled.span`
  font-weight: 600;
`;

const BorderTitle = styled.span`
  font-weight: 600;
  white-space: nowrap;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 7.5rem;
  margin-top: 1.438rem;

  @media ${device.sm} {
    margin-top: 1rem;
    flex-direction: column;
    gap: 2rem;
  }
`;

const InfoItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
`;

const BorderCountryButton = styled.div`
  border-radius: 2px;
  padding: 0.25rem 0.5rem;
  min-width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.elements};
`;

const BorderCountriesContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
`;
