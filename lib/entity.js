// Define a class which will act as the parent for all gem 'entities'
class Entity {
  constructor (command = '',...args){
    // check valid command
    if (command === ''){
      throw new TypeError('The command must not be empty!')
    }
    // store variables
    this.command = command
    this.args = args
  }
  render (indent ='', depth =0){
    // return the command
    let command = this.command
    if(this.args.length>0){
      command += '(' + this.args.join(',') + ')'
    }
    return indent.repeat(depth) + command
  }
}
// export gemEntity
module.exports = Entity
