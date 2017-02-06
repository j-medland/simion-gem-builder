// require classes for export
const Geometry = require('./gem-geometry.js')
const Appendable = require('./entity-appendable.js')
const GroupedEntity = require('./entity-grouped.js')
const Electrode = require('./appendable-electrode.js')
const Comment = require('./entity-comment.js')

//export everything in one handy module
module.exports={
  Geometry,
  Appendable,
  Comment,
  GroupedEntity,
  Electrode
}
