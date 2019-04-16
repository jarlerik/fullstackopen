import React from 'react';
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const API_URL = process.env.REACT_APP_API_URL;

const EnvData = () => {
    return (
        <div>
            <h6>{`Enviroment info (${ENVIRONMENT})`}</h6>
            <p>{`API_URL: ${API_URL}`}</p>
        </div>
    );
};

export default EnvData;