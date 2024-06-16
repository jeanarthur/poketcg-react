import PropTypes from 'prop-types'

function CardFilter({cards, outCallback}) {

    function filter(event){
        let target = event.target;
        let filteredCards = cards?.filter((card) => card?.type === target.value);
        outCallback(filteredCards);
    }

    return(
        <div>
            <label>Tipo</label>
            <select onChange={filter}>
                <option key="all" value="all">All</option>
                {
                    getDistinctValues(cards?.map((card) => card?.type))
                        .map((type) => 
                            <option key={type} value={type}>{type}</option>
                        )
                }
            </select>
        </div>
    )
}

function getDistinctValues(values){
    return Array.from(new Set(values));
}

CardFilter.propTypes = {
    cards: PropTypes.array,
    outCallback: PropTypes.func
}

export default CardFilter;