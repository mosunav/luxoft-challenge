import React from 'react';
import { shallow } from 'enzyme'
import { PageNotFound } from './PageNotFound';

describe('<PageNotFound />', () => {
  it('renders image page not found', () => {
    const loadingBar = shallow(<PageNotFound />)
    expect(loadingBar.find('img').length).toEqual(1)
  })
})
