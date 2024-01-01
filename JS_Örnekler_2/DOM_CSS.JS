
// ****** DOM'a CSS Class Bilgisi Eklemek veya Çıkarmak


let greet = document.querySelector("#greet")

greet.classList.add("text-primary")
greet.classList.add("title")
greet.classList.add("new-info","second-class","thrid-class") // birden fazla claas eklemek


greet.classList.remove("text-primary","second-class") // birden fazla claas silmek

console.log(greet.classList)
