"use strict"
const fs = require('fs');
var pesanan = fs.readFileSync('file_kue.txt', 'utf-8').split("\n")

class Cookie{
  constructor(){
    this.status = "ok"
  }
}

class PeanutButter extends Cookie{
  constructor(status){
    super(status)
    this.peanut_count = 100;
    this.cinnamon = 50;
    this.sugar = 0;
  }
}

class ChocolateChip extends Cookie{
  constructor(status){
    super(status)
    this.choc_chip_count = 200;
    this.cinnamon = 0;
    this.sugar = 200;
  }
}

class CookieFactory{
  constructor(){
    this.queue = []
  }
  static create(options){
    this.queue = []
    for (var i = 0; i < options.length; i++){
      if (options[i] === "peanut butter"){
        var peanut = new PeanutButter()
        this.queue.push(peanut)
      } else if(options[i] === "chocolate chip") {
        var cok = new ChocolateChip()
        this.queue.push(cok)
      }
    }
    return this.queue
  }
}

let batch_of_cookies = CookieFactory.create(pesanan);
console.log(batch_of_cookies);
