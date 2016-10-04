"use strict"

var fs = require('fs')
var database = fs.readFileSync('file_kue.txt', 'utf8');
var data = database.trim().split("\n")

var data_kue = []

class Cookie {
  constructor(){
    this.status = "mentah"
  }
  bake(){
    this.status = "selesai dimasak"
  }
}

class PeanutButter extends Cookie {
  constructor(){
    this.peanut_count = 100
  }
}

class ChocholateChip extends Cookie {
  constructor(){
    this.choc_chip_count = 200
  }
}

class CookieFactory {
  static create(options){
    var produk = []
    for (var i = 0; i <options.length; i++){
      if (options[i] === "peanut butter"){
        produk.push(new PeanutButter);
      } else if (options[i] === "chocolate chip"){
        produk.push(new ChocholateChip);
      }
      return produk
    }
  }
}


var cookie = new Cookie
let batch_of_cookies = CookieFactory.create(data);
console.log(batch_of_cookies.inspect);

// console.log(database)
// console.log(data)
