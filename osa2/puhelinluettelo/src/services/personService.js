import axios from 'axios';

const PROTOCOL = 'http';
const HOST = 'localhost';
const PORT = 3001;
const PERSONS_API = `${PROTOCOL}://${HOST}:${PORT}/persons`;

const personService = {

    getPersons: async () => {
        return await axios.get(PERSONS_API)
        .catch(error => {
            console.log('Error GET /persons', error);
            return error.response;
        });
    },

    createPerson: async (person) => {
        if (person) {
            return await axios.post(PERSONS_API, person)
            .catch(error => {
                console.log('Error POST /persons', error);
                return error.response;
            });
        }
    },
    deletePerson: async (personId) => {
        if(personId) {
            return await axios.delete(`${PERSONS_API}/${personId}`)
            .catch( error => {
                console.log(`ERROR DELETE /persons${personId}`,error.response);
                return error.response;
            })
        }
    },
    updatePerson: async (person) => {
        if(person) {
            return await axios.put(`${PERSONS_API}/${person.id}`, person)
            .catch( error => {
                console.log(`ERROR PUT /persons/${person.id}`, error);
                return error.response;
            });
        }
    }
}

export default personService;