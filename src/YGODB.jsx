import axios from "axios";

const YGODB = {

    getCardCollection: (setStateCallback) => {
        axios.get("http://localhost:3000/cardCollection")
            .then((res) => {
                let data = res?.data;
                setStateCallback(data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    getCardFromCollection: (setStateCallback, id) => {
        axios.get(`http://localhost:3000/cardCollection/${id}`)
            .then((res) => {
                setStateCallback(res?.data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    postCardInCollection: (card) => {
        axios.post("http://localhost:3000/cardCollection", card)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    patchCardInColection: (id, amount) => {
        axios.patch(`http://localhost:3000/cardCollection/${id}`, {amount})
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export default YGODB;