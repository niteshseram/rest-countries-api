import styled from "styled-components";
import { device } from "../Devices";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 5rem;
  max-width: 1440px;
  width: 100%;
  @media ${device.sm} {
    padding: 0;
    width: 90%;
  }
`;

export default Container;
