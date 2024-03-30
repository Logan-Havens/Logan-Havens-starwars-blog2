import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const HomeGrid = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadStarWars();
    }, []);

    return (
        <div>
            <h1>Star Wars Characters</h1>
            <ul>
                {store.characters.map((character, index) => (
                    <li key={index}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomeGrid;
