"use strict"

var kue=[]

class Cookies {
  constructor(cakeName, cakeStatus) {
    this.cakeName = cakeName
    this.cakeStatus = "mentah"
  }
}

class PeanutButter extends Cookie {
  constructor(cakeStatus, cakeName) {
    super(cakeName, cakeStatus)
  }
}

class ChocolateChip extends Cookie {
  constructor(cakeStatus, cakeName) {
    super(cakeName, cakeStatus)
  }
}

class CheeseCake extends Cookie {
  constructor(cakeStatus, cakeName) {
    super(cakeName, cakeStatus)
  }
}

class Ingredient {
  constructor(sugar) {
    this.sugar = sugar
  }
}

class CookieFactory {
  constructor(flavor, cookTime) {
    this.flavor = flavor
    this.cookTime = cookTime
    this.cakeContainter = []
    this.bakeTime = 0
    this.sugar = 0
    this.cakeName = ""
    this.cakeStatus
  }

  getCakeName() {
    if (this.flavor === "coklat") {
      this.cakeName = new ChocolateChip().cakeName
    }
    else if (this.flavor === "keju") {
      this.cakeName = new CheeseCake().cakeName
    }
    else if(this.flavor === "kacang"){
      this.cakeName = new PeanutButter().cakeName
    }
    return this.cakeName
  }

  getCakeTime() {
    if (this.flavor === "coklat") {
      this.bakeTime = 10;
    }
    else if (this.flavor === "keju") {
      this.bakeTime = 20;
    }
    else if(this.flavor === "kacang"){
      this.bakeTime = 30;
    }
    return this.bakeTime
  }

  getCakeSugar() {
    if (this.flavor === "coklat") {
      this.sugar = new Ingredient(200)
    }
    else if (this.flavor === "keju") {
      this.sugar = new Ingredient(0)
    }
    else if(this.flavor === "kacang"){
      this.sugar = new Ingredient(100)
    }
    // console.log(this.sugar);
    return this.sugar
  }

  result() {
    if (this.cookTime < (this.getCakeTime() / 2)) {
      this.cakeStatus = new Cookie().cakeStatus
    } else if (this.cookTime < (this.getCakeTime())) {
      this.cakeStatus = "hampir matang"
    } else if (this.cookTime === this.getCakeTime()) {
      this.cakeStatus = "matang"
    } else {
      this.cakeStatus = "gosong"
    }
    return this.cakeStatus
  }

  createCake() {
    this.CakeStats
    this.cakeContainter.push({nama: this.getCakeName(), flavor: this.flavor, hasil: this.result(), gula:this.getCakeSugar().sugar})
    kue.push({nama: this.getCakeName(), flavor: this.flavor, hasil: this.result(), gula:this.getCakeSugar().sugar})
    console.log(this.cakeContainter);
  }

  showNowSugarCake(hari) {
    if(hari == "selasa") {
      for(var i=0; i<kue.length; i++) {
        if(kue[i].gula == 0) {
          console.log(kue[i]);
        }
      }
    }
  }
}


var createCake = new CookieFactory("coklat", 10)
createCake.createCake()
var createCake = new CookieFactory("keju", 20)
createCake.createCake()
var createCake = new CookieFactory("kacang", 30)
createCake.createCake()

console.log("============ Kue Bebas Gula Hari Selasa ============");
createCake.showNowSugarCake("selasa")
