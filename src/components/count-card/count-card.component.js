import React from 'react';

import { LI } from './count-card.styles';

const CountCard = ({ title = 'Count Card', count = '-' }) => (
  <LI>
    <h3>{title}</h3>
    <p>{count}</p>
  </LI>
);

export default CountCard;
