import axios from "axios";

const YGOApi = {

    getAllCards: (setStateCallback) => {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
            .then((res) => {
                let data = res?.data?.data;
                setStateCallback(data);
            })
            .catch((error) => {
                console.error(error);
            })
    },

    getCardById: (setStateCallback, id) => {
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
            .then((res) => {
                setStateCallback(res?.data?.data[0]);
            })
            .catch((error) => {
                console.error(error);
            })
    }

}

export default YGOApi;