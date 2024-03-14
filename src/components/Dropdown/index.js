import { useContext, useState } from "react";
import {
  DropdownBack,
  DropdownBox,
  DropdownButton,
  DropdownContainer,
  DropdownIcon,
  DropdownItem,
} from "./Dropdown.styled";
import { CountriesContext } from "../../context/CountriesContext";

export default function Dropdown() {
  const { selectedRegion: value, setSelectedRegion: onChange } =
    useContext(CountriesContext);
  const [isOpen, setIsOpen] = useState(false);

  const pickRegion = (newRegion) => {
    onChange(newRegion);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton
        title="Filter by Region"
        name="region"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!value ? "Filter by Region" : value}
        <DropdownIcon>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
              fill="currentColor"
            />
          </svg>
        </DropdownIcon>
      </DropdownButton>
      <DropdownBox visibility={isOpen ? "visible" : "hidden"}>
        {!value ? null : (
          <DropdownItem
            onClick={() => {
              pickRegion("");
            }}
          >
            None
          </DropdownItem>
        )}
        <DropdownItem
          onClick={() => {
            pickRegion("Africa");
          }}
        >
          Africa
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            pickRegion("Americas");
          }}
        >
          Americas
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            pickRegion("Asia");
          }}
        >
          Asia
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            pickRegion("Europe");
          }}
        >
          Europe
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            pickRegion("Oceania");
          }}
        >
          Oceania
        </DropdownItem>
      </DropdownBox>
      <DropdownBack
        display={isOpen ? "block" : "none"}
        onClick={() => setIsOpen(false)}
        tabIndex={-1}
      />
    </DropdownContainer>
  );
}
