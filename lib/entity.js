// Define a class which will act as the parent for all gem 'entities'
class Entity {
  constructor (command = '',...args){
    // check valid command
    if (command === ''){
      throw new TypeError('The command must not be empty!')
    }
    //store variables
    this.command = command
    this.args = args
  }
  render (){
    //return the command
    if(this.args.length>0){
      return this.command + '(' + this.args.join(',') + ')'
    }
    else{
      return this.command
    }
  }
}

//export gemEntity
module.exports = Entity
