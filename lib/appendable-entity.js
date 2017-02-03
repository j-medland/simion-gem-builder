// extend gemEntity with an element that can hold children entities
var gemEntity = require('./gem-entity.js')

class appendableEntity extends gemEntity{
  constructor (name,comment){
    super(name,comment)
    //add a place to put children items
    this.children =[]
  }

  // append a child
  append(child){
    // check that child is actually a gemEntity
    if(typeof child === 'undefined' || !child instanceof gemEntity) {
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

module.exports=appendableEntity
