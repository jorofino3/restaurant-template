import React from 'react';

import { images } from '../../constants';

//Sub heading for subsections of the page
const SubHeading = ({ title }) => (
  //in line style using object
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;