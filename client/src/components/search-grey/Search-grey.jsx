import React from 'react';
import './Search-grey.scss';

const SearchGrey = ({ placeholder = '', disabled = false, value='', onChange }) => (
  <input className={'search-grey'} type="text" placeholder={placeholder} disabled={disabled} value={value} onChange={onChange}/>
);

export default SearchGrey;
