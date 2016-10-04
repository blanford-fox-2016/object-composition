"use strict"
var fs = require('fs')
var recipe = []
var factory = []
var data = fs.readFileSync('ingredients.txt', 'utf8')
var dt = data.trim().split("\n")
class CookieFactory {
  static create(){
    for(var i=0; i<dt.length; i++){
      if(dt[i].indexOf('choco') == 0){
        factory.push(new ChocoCookies({name:'kue coklat', status:"ok"}))
      } else if (dt[i].indexOf('cheese') == 0){
        factory.push(new CheeseCookies({name:'kue keju', status:"ok"}))
      }else if(dt[i].indexOf('vanilla') == 0){
        factory.push(new VanillaCookies({name:'kue vanilla', status:"ok"}))
      }else if(dt[i].indexOf('peanut') == 0){
        factory.push(new PeanutCookies({name:'kue kacang', status:"ok"}))
      } else {
        factory.push(new Cookies({name:'kue gagal',status:"bahan tidak dikenali"}))
      }
    }
  }
   static readRecipe(){
      recipe.push(dt)
    }

  static driver(){
    CookieFactory.readRecipe()
    CookieFactory.create()
    CookieFactory.showKue()
  }

  static showKue(){
    console.log(`==========   Kue yang berhasil di produksi : ==========\n`);
    for(var i=0; i<factory.length; i++){
      if(factory[i].cinnamon == true){
        console.log(`=> ${factory[i].name}  :  memiliki kadar gula ${factory[i].gula} dan mengandung cinnamon\n` );
      } else {
        console.log(`=> ${factory[i].name}  :  memiliki kadar gula ${factory[i].gula}\n`);
      }
    }
  }

}

class Cookies {
  constructor(arg){
    this._name = arg['name']
    this._status = arg['status']
    this._quality = 0
    this._topping =""
    this._cinnamon = false
    this._gula = 0
  }
  set name(value){
    this._name = value
  }
  get name(){
    return this._name
  }
  set status(value){
    this._status = value
  }
  get status(){
    return this._status
  }
  set quality(value){
    this._quality = value
  }
  get quality(){
    return this._quality
  }
  set feature(value){
    this._feature = value
  }
  get feature(){
    return this._feature
  }
  set gula(value){
    this._gula = value
  }
  get gula(){
    return this._gula
  }
  set cinnamon(value){
    this._cinnamon = value
  }
  get cinnamon(){
    return this._cinnamon
  }
}

class ChocoCookies extends Cookies{
  constructor(arg){
    super(arg)
    this._topping = 'coklat'
    this._gula = 150
  }
}

class CheeseCookies extends Cookies{
  constructor(arg){
    super(arg)
    this._topping = 'keju'
    this._gula = 50
  }
}
class VanillaCookies extends Cookies{
  constructor(arg){
    super(arg)
    this._topping = 'vanilla'
    this._gula = 250
    this._cinnamon = true
  }
}
class PeanutCookies extends Cookies{
  constructor(arg){
    super(arg)
    this._topping = 'kacang'
    this._gula = 100
  }
}



// var coba = function(){
// }
// setTimeout(coba, 100)


// CookieFactory.driver()
CookieFactory.driver()
