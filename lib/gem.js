// import module export classes
var Entity = require('./gem-entity.js')
var AppendableEntity = require('./appendable-entity.js')

class Gem {
  constructor (){
    this.paDef = null
    this.entities = []
  }
  paDefine(parameters='',comment=''){
    if(parameters === ''){
      throw new Error ('\'pa_define\' must include valid potential array parameters')
    }
    this.paDef = new Entity('pa_define(' + parameters+ ')',comment)
    return this
  }
  include(file='',comment=''){
    if(file === ''){
      throw new Error ('\'include\' must specify a valid include file.')
    }
    let entity = new Entity('include(' + file + ')',comment)
    this.entities.push(entity)
    return this
  }
  electrode(parameters='',comment=''){
    if(parameters === ''){
      throw new Error ('\'electrode\' must include valid potential')
    }
    var appendable = new AppendableEntity('electrode(' + parameters+ ')',comment)
    this.entities.push(appendable)
    return appendable
  }
  render(indent,space){
    let rendered = this.paDef? this.paDef.render() : ''
    if(this.entities.length>0){
      rendered += this.entities.reduce(function (prev,entity){
                    return prev + entity.render(indent,space)
                  },space)
    }
    return rendered
  }
}

module.exports=Gem
