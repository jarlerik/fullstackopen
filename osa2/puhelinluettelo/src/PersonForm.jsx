import React from 'react';

const PersonForm = ({setNewName, newName, setNewNumber, newNumber, addNewPerson}) => {
    return (
        <form>
            <div>
                nimi: <input onChange={event => setNewName(event.target.value)} value={newName} />
            </div>
            <div>
                numero: <input onChange={event => setNewNumber(event.target.value)} value={newNumber} />
            </div>
            <div>
                <button onClick={addNewPerson} type="submit">lisää</button>
            </div>
        </form>
    );
};

export default PersonForm;