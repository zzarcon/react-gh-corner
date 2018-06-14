import * as React from 'react';
import {Component} from 'react';
import FieldText from '@atlaskit/field-text';
import Select from '@atlaskit/single-select';
import {AppWrapper} from './styled';
import GHCorner, { CornerPosition } from '../src';

export interface Position {
  content: string;
  value: CornerPosition;
}

export interface AppState {
  href: string;
  position: Position;
  bgColor?: string;
  size?: number;
  ariaLabel?: string;
}

const positionItems = [
  {
    items: [
      { value: 'top-right', content: 'Top right' },
      { value: 'top-left', content: 'Top left' }
    ]
  }
];
const selectedItem: any = positionItems[0].items[0];

export default class App extends Component <{}, AppState> {
  state: AppState = {
    href: 'https://github.com/zzarcon/react-gh-corner',
    ariaLabel: 'View source on Github',
    bgColor: '#64CEAA',
    size: 180,
    position: selectedItem
  }

  onAriaLabelChange = (e: any) => {
    const ariaLabel = e.target.value;
    this.setState({
      ariaLabel
    });
  }

  onSizeChange = (e: any) => {
    const size = e.target.value;
    this.setState({
      size
    });
  }

  onColorChange = (e: any) => {
    const bgColor = e.target.value;
    this.setState({
      bgColor
    });
  }

  onPositionChange = (e: any) => {
    this.setState({
      position: e.item
    });
  } 

  render() {
    const {href, position, size, bgColor, ariaLabel} = this.state;

    return (
      <AppWrapper>
        <GHCorner 
          href={href}
          ariaLabel={ariaLabel}
          bgColor={bgColor}
          size={size}
          position={position.value}
        />
        <Select
          label="Position"
          items={positionItems}
          defaultSelected={selectedItem}
          onSelected={this.onPositionChange}
        />
        <FieldText label="Aria label" value={ariaLabel} onChange={this.onAriaLabelChange} />
        <div>
          Color
          <input value={bgColor} type="color" onChange={this.onColorChange} />
        </div>
        <div>
          Size
          <input value={size} type="number" onChange={this.onSizeChange} />
        </div>
      </AppWrapper>
    )
  }
}