//Prompt ile Kullanıcıdan Bilgi Almak

let fullName = prompt("LÜTFEN ADINIZI GİRİNİZ: ")
//console.log(fullName) -> f12 de yazdığını gösterir.


let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML} <small style = "color:red">${fullName}</small>`

