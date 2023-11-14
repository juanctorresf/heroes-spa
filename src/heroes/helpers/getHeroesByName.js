import { heroesData } from "../data/heroesData";


export const getHeroesByName = ( name = '') => {
    name = name.toLocaleLowerCase().trim();
    
    if( name.length === 0 ) return [];

    return heroesData.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name ) 
    )
}