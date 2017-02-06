// extend Entity with an element that can hold children entities
var Entity = require('./entity.js')
var GroupedEntity = require('./entity-grouped.js')
var CommentEntity = require('./entity-comment.js')
var IncludeEntity = require('./entity-include.js')

class AppendableEntity extends Entity{
  constructor (command,...args){
    super(command,...args)
    //add a place to put children items
    this.children = new GroupedEntity()
  }
  // append a child
  append(child,...args){
    // support the creation of an AppendableEntity directly
    if( typeof child == 'string'){
      child = new AppendableEntity(child,...args)
    }
    // check that child is actually a Entity
    if(typeof child === 'undefined' || !child instanceof Entity) {
      throw new Error('Invalid child element.')
    }
    // it's all gravy - append the child
    this.children.append(child)
    return child
  }
  // add in a shortcut to add a comment
  comment(text){
    this.children.append(new CommentEntity(text))
    return this
  }
  // add in a shortcut to add an include file
  include(file){
    this.children.append(new IncludeEntity(file))
    return this
  }
  // define how the entity renders
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
