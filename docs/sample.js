const gem = require('../lib/index.js')
// create a new geometry document
const geometry = gem.geometry()
// add pa_define, include and comment statements
geometry.paDefine(101,101,1,'planar','None','electrostatic', 1)
  .include('some-file')
  .comment('some comment')
// add an electrode
const e1 = geometry.append(gem.locate(20,20,20)).append(gem.electrode(1))
// add a nested electrode
e1.append(gem.electrode(2))
// render the document
e1.append('fill')
  .append('within')
  .append('sphere',0,0,0,45,25,25)
console.log(geometry.render())
