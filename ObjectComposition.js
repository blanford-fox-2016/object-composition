var fs = require('fs')
var Database = fs.readFileSync('file.txt')
  .toString()
  .trim('')
  .split("\n")
//console.log(Database);
//m,ake cookies with ingredient
class Cookie {
  constructor(name) {
    this.name = name;
    this.status = false;
  }

  displayName(){
    console.log(`Jenis ${this.name}`);
  }

  compotition(){//sugar
    switch (this.name) {
      case 'Peanut Butter':

      return {telur:0.5 ,gula:30 ,mentega:30,cinammon:30, tepung:30}
        break;
      case 'chocolate chip':
      return {telur:0.2 ,gula:40,mentega:20,cinammon:10,tepung:20}

        break;
      case 'kacang':
      return {telur:0.4 ,gula:10,mentega:30,cinammon:2,tepung:20}
        break;
      default:
      return 'tidak terdaftar'

    }
  }
}

class jenis extends Cookie {
  constructor(name) {
    super(name);
  }

  contain(){
    return super.compotition();

  }

}

for (var i = 0; i < Database.length; i++) {
var test = new jenis(Database[i],2);
test.displayName()
console.log(test.contain());
}


//
// class CookieFactory {
//   static create() {
//     for (var i = 0; i < Database.length; i++) {
//       console.log(Database[i]);
//     }
//     return Database
//   }
// }
//
// function test(){
//   return CookieFactory.create()
// }

// console.log(test());
