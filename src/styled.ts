import styled, {keyframes} from 'styled-components';
// @ts-ignore: unused variable
// prettier-ignore
import { HTMLAttributes, AnchorHTMLAttributes, ClassAttributes } from 'react';
import { CornerPosition } from './ghCorner';

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

export const OctoArm = styled.path`
  transform-origin: 130px 106px;
`;

export const Link = styled.a`
  &:hover {
    ${OctoArm} {
      animation: ${wave} 560ms ease-in-out;
    }
  }
`;

export interface WrapperProps {
  bgColor?: string;
  position?: CornerPosition;
}

export const Wrapper = styled.svg`
  fill: ${(props: WrapperProps) => props.bgColor};
  color: #fff;
  position: absolute;
  z-index: 9999;
  top: 0;
  border: 0;
  ${(props: WrapperProps) => props.position === 'top-left' ? `
    left: 0;
    transform: scale(-1, 1);
  ` : `
    right: 0;
  `}
`;