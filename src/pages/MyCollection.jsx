import { Link } from "react-router-dom";
import { useState } from "react";
import YGOApi from "../YGOApi";

function MyCollection(){

    const [cards, setCards] = useState();
    const [page, setPage] = useState(0);

    if (!cards){
        YGOApi.getAllCards(setCards);
    }

    return(
        <>
            <h1>MyCollection</h1>
            <Link to={'/'}>Página inicial</Link>
            <br />
            {
                cards && cards.slice(page, page + 18).map((card) => 
                    <img style={{width: 200+'px', height: 'auto'}} key={card?.id} src={(`/cards/${card?.id}.jpg`)} alt={card?.name}/>
                )
            }
            <br />
            <button onClick={()=>{setPage(page >= 18 ? page - 18 : 0)}}>Anterior</button>
            <br />
            <button onClick={()=>{setPage(page <= cards?.length ? page + 18 : cards?.length)}}>Próximo</button>
        </>
    )
}

export default MyCollection;