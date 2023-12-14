// Çoklu Koşul Yapısı Kullanımı

let username = prompt("Kullanici adi : ")
let age = prompt("Yasiniz : ")
let info = document.querySelector("#info")

if (username && age >= 18){
    info.innerHTML("Ehliyet Alabilir")
}
else if (!username){
    info.innerHTML("Kullanici adiniz yok !") // console.log da olur hata olursa !!!!
}
else if (!(age >= 18)){
    info.innerHTML("Yas bilginiz yok veya 18 yasindan kücüksünüz !")
}





















