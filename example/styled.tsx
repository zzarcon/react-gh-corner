import styled from "@emotion/styled";
import { Global } from "@emotion/react";

export const globalStyles = (
  <Global
    styles={{}}
  />
);

export const AppWrapper = styled.div`
  width: 285px;
  margin: 30px auto;
  background: white;
  padding: 10px;
  border-radius: 3px;
`;

export const Label = styled.div`
  color: #6b778c;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  padding: 20px 0px 4px 0px;
`;

export const Footer = styled.div`
  display: flex;

  > div {
    flex: 1;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 22px;

  a {
    text-decoration: none;
    color: #ffc49d;
    border-bottom-width: 3px;
    border-bottom-style: dashed;

    &:hover {
      border-bottom-style: dotted;
    }
  }
`;
