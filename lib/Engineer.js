const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
    super (name, id, email);
    this.github= github
    }
    //getName(){
      //  return this.name;
    //}
    //getId(){
     //   return this.Garryhub;
    //}
    //getEmail(){
       // return this.email
    //}
//}
getGithub(){
    return this.github
}
}
module.exports = Engineer
