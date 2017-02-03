// Define a gem entity
class gemEntity {
  constructor (name,comment = ''){
    if (!name){
      throw new Error('Entity name must be defined and not empty.')
    }
    this.name = name
    this.comment = comment
  }
  render (indent ='',space=''){
    let comment = this.comment!==''? ' ; '+this.comment:''
    return this.name + comment + space
  }


}

//export gemEntity
module.exports = gemEntity
