import React from 'react';

const Persons = ({ persons, deletePerson }) => {
    return (
        <div>
            {persons.map( (person, index) => {
                return (
                    <div key={`person-${person.id}-index-${index}`}>
                        {`${person.name} ${person.number || ''}`}
                        <button onClick={() => deletePerson(person.id)}>Poista</button>
                    </div>
                )}
            )}
        </div>
    );
};

export default Persons;