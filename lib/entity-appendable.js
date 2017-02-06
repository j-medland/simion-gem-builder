// extend Entity with an element that can hold children entities
var Entity = require('./entity.js')
var GroupedEntity = require('./entity-grouped.js')

class AppendableEntity extends Entity{
  constructor (command,...args){
    super(command,...args)
    //add a place to put children items
    this.children = new GroupedEntity()
  }
  // append a child
  append(child){
    // check that child is actually a Entity
    if(typeof child === 'undefined' || !child instanceof Entity) {
      throw new Error('Invalid child element.')
    }
    // it's all gravy - append the child
    this.children.append(child)
    return child
  }
  render (indent = '',depth = 0){
    // render the children element
    let children = this.children.render(indent, depth+1)
    // render this entity
    if(children !== ''){
      // calcultate brace indent
      let braceIndent = indent.repeat(depth)
      children = '\n' + braceIndent + '{\n' + children + '\n'+ braceIndent + '}'
    }
    return super.render(indent,depth) + children
  }
}

module.exports = AppendableEntity
