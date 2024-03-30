const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: [],
            favorites: [],
        },
        actions: {
            loadStarWars: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people/');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
					const promises = data.results.map(person => fetch(person.url))
					const responses = await Promise.all(promises);
					const finalizedData = await Promise.all(responses.map(response => response.json()));
					console.log('Finalized Data', finalizedData)
					console.log(data.results)
                } catch (error) {
                    console.error('There was a problem with your fetch operation:', error);
                }
            },
            
        }
    };
};

export default getState;
