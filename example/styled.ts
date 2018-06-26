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
  width: 200px;
  margin: 0 auto;
`;

export const Label = styled.div`
  color: #6B778C;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  padding: 20px 0px 4px 0px;
`;