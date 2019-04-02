function muncul() {
    console.log("hallo World")
}
muncul()


function munculSiDia() {
    return 2
}
var tabungan = munculSiDia();
console.log(tabungan)

function tambahIstri(istriPertama) {
    return istriPertama + 3
}

var nampung = tambahIstri(1);
console.log(nampung)



function pacar(pacar1, pacar2, pacar3) {
return pacar1 + pacar2 + pacar3
}

console.log(pacar(1,1,1))

function PenumpangGelap(orang = 3) {
    return orang
}

console.log(PenumpangGelap(4))
console.log(PenumpangGelap())

var menambah = function(anakPertama, anakKedua) {
    return anakPertama + anakKedua
  }
  
  console.log(menambah(1,1))

//   array
// push
var arr = [0, 1, 2, 3, 4];
arr.push(5);
console.log(arr);

//Pop
var arr = [0, 1, 2, 3, 4];
arr.pop();
console.log(arr); //nantinya si 4 bakal hilang

//unshift
var arr = [0, 1, 2];
arr.unshift(-1);
console.log(arr); //nantinya di dedan 0 ada -1

//shift
var arr = [-1, 0, 1, 2];
arr.shift();
console.log(arr);//ini kebalikan dari unshift

//sort (akan mengurutkan data sesuai unicode-nya)
var arr = [3, 5, 7, 1, 2];
arr.sort();
console.log(arr);

var arrChar = ['Doni, Charoline, Badrun, Akito'];
arrChar.sort();
console.log(arrChar);

var arr = [1, 2, 3, 20];
arr.sort();
console.log(arr); //1, 2, 20, 3 karena unicode nya dibaca dari depan

//cara mengakali yang diatas
var arr = [1, 2, 3, 20];
arr.sort(function(value1, value2) { return value1 - value2 });
console.log(arr); //1, 2, 3, 20



//object
var Mob = {
    id: "1a2b3c",
    name: "Mob",
    age: 15,
    hobbies: [
      "Run",
      "Hunter a ghost",
     ],
    address: {
      countries: 'Japan',
    }
  };
  
  console.log(Mob.name);
  console.log(Mob.age);
  console.log(Mob.hobbies[0]); 
  console.log(Mob.hobbies[1]); 
  console.log(Mob.address);
