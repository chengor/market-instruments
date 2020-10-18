const model = require('../models/instruments.model');

const getAll = async () => {
  const instruments = await model.getAll();
  return instruments;
}

const deleteInstrument = async id => { 
  await model.deleteInstrument(id);
}

const create = async instrument => {
  const nextId = await model.getNextId();
  const newInstrument = {instrumentId: nextId, ...instrument};
  await model.create(newInstrument);
  return newInstrument;
}

module.exports = {
    getAll,
    create,
    deleteInstrument
}