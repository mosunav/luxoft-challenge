import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

describe('<App />', () => {
  it('renders a router', () => {
    const app = shallow(<App />)
    expect(app.find(Router).length).toEqual(1)
  })
})

describe('<App />', () => {
  it('renders a switch', () => {
    const app = shallow(<App />)
    expect(app.find(Switch).length).toEqual(1)
  })
})

