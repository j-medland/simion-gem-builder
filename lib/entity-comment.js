// extend Entity with a comment command
const Entity = require('./entity.js')

class CommentEntity extends Entity {
  constructor (comment='') {
    // check comment is valid
    if (comment === ''){
      throw new TypeError('The comment must not be empty!')
    }
    // call Entity
    super(';')
    // store comment
    this.comment= comment
  }
  render(){
    // return the comment
    return super.render()+' '+this.comment
  }
}

module.exports = CommentEntity
