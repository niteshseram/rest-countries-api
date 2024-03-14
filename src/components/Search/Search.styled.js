import styled from "styled-components";
import { device } from "../../Devices";

export const InputContainer = styled.form`
  width: 480px;
  background: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.input};
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
  cursor: text;
  display: flex;
  position: relative;
  font-size: 0.875rem;
  @media ${device.sm} {
    width: 100%;
    font-size: 0.75rem;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.input};
  border: none;
  padding: 1.125rem 0 1.125rem 4.625rem;
  font-size: inherit;
  background: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.input};
  }
  width: 100%;
  height: 100%;
  z-index: 2;
  @media ${device.sm} {
    padding: 0.875rem 0 0.875rem 4.625rem;
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 2rem;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
`;
