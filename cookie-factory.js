'use strict'

var fs = require('fs')

class Ingredient
{
  constructor(bahan)
  {
    this._coklat = bahan['coklat'] || 0
    this._kacang = bahan['kacang'] || 0
    this._mentega = bahan['mentega'] || 0
    this._is_gluten_free = bahan['is_gluten_free'] || false
  }
  set coklat(coklat){this._coklat = coklat}
  get coklat(){return this._coklat}
  set kacang(kacang){this._kacang = kacang}
  get kacang(){return this._kacang}
  set mentega(mentega){this._mentega = mentega}
  get mentega(){return this._mentega}
  set is_gluten_free(is_gluten_free){this._is_gluten_free = is_gluten_free}
  get is_gluten_free(){return this._is_gluten_free}

}


class Kue extends Ingredient
{
  constructor(kue)
  {
    super(kue)
    this._nama = kue['nama']
    this._status = kue['status']
    this._size = kue['size']
    this._rasa = kue['rasa']
    this._lama_panggang = kue['lama_panggang']
    this._kadar_gula = kue['kadar_gula']
    this._jumlah_cinnamon = kue['jumlah_cinnamon']
  }
    set kadar_gula(kadar_gula){this._kadar_gula = kadar_gula}
    get kadar_gula(){return this._kadar_gula}
    set jumlah_cinnamon(jumlah_cinnamon){this._jumlah_cinnamon = jumlah_cinnamon}
    get jumlah_cinnamon(){return this._jumlah_cinnamon}
    set status(status){this._status = status}
    get status(){return this._status}
    set nama(nama){this._nama = nama}
    get nama(){return this._nama}
    set size(size){this._size = size}
    get size(){return this._size}
    set rasa(rasa){this._rasa = rasa}
    get rasa(){return this._rasa}
    set lama_panggang(lama_panggang){this._lama_panggang = lama_panggang}
    get lama_panggang(){return this._lama_panggang}

    cek_bahan(kue)
    {
      if(kue.nama == 'Kue Kacang'){
        console.log('==================================================================================');
        console.log('Bahan-bahan Kue Kacang : \n');
        console.log('Kacang :'+kue.kacang+' mentega '+kue.mentega+" is gluten free "+kue.is_gluten_free);
        console.log('==================================================================================');
      }else if(kue.nama == 'Kue Coklat')
      {
        console.log('==================================================================================');
        console.log('Bahan-bahan Kue Coklat : \n');
        console.log('Coklat :'+kue.coklat+' mentega '+kue.mentega+" is gluten free "+kue.is_gluten_free);
        console.log('==================================================================================');
      }
    }
}

class KueKacang extends Kue
{
  constructor(kue)
  {
    super(kue)
  }
}

class KueCoklat extends Kue
{
  constructor(kue)
  {
    super(kue)
  }
}

var tampung_kue = []
class CookieFactory {
    static create(options){
    tampung_kue.push(options)
    return tampung_kue
  }

  static cek_kadar_gula(kue)
  {
        if(kue.kadar_gula <10)
        {
          console.log(kue.nama+' ini kadar gulanya rendah');
        }else if(kue.kadar_gula > 10) {
          console.log(kue.nama+' ini kadar gulanya tinggi');
        }
  }

  static cek_jumlah_cinnamon(kue)
  {
    if(kue.jumlah_cinnamon < 10){
      console.log(kue.nama+' ini jumlah cinnamonnya sedikit');
    }else if(kue.jumlah_cinnamon > 10)
    {
      console.log(kue.nama+' ini jumlahnya cinnamonnya banyak');
    }
  }

}

var properti_default =
{
  nama:'kue',
  status:'mentah',
  size: 0,
  rasa:false,
  lama_panggang:0, //minutes
  kadar_gula:0,
  jumlah_cinnamon:0,
  coklat:0,
  kacang:0,
  mentega:0,
  is_gluten_free:false
}

var properti_kue_kacang = {
  nama:fs.readFileSync('daftar-kue.txt','utf-8').trim().replace(/\r/g,'').toString().split('\n')[0],
  status:'mentah',
  size: 5,
  rasa:'manis kacang',
  lama_panggang:15, //minutes
  kadar_gula:5,
  jumlah_cinnamon:5,
  coklat:0,
  kacang:50,
  mentega:20,
  is_gluten_free:false
}

var properti_kue_coklat = {
  nama:fs.readFileSync('daftar-kue.txt','utf-8').trim().replace(/\r/g,'').toString().split('\n')[1],
  status:'mentah',
  size: 7,
  rasa:'manis coklat',
  lama_panggang:10, //minutes
  kadar_gula:35,
  jumlah_cinnamon:0,
  coklat:100,
  kacang:0,
  mentega:10,
  is_gluten_free:true
}
var kuekue = new Kue(properti_default)
var kue_kacang = new KueKacang(properti_kue_kacang)
var kue_coklat = new KueCoklat(properti_kue_coklat)

var kue = [kue_kacang,kue_coklat]
let batch_of_cookies = CookieFactory.create(kue);
console.log(batch_of_cookies);
console.log('===================================');
CookieFactory.cek_kadar_gula(kue_coklat)
CookieFactory.cek_jumlah_cinnamon(kue_kacang)
kuekue.cek_bahan(kue_coklat)
//console.log(tampung_kue[0][0].nama);
