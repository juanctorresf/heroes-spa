import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../helpers';
import { useMemo } from 'react';

export const HeroPage = () => {

    const { HeroId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo( () => getHeroesById( HeroId ), [ HeroId ] );

    const handleNavigateBack = () => {
        navigate(-1)
    }
    
    if( !hero ) {
        return <Navigate to="/marvel"/>
    }

    return (
        <div className='row mt-5 '>
            <div className="col-4">
                <img 
                    src={`/assets/heroes/${ HeroId }.jpg`} 
                    alt={ hero.superhero }
                    className='img-thumbnail animate__animated animate__fadeInLeft' 
                />
            </div>

            <div className="col-8 animate__animated animate__fadeInRight">
                <h3>{ hero.superhero }</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter Ego: </b>{ hero.alter_ego }</li>
                    <li className='list-group-item'><b>Publisher: </b>{ hero.publisher }</li>
                    <li className='list-group-item'><b>First Appearance: </b>{ hero.first_appearance }</li>
                </ul>

                <h5 className='mt-3'> Characters </h5>
                <p>{ hero.characters }</p>

                <button 
                    className='btn btn-outline-primary'
                    onClick={ handleNavigateBack }
                > 
                    Back 
                </button>
            </div>
        </div>
    )
}
