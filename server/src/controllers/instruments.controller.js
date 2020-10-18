const service = require('../service/instruments.service');

const getAll = async (req, res) => {
    try {
        const instruments = await service.getAll();
        res.json(instruments);
    } catch (e) {
        res.sendStatus(500);
    }
}

const deleteInstrument = async (req, res) => {
    const { instrumentId } = req.params;
    
    if (!instrumentId) {
        res.sendStatus(400);
        return;
    }

    try {
        await service.deleteInstrument(instrumentId);
        res.sendStatus(204);
    } catch (err) {
        res.sendStatus(500);
    }
}

const create = async (req, res) => {
    const instrument = req.body;
    try {
        const newInstrument = await service.create(instrument);
        res.json(newInstrument);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = {
    getAll,
    create,
    deleteInstrument
}