//var serverName = "Kodluyoruzgaliba.org"
//console.log(serverName)

let serverName;
console.log(serverName)

serverName = "https://kodluyoruz.org"
console.log(serverName)

let password = "1234";
console.log(password)

/* HATALI KULLANIM ÖRNEK
console.log(fullName)
let fullName = "Muratcan Gebeş"; //var koysaydık hatayı f12'de göstermezdi. let ile yaptığımız için gösteriyor :D
*/ 

//let kullanımında içerisine birden fazla veri yazabiliriz.

let fullName = "Muratcan";

//let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
fullName = "Lorem İpsum Dolor"
console.log(fullName)

//let ile bilgileri birleştirme veya ekleme:

fullName + "YENİ EKLENEN BİLGİ" //BİRLEŞTİRİR AMA İÇİNE EKLEMEZ!
console.log(fullName + " Test Bilgisi") // Ekle ve göster ama degiskene eklemedik!


fullName = fullName + " YENİ BİLGİ"
fullName = "2. BİLGİ : " + fullName 

fullName = "SIFIRLADIK"
fullName += /*HEM EKLE HEM DE İÇİNE KAYDETTİ! */ " ve Yeni Bilgi Eklendi"
console.log(fullName)



















