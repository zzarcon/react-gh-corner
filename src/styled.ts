import styled, {keyframes} from 'styled-components';
// @ts-ignore: unused variable
// prettier-ignore
import { HTMLAttributes, AnchorHTMLAttributes, ClassAttributes } from 'react';

const wave = keyframes`
  0%,100%{
    transform:rotate(0)
  }
  20%,60%{
    transform:rotate(-25deg)
  }
  40%,80%{
    transform:rotate(10deg)
  }
`;

export const Wrapper = styled.a`
  &:hover {
    .octo-arm {
      animation: ${wave} 560ms ease-in-out
    }
  }

  svg {
    fill:#64CEAA;
    color:#fff;
    position: absolute;
    z-index: 9999;
    top: 0;
    border: 0;
    right: 0;
  }
`;