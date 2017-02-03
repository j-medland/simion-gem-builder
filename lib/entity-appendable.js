// extend Entity with an element that can hold children entities
var Entity = require('./entity.js')

class AppendableEntity extends Entity{
  constructor (command,...args){
    super(name,...args)
    //add a place to put children items
    this.children =[]
  }

  // append a child
  append(child){
    // check that child is actually a Entity
    if(typeof child === 'undefined' || !child instanceof Entity) {
      throw new Error('Invalid child element.')
    }
    // it's all gravy - append the child
    this.children.push(child)
    return this
  }
  render (indent = '',space = ''){
    //render this entity
    let rendered = super.render(indent,space)
    // append any child rendering if required
    if(this.children.length>0){
      let doubleIndent = indent + indent
      rendered += indent
      +'{'
      + this.children.reduce(function (prev,child){
        return prev + doubleIndent + child.render(doubleIndent,space)
      },space)
      + indent
      + '}'
      + space
    }

    return rendered
  }
}

module.exports=AppendableEntity
