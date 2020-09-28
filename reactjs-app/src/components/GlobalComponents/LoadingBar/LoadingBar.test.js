import React from 'react';
import { shallow } from 'enzyme'
import { LoadingBar } from './LoadingBar';
import LinearProgress from '@material-ui/core/LinearProgress';

describe('<LoadingBar />', () => {
  it('renders the two linear progress', () => {
    const loadingBar = shallow(<LoadingBar />)
    expect(loadingBar.find(LinearProgress).length).toEqual(2)
  })
})
