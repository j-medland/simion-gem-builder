//electrode
const AppendableEntity = require('./entity-appendable.js')

class Electrode extends AppendableEntity {
  constructor(value=''){
    if(value === ''){
      throw new TypeError('Electrode value not specified')
    }
    super('electrode',value)
  }
}

module.exports = Electrode
