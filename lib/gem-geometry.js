// import module export classes
const Entity = require('./entity.js')
const GroupedEntity = require('./entity-grouped.js')
const PaDefine = require('./entity-pa-define.js')
const Include = require('./entity-include.js')
const Comment = require('./entity-comment.js')
const Electrode = require('./appendable-electrode.js')

// Geometry
class Geometry {
  constructor (){
    this.paDefinition = null
    this.entities = new GroupedEntity()
  }
  // non appendable entity shortcuts
  paDefine(nx=0, ny=0, nz=0, sym='', mirror='', type='', ng=0){
    this.paDefinition = new PaDefine(nx, ny, nz, sym, mirror, type, ng)
    return this
  }
  include(file){
    this.entities.append(new Include(file))
    return this
  }
  comment(text){
    this.entities.append(new Comment(text))
    return this
  }
  append(entity){
    this.entities.append(entity)
    return entity
  }
  render(indent = '   ',depth = 0){
    let rendered = this.paDefinition? this.paDefinition.render(indent,depth) + '\n' : ''
    rendered += this.entities.render(indent,depth)
    return rendered
  }
}

module.exports = Geometry
