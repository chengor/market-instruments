const db = require('./db');

const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * 
                  FROM instrument`, (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        })
    })
}

const deleteInstrument = async (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE 
                  FROM instrument
                  WHERE instrumentId = ${id}`, (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        })
    })
}

const create = async (instrument) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO instrument SET ?`, instrument, (err, results) => {
            if (err) {
                reject(err);
            }

            resolve(results);
        })
    })
}

const getNextId = async () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT MAX(instrumentId) + 1 as nextId 
                  FROM instrument`, (err, results) => {
            if (err) {
                reject(err);
            }
            
            resolve(results[0].nextId);
        })
    })
}

module.exports = {
    getAll,
    create,
    deleteInstrument,
    getNextId
}