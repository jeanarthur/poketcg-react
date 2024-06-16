import axios from "axios";

const YGODB = {

    getAllCards: (setStateCallback) => {
        axios.get("http://localhost:3000/cardCollection")
            .then((res) => {
                let data = res?.data;
                setStateCallback(data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    getCardById: (setStateCallback, id) => {
        axios.get(`http://localhost:3000/cardCollection/${id}`)
            .then((res) => {
                setStateCallback(res?.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

}

export default YGODB;