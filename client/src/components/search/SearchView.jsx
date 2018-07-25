import React from 'react';
import './Search.scss';

const SearchView = props => (
  <input className={`search ${props.className}`} type="text" placeholder={props.placeholder} style={props.style} disabled={props.disabled} />
);

export default SearchView;
