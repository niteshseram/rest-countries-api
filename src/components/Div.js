import styled from "styled-components";

const Div = styled.div`
  position: ${({ position }) => position};

  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};

  background: ${({ theme, background }) =>
    background === "element" ? theme.colors.elements : background};
  box-shadow: ${({ boxShadow }) => boxShadow};
`;

Div.defaultProps = {
  position: "static",

  display: "block",
  justifyContent: "",
  alignItems: "",

  padding: "0",
  width: "none",

  background: "none",
  boxShadow: "none",
};

export default Div;
