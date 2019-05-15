import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personService from './services/personService';
import Notifications from './Notifications';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filterValue, setFilter] = useState('');
    const [notifications, setNotifications] = useState([])

    const clearInputFields = () => {
        setNewName('');
        setNewNumber('');
    }
    const removeNotification = (notifications) => {
        const notificationsCopy = [...notifications];
        notificationsCopy.pop();
        setNotifications(notificationsCopy)
    }

    const showNotification = (message, type) => {
        const newNotification = { message, type };
        const notificationsCopy = [...notifications].concat([newNotification]);
        setNotifications(notificationsCopy);

        setTimeout(() => {removeNotification(notificationsCopy)}, 3000);
    }

    const getPersons = async () => {
        const response = await personService.getPersons();
        const { data } = response;
        setPersons(data);
    }
    const addNewPerson = async (event) => {
        event.preventDefault();
        const foundPerson = persons.find((person) => person.name === newName)
        if (foundPerson) {
            if (window.confirm(`${newName} on jo luettelossa. Korvataanko vanha numero uudella?`)) {
                const updatedPerson = { ...foundPerson, number: newNumber }
                const response = await personService.updatePerson(updatedPerson)
                if (response.data) {
                    const updatedPersonsList = persons.map(person => person.id === updatedPerson.id ? updatedPerson : person);
                    setPersons(updatedPersonsList);
                    showNotification(`${updatedPerson.name} päivitetty.`, Notifications.SUCCESS);
                    clearInputFields();
                }
                else {
                    response.error && showNotification(`${response.error.message}`, Notifications.ERROR)
                }
            }
        }
        else {
            const newPerson = {
                name: newName,
                number: newNumber
            };

            const response = await personService.createPerson(newPerson);

            if(response.data) {
                const personsCopy = [...persons];
                

                personsCopy.push(newPerson);
                setPersons(personsCopy);
                clearInputFields();
                showNotification(`Lisättiin ${newPerson.name}.`, Notifications.SUCCESS);
            }
            else {
                response.error && showNotification(`${response.error.message}`, Notifications.ERROR)
            }
            

        }
    }
    const deletePerson = async (personId) => {
        const person = persons.find(person => person.id === personId);
        if (window.confirm(`Poistetaanko henkilö ${person.name}?`)) {
            const newPersonList = persons.filter(person => person.id !== personId);
            setPersons(newPersonList);
            const response = await personService.deletePerson(personId);
            if (response && response.status === 200) {
                showNotification(`${person.name} poistettiin.`, Notifications.SUCCESS);
            }
            if(response && response.status === 404) {
                showNotification(`Henkilö ${person.name} oli jo poistettu.`, Notifications.ERROR);
            }
            
        }

    }

    useEffect(() =>{
        getPersons();
    }, []);

    
    const filteredResult = filterValue.length > 0 && persons.filter( person => person.name.toLowerCase().includes(filterValue.toLowerCase()));
    const personsList = filteredResult || persons;
    return (
        <div>
            <Notifications notifications={notifications} />
            <h2>Puhelinluettelo</h2>
            <Filter setFilter={setFilter}/>
            <PersonForm 
                setNewName={setNewName}
                newName={newName}
                setNewNumber={setNewNumber}
                newNumber={newNumber}
                addNewPerson={addNewPerson}
            />
            <h2>Numerot</h2>
            <Persons deletePerson={deletePerson} persons={personsList} />
        </div>
    )

}

export default App