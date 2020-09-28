import React from 'react';
import { shallow } from 'enzyme'
import { InfoDetails } from './InfoDetails';

const data = {
  type: "camper-van",
  location: { city: "san FRANCISCO", state: "Ca"},
  name: "Jeep Wrangler Rubicon - San Francisco",
  price_per_day: "19500"
}
const userData = [
  { attributes: { 
      avatar_url: "https://res.cloudinary.com/outdoorsy/image/upload/v1508963457/p/users/63626/images/zgvtfmcc0ol8ytnrwbvz.png",
      first_name: "Mason",
      last_name: "Schreck"
    }
  }
]

describe('<InfoDetails />', () => {
  it('should renders type p', () => {
    const wrapper = shallow(<InfoDetails data={data} userData={userData} />)
    const pType = wrapper.find('p.info-details-type')
    expect(pType.text()).toBe("CAMPER-VAN  ●  SAN FRANCISCO, CA")
  })

  it('should renders name p', () => {
    const wrapper = shallow(<InfoDetails data={data} userData={userData} />)
    const pName = wrapper.find('p.info-details-name')
    expect(pName.text()).toBe('Jeep Wrangler Rubicon - San Francisco')
  })

  it('should renders price label p', () => {
    const wrapper = shallow(<InfoDetails data={data} userData={userData} />)
    const priceLabel = wrapper.find('p.info-details-price-label')
    expect(priceLabel.text()).toBe('$19500')
  })

  it('should renders avatar image', () => {
    const wrapper = shallow(<InfoDetails data={data} userData={userData} />)
    const avatarImage = wrapper.find('img')
    expect(avatarImage.prop('src')).toBe('https://res.cloudinary.com/outdoorsy/image/upload/v1508963457/p/users/63626/images/zgvtfmcc0ol8ytnrwbvz.png')
  })

  it('should renders avatar name', () => {
    const wrapper = shallow(<InfoDetails data={data} userData={userData} />)
    const avatarName = wrapper.find('p.info-details-avatar-name')
    expect(avatarName.text()).toBe('Mason Schreck')
  })
})