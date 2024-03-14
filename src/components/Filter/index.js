import Dropdown from "../Dropdown";
import Search from "../Search";
import { FilterContainer } from "./Filter.styled";

export default function Filter() {
  return (
    <FilterContainer>
      <Search />
      <Dropdown />
    </FilterContainer>
  );
}
