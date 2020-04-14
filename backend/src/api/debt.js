const restful = require('node-restful')
const mongoose = restful.mongoose

const debtSchema = new mongoose.Schema({
    description: { type: String, required: true },
    value: { type: String, required: true },
    date: { type: String, required: true },
    debtor: { type: String, required: true },
})

module.exports = restful.model('Debt', debtSchema)