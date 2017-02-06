const gem = require('./lib/gem.js')
// create a new geometry document
const geometry = new gem.Geometry()
// add pa_define, include and comment statements
geometry.paDefine(101,101,1,'planar','None','electrostatic', 1)
  .include('some-file')
  .comment('some comment')
// add an electrode
const e1 = geometry.append(new gem.Electrode(1))
// add a nested electrode
e1.append(new gem.Electrode(2))
// render the document
console.log(geometry.render())
