import styled from "styled-components";
import { device } from "../../Devices";

export const DropdownContainer = styled.div`
  width: 200px;
  position: relative;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text};
  @media ${device.sm} {
    font-size: 0.75rem;
  }
`;

export const DropdownIcon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  @media ${device.sm} {
    right: 2.5rem;
  }
`;

export const DropdownButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.colors.elements};
  border: none;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 1.125rem 2rem 1.125rem 1.5rem;
  font-size: inherit;
  text-align: start;
  position: relative;
  cursor: pointer;
  @media ${device.sm} {
    padding: 0.875rem 2rem 0.875rem 1.5rem;
  }
`;

export const DropdownBox = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.elements};
  border-radius: 5px;
  z-index: 5;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  visibility: ${(props) => props.visibility};
`;

DropdownBox.defaultProps = {
  visibility: "visible",
};

export const DropdownItem = styled.button`
  font-size: inherit;
  cursor: pointer;
  text-align: start;
  z-index: 5;
  &:hover {
    font-weight: 600;
  }
`;

export const DropdownBack = styled.button`
  background: none;
  border: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 0;
  right: 0;
  display: ${(props) => props.display};
`;

DropdownBack.defaultProps = {
  display: "none",
};
