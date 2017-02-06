//locate
const AppendableEntity = require('./entity-appendable.js')

class Locate extends AppendableEntity {
  constructor(x='',y='',z='',scale=1,az=0,el=0,rt=0){
    if(x === '' || y ==='' || z === ''){
      throw new TypeError('Location position should atleast have x,y and z specified.')
    }
    super('locate',x,y,z,scale,az,el,rt)
  }
}

module.exports = Locate
