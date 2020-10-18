import axios from 'axios';
import Config from '../config.json';

const getBaseURL = () =>{
    return `${Config.API_URL}/instruments`;
}

const getInstruments = () => {
    return axios.get(getBaseURL());
}

const deleteInstrument = instrumentId => {
    return axios.delete(`${getBaseURL()}/${instrumentId}`);
}

const addInstrument = instrument => {
    return axios.post(getBaseURL(), instrument);
}

export default {
    getInstruments,
    deleteInstrument,
    addInstrument
}