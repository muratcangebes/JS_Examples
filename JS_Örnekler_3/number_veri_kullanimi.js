//number veri türü tanımlamak için :

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat : ",price,
    "KDV Oranı : ",tax,
    "KDV Turarı : ",priceTax, 
    "Fiyat Değeri : " , total
)


let stringNumber = "11"
console.log("StringNumber : ", stringNumber) // ÇIKTIDA YAZI RENGİ FARKLI
let newNumber = Number(stringNumber) // ÇIKTIDA YAZI RENGİ ALTTAKİLER GİBİ
console.log(newNumber)
console.log("Number Constractor içine bilgi gönderildi = ",Number("111")) // ÇIKTIDA YAZI RENGİ ALTTAKİLER GİBİ


//azaltma arttirma işlemleri için : 

let counter = 320
counter = counter + 1 // Uzun yöntem
counter += 1;
counter ++; // Kısa yöntem
console.log(counter)

counter --;
counter -= 1;
console.log(counter)


counter  *= 10;
console.log(counter)


counter  /= 2;
console.log(counter)

//İşlem Önceliği:

console.log(2 + 3 * 10) //32
console.log( (2 + 3) * 10) //50


// mod(kalan) alma %:

//sayı tek mi ? , çift mi?
console.log(14 % 2) //0 ise çift , 1 ise tek

//8 ürün alan koliye tüm ürünler siğiyor mu ?
console.log("Koli Kalan Ürün örneği : ",18 % 8)


//üst alma **:
console.log(2 * 2 * 2 *2)
console.log("Üst alma işlemi ile yapılan : ",2 ** 4)

//aşağı yuvarlama işlemi --> Math.floor:
console.log("Aşağıya yuvarlama :", Math.floor(1.7) ) // -> 1

//yukarı yuvarlama işlemi --> Math.ceil:
console.log("Yukarıya yuvarlama :", Math.ceil(2.3)) // -> 3

//yakına yuvarlama işlemi --> Math.round:
console.log("Yakına yuvarlama :", Math.round(5.4)) // -> 5 // 1.5 -> 2




