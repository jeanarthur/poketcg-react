import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import YGODB from "../YGODB";
import CardFilter from "../components/CardFilter";

function MyCollection(){

    const [cards, setCards] = useState();
    const [filteredCards, setFilteredCards] = useState();
    const [page, setPage] = useState(0);

    if (!cards){
        YGODB.getCardCollection(setCards);
    }

    useEffect(() => {
        setFilteredCards(cards);
    }, [cards]);

    useEffect(() => {
        if (filteredCards?.length === 0){
            setFilteredCards(cards);
        }
    }, [filteredCards])

    return(
        <>
            <h1>MyCollection</h1>
            <Link to={'/'}>Página inicial</Link>
            <br />
            {
                filteredCards?.length > 0 && <CardFilter cards={cards} outCallback={setFilteredCards} />
            }
            <br />
            {
                filteredCards && filteredCards.slice(page, page + 18).map((card) => 
                    <img style={{width: 200+'px', height: 'auto'}} key={card?.id} src={(`/cards/${card?.id}.jpg`)} alt={card?.name}/>
                )
            }
            {
                filteredCards?.length == 0 && <h2>Empty collection</h2>
            }
            <br />
            <button onClick={()=>{setPage(page >= 18 ? page - 18 : 0)}}>Anterior</button>
            <br />
            <button onClick={()=>{setPage(page <= cards?.length ? page + 18 : cards?.length)}}>Próximo</button>
        </>
    )
}

export default MyCollection;