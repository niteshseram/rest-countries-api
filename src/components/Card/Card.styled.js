import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.elements};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 100%;
  min-height: 336px;
  &:hover {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const CountryFlag = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CountryName = styled.h1`
  font-size: 1.125rem;
  font-weight: 800;
`;

export const CountryDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
`;

export const CountryKey = styled.span`
  font-weight: 600;
`;
