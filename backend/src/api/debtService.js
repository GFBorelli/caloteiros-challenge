const Debt = require('./debt')

Debt.methods(['get', 'put', 'post', 'delete'])
Debt.updateOptions({ new: true, runValidators: true })

module.exports = Debt