// extend Entity with a include command
const Entity = require('./entity.js')

class Include extends Entity {
  constructor (file='') {
    // check file is valid
    if (file === ''){
      throw new TypeError('The file must not be empty!')
    }
    // call Entity
    super('include',file)
  }
}

module.exports = Include
