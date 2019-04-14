import React from 'react';
import Weather from './Weather';

const CountryView = ({country}) => {
    const { name, capital, population, languages } = country;
    return (
        <div>
            <h1>{name}</h1>
            <p>{`Capital ${capital}`}</p>
            <p>{`Population ${population}`}</p>

            <h2>Languages</h2>
            <ul>
                {languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <div>
                <img style={{
                    maxWidth: '30%',
                    border: '1px solid gray'
                }} src={country.flag} alt='Country flag' />
            </div>
            <Weather city={capital} />
        </div>
    );
};

export default CountryView;