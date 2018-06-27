import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body {
    font-family: Helvetica;
    background-color: #D8D1F5;
  }

  * {
    box-sizing: content-box;
  }
`;

export const AppWrapper = styled.div`
  width: 285px;
  margin: 30px auto;
  background: white;
  padding: 10px;
  border-radius: 3px;
`;

export const Label = styled.div`
  color: #6B778C;
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
    color: #FFC49D;
    border-bottom-width: 3px;
    border-bottom-style: dashed;

    &:hover {
      border-bottom-style: dotted;
    }
  }
`;