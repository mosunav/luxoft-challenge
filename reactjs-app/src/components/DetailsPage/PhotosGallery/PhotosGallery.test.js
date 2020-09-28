import React from 'react';
import { shallow, mount } from 'enzyme'
import { PhotosGallery } from './PhotosGallery';

const images = [
  {id: "image1", attributes: {url: "https://odc-img.herokuapp.com/insecure/czM6Ly9vdXRkb29yc3ktdXNlci1pbWFnZXMtdXMtd2VzdC0yL3Jlcy9vdXRkb29yc3kvaW1hZ2UvdXBsb2FkL3AvcmVudGFscy8zNDYzNS9pbWFnZXMvZmpkaWtqcXFrMGxnZmx3NDduNWMvMTUyMDUyOTYzMi5wbmc="}},
  {id: "image2", attributes: {url: "https://odc-img.herokuapp.com/insecure/czM6Ly9vdXRkb29yc3ktdXNlci1pbWFnZXMtdXMtd2VzdC0yL3Jlcy9vdXRkb29yc3kvaW1hZ2UvdXBsb2FkL3AvcmVudGFscy8zNDYzNS9pbWFnZXMvdzlmb3VmejNhd3dxaGlyZmt2ZXcvMTUyMzU4NTg0Mi5qcGc="}},
  {id: "image3", attributes: {url: "https://odc-img.herokuapp.com/insecure/czM6Ly9vdXRkb29yc3ktdXNlci1pbWFnZXMtdXMtd2VzdC0yL3Jlcy9vdXRkb29yc3kvaW1hZ2UvdXBsb2FkL3AvcmVudGFscy8zNDYzNS9pbWFnZXMvc3lpcXR4b3pka3FmbmozcmF1c3IvMTUyMzU4NTkxMi5qcGc="}},
  {id: "image4", attributes: {url: "https://odc-img.herokuapp.com/insecure/czM6Ly9vdXRkb29yc3ktdXNlci1pbWFnZXMtdXMtd2VzdC0yL3Jlcy9vdXRkb29yc3kvaW1hZ2UvdXBsb2FkL3AvcmVudGFscy8zNDYzNS9pbWFnZXMvamZsNmRpMnZua3pnNnN5Mno0bzcvMTUxOTc1MzM5Ni5qcGc="}}
]

describe('<PhotosGallery />', () => {
  it('should renders images', () => {
    const wrapper = shallow(<PhotosGallery images={images} />)
    const imagesFound = wrapper.find('img')
    expect(imagesFound.length).toEqual(4)
  })
})
