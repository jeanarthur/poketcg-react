import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import YGODB from "../YGODB";
import YGOApi from '../YGOApi';

function Shop(){

    const [card, setCard] = useState();

    useEffect(() => {
        if (card) {
            YGODB.postCardInCollection(card);
        }
    }, [card])

    function getCard(){
        YGOApi.getRandomCard(setCard);
    }

    function closePack(){
        setCard();
    }

    return(
        <>
            <h1>Shop</h1>
            <Link to={'/'}>Página inicial</Link>
            <br />
            <button onClick={getCard}>Get Card</button>
            {
                card && 
                <>
                    <img style={{width: 200+'px', height: 'auto'}} key={card?.id} src={card?.image} alt={card?.name}/>
                </>
            }
        </>
    )
}

export default Shop;