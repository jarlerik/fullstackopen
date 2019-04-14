import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryView from './CountryView';

const API_ENDPOINT = 'https://restcountries.eu/rest/v2/all';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchCountries = async () => {
    const response = await axios.get(API_ENDPOINT);
    const { data } = response;
    setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const filterCountries = (value) => {
    setFilter(value);
  }
  
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()));
  const countryCount = filteredCountries.length || 0;
  return (
    <div style={{ margin: '10px' }}>
        <div>
          Find coutry: <input value={filter} onChange={(event) => {filterCountries(event.target.value)}} />
        </div>
      { countryCount <= 10 && countryCount > 1 &&
        <div>
          {filteredCountries.map(country => <div key={country.name}>{country.name}</div>)}
        </div>
      }
      { countryCount > 10 &&<div> Too many matches, specify another filter</div> }
      { countryCount === 1 && <CountryView country={filteredCountries[0]} /> }
    </div>
  );
};

export default App;