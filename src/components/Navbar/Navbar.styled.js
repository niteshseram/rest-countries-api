import styled from "styled-components";
import { device } from "../../Devices";

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  padding: 1.5rem 0;
  @media ${device.sm} {
    font-size: 0.875rem;
  }
`;

export const ToggleButton = styled.button`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media ${device.sm} {
    font-size: 0.75rem;
  }
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.elements};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
