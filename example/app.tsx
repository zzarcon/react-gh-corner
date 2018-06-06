import * as React from 'react';
import {Component} from 'react';
import {AppWrapper} from './styled';
import GHCorner from '../src';

export interface AppState {
  
}

const href = 'https://github.com/zzarcon/react-gh-corner';

export default class App extends Component <{}, AppState> {
  state: AppState = {
    
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner href={href}/>
      </AppWrapper>
    )
  }
}