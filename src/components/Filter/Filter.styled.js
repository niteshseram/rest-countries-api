import styled from "styled-components";
import { device } from "../../Devices";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
  @media ${device.sm} {
    margin: 1.5rem 0;
    flex-direction: column;
    gap: 2.5rem;
    align-items: flex-start;
  }
`;
