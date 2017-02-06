// extend Entity with a comment command
const Entity = require('./entity.js')

class PaDefine extends Entity {
  constructor (nx, ny, nz, sym, mirror, type='electrostatic', ng=1) {
    // check input
    if (nx < 3){
      throw new TypeError('nx must be 3 or greater.')
    }
    if (ny < 3){
      throw new TypeError('ny must be 3 or greater.')
    }
    if (nz < 1){
      throw new TypeError('nz must be 1 or greater.')
    }
    if(['cylindrical','planar'].indexOf(sym.toLowerCase())<0){
      throw new TypeError('sym must be \'cylindrical\' or \'planar\'.')
    }
    //3D array - check that one of the valid options is found
    if(nz > 1 && ['None','X','Y','Z','XY','XZ','YZ','XYZ'].indexOf(mirror)<0){
      throw new TypeError('mirror must be either \'None\',\'X\',\'Y\',\'Z\',\'XY\',\'XZ\',\'YZ\',\'XYZ\'')
    }
    // 2D array - check against symmetry
    if(nz ===1){
      // use an object literal for symmetry switching
      let check = {
        cylindrical:function () {
          if(['Y','XY'].indexOf(mirror)<0){
            throw new TypeError('Cylindrical 2D arrays must have Y mirroring and Z mirroring is not permitted.')
          }
        },
        planar:function (){
          if(['None','X','Y','XY'].indexOf(mirror)<0){
            throw new TypeError('Planar arrays cannot use Z mirroring.')
          }
        }
      }[sym]
      // check is now the relevant checking function so call it
      check()
    }
    if(['electrostatic','magnetic'].indexOf(type.toLowerCase())<0){
      throw new TypeError('Type must be \'electrostatic\' or \'magnetic\'.')
    }
    if(ng < 1 && type === 'magnetic'){
      throw new TypeError('ng must be 1 or greater.')
    }

    // call Entity
    super('pa_define', nx, ny, nz, sym, mirror, type, ng)
  }
}

module.exports = PaDefine
