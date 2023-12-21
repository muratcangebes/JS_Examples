// Dizi (Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak

// Array oluşturmak 

let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)
        //items += [1, 2, 3]
        //console.log(items)

let emptyArray = [] // boş list

// Array içerisindeki eleman/öge sayısını öğrenmek

console.log(
    items.length // array içindeki öğe sayısı 
)

    //   document.querySelector('#info').innerHTML = items.length




//Array içindeki ilk elemanın çağırılması

console.log(
    "Baştaki :",
    items[0] 
     )

//Array içindeki son elemanın çağırılması

console.log( 
    "Sondaki :",
    items[items.length - 1] 
    )

//Array içindeki ortadaki elemanın çağırılması

console.log(
    "Ortadaki :" ,
    items[ Math.floor(items.length / 2) ]
)

// değişken içerisindeki bilginin Array olup olmadığının kontrol edilmesi 

console.log(
    typeof(items) // onject olarak çıktı veriyor ...
)

console.log(
    Array.isArray(items)
)

// Hangileri isArray --> True verir ?

console.log("[] : ", Array.isArray( [] ) )
console.log("1 :", Array.isArray( 1 ) )
console.log("true :", Array.isArray( true ) )

