// extend Entity with an element that can hold entities
var Entity = require('./entity.js')

class GroupedEntity{
  constructor(){
    // place to put entities
    this.entities =[]
  }
  // append
  append(entity){
    // check that entity is actually a Entity
    if(typeof entity === 'undefined' || !entity instanceof Entity) {
      throw new Error('Invalid entity.')
    }
    // it's all gravy - append the entity
    this.entities.push(entity)
    return entity
  }
  render (indent = '',depth = 0){
    //render this entity
    return this.entities.map(function (entity){
      return entity.render(indent,depth)
    }).join('\n')
  }
}

module.exports=GroupedEntity
