import React from 'react';

const Filter = ({setFilter}) => {
    return (
        <div>
            <form>
                <div>
                    Rajaa näytettäviä: <input onChange={(event) => setFilter(event.target.value)} />
                </div>
            </form>
        </div>
    );
};

export default Filter;