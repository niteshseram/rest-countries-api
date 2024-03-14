import { Link } from "react-router-dom";
import {
  CardContainer,
  CardInfo,
  CountryDetail,
  CountryFlag,
  CountryKey,
  CountryName,
} from "./Card.styled";

export default function Card({ name, flag, region, population, capital }) {
  return (
    <Link
      to={encodeURI(name)}
      style={{ textDecoration: "none", color: "inherit" }}
      title={name}
    >
      <CardContainer>
        <CountryFlag src={flag} alt={`${name}'s flag`}></CountryFlag>
        <CardInfo>
          <CountryName>{name}</CountryName>
          <CountryDetail>
            <div>
              <CountryKey>Region:</CountryKey> {region}
            </div>
            <div>
              <CountryKey>Population:</CountryKey> {population}
            </div>
            <div>
              <CountryKey>Capital:</CountryKey> {capital}
            </div>
          </CountryDetail>
        </CardInfo>
      </CardContainer>
    </Link>
  );
}
