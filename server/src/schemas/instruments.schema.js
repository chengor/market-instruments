const Joi = require('joi');

const create = Joi.object({
    name: Joi.string().required(),
    symbol: Joi.string().required(),
    instrumentType: Joi.string().required()
})

module.exports = {
    create
}