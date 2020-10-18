import axios from 'axios';
import Config from '../config.json';

function getInstruments() {
    return axios(`${Config.API_URL}/api/instruments/`);
}

function deleteInstrument(instrumentId) {
    return axios.delete(`${Config.API_URL}/api/instruments/${instrumentId}`);
}

function addInstrument(instrument) {
    return axios.post(`${Config.API_URL}/api/instruments/`, instrument);
}

export default {
    getInstruments,
    deleteInstrument,
    addInstrument
}