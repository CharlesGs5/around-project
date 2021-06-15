export const getPokemon = async (limit = 25, offset = 0) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.error(`There Was an Error! ${e}`);
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (e) {

    }
}