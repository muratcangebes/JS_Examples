//Array (Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

let items = [1, 2, 3, 4, 5]

//Array içinde Array :

let fUsers = ["Ayşe", "Hülya", "Merve"]
let maleUsers =["Ahmet", "Hasan", "Murat"]

items.unshift(fUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length) // Array içindeki istediğimiz Array'in length bilgisini aldık
console.log(items[0][0]) // Ayşe bilgisine ulaştık 

// Array içerisinden öğe ayırmak --> splice(pos, item?)

let newItems = items.splice(1, 5)
console.log("NewItems: ",newItems)
console.log("Items: ", items)

// Array içerisinden öğenin index bilgisini bulmak --> indexOf('value')

items.unshift("Lorem")
items.push("İpsum")

console.log( items.indexOf("İpsum") )

// Array kopyalamak -->slice, [...ES6]

let copyItems = items
console.log(items)

copyItems.pop() // son ögeyi çıkarttık
console.log("copyItems: ",copyItems)
console.log("Items: ",items)

console.log("KOPYALANDIKTAN SONRAKİ HALİ : ")
copyItems = items.slice()
copyItems.pop() // son ögeyi çıkarttık
console.log("copyItems: ",copyItems)
console.log("Items: ",items)

let es6Items = [...items] // es6 ve sonrasında gelen kopyalama islemi
console.log(es6Items)

// Iki Array bilgisini birleştirmek --> [...ES6, ...ES6]
let allUsers = [...fUsers, ...maleUsers] // es6 birden fazla array yapısını birleştirmek
console.log(allUsers)

// Array içerisindeki bilgiyi String'e çevirmek --> toString, join

console.log(allUsers.toString())
console.log(allUsers.join(" --- "))


// Istediğimiz index bilgisine öğe eklemek --> splice(index, 0, value)

allUsers.splice(allUsers.length, 0, "KODLUYORUM")
allUsers.splice(Math.floor(allUsers.length/2), 0, "LOREM")
console.log(allUsers)


