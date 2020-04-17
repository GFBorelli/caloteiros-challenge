const restful = require('node-restful')
const mongoose = restful.mongoose

const debtSchema = new mongoose.Schema({
    description: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: String, required: true },
    debtor: { type: String, required: true },
    debtorId: {type: Number, required: true}
})

module.exports = restful.model('Debt', debtSchema)