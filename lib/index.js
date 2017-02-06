// require classes for export
const Geometry = require('./geometry.js')
const Appendable = require('./entity-appendable.js')
const Electrode = require('./appendable-electrode.js')
const Locate = require('./appendable-locate.js')
const Comment = require('./entity-comment.js')
const Include = require('./entity-include.js')

//some easy creation methods
const geometry = function (){
  return new Geometry()
}

const element = function (command = '',...args){
  return new Appendable(command,...args)
}

const comment = function(text){
  return new Comment(text)
}

const include = function(file){
  return new Include(file)
}

const electrode = function (potential){
  return new Electrode(potential)
}

const locate = function (...args){
  return new Locate (...args)
}

//export everything in one handy module
module.exports={
  geometry,
  element,
  comment,
  include,
  electrode,
  locate
}
