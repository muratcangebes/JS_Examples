// STRİNG VERİ TÜRÜ İŞLEMLERİ
// https://www.w3schools.com/jsref/jsref_obj_string.asp


let email = "deneme@gmail.com"
let firstName = "Murat"
let lastName = "DENEME"


//string karakter sayısı -> length

console.log( email.length )


//ilk karakter bulmak -> [0]

console.log(firstName[0])
console.log(firstName.charAt(0))


//buyuk harf , kucuk harf:

firstName = firstName.toUpperCase()
console.log(firstName)

lastName = lastName.toLowerCase()
console.log(lastName)


//string içinde istediğiniz bilgiyi aramak ve yerini bulmak -> search :

console.log(email.search("@"))
console.log( email[15] )
console.log(email.search['j'])


//belli bir yere kadar al -> slice : (DOMAIN bilgisi)

console.log(email.slice(0,15))

let DOMAIN = email.slice( email.search("@") + 1 )
console.log(DOMAIN)

console.log(DOMAIN.indexOf('.'))
console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) // sadece gmail kısmını aldık


//bilgiyi değiştir -> replace :

//k_email = email.replace('gmail.com', 'kodluyoruz.org') -> console.log(k_email)
console.log(email.replace('gmail.com', 'kodluyoruz.org'))



//istediğim bilgi var mı ? -> includes :

console.log(email.includes('m')) // true
console.log(email.includes('j'))// false


//istediğim bilgiye basladı mı? bitti mi -> startsWidth , endWidth : 

console.log(email.endsWith('@'))



// ilk harfleri büyük yapmak

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}
`

console.log(fullName)









