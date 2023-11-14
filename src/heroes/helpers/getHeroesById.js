import { heroesData } from "../data/heroesData"


export const getHeroesById = ( id ) => {
    return heroesData.find( hero => hero.id === id)
}