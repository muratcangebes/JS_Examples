//Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// Array : sona öge/eleman eklemek --> push

items.push(50)
console.log("50 :", items)

//Array : basa öge/eleman eklemek --> unshift

items.unshift(5)
console.log("5 :", items)

//Array : sondaki ögeyi cıkarmak --> pop

let lastItem = items.pop() // son elemanı lastItem içerisine ekledik 
console.log("LastItem : ",lastItem , " items :",items)

//Array : bastaki ögeyi cıkarmak --> shift

let firstItem = items.shift() // ilk elemanı firstItem içerisine ekledik 
console.log("firstItem : ",firstItem , " items :",items)

// Array içindeki bir ögenin bilgisinin degistirilmesi 

//ilk eleman degisti
items[0] = 5;
console.log(items)

//son eleman degisti

items[items.length - 1] = 1090
console.log(items)


items[2] = 120932
console.log(items)
