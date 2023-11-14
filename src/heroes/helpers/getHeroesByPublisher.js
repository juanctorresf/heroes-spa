import { heroesData } from '../data/heroesData';

export const getHeroesByPublisher = ( publisher ) => {
    const validPublisher = [ 'DC Comics', 'Marvel Comics' ];

    if( !validPublisher.includes( publisher ) ) {
        throw new Error(`${publisher} is no a valid publisher`);
        return;
    }

    return heroesData.filter( hero => hero.publisher === publisher );
}
