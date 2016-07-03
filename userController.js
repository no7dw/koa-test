'use strict'

let userCounter = 1

var dbFind = function *(userId){
  console.log("db find result ", userId)
  return {
    'userId': userId,
    'name': 'dengwei'
  }
}

exports.find = function* (){
  const userId = this.params.id
  let result = yield dbFind(userId)
  if(!result) result = {}
  this.body = result;
}

exports.create = function* (){
  console.log('req body', this.request.body) //undefined
  userCounter++
  let result = yield dbFind(userCounter)
  result.name += userCounter
  if(!result) result = {}
  this.body = result;
}

// exports.afterCreated = function* (){
//   console.log('res body', this.body);
//   this.body.creatdAt = new Date() 
//   this.body 
// }
