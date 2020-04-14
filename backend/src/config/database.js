const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/debt', {useNewUrlParser: true, useUnifiedTopology: true})