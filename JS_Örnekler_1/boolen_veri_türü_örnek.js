//0 ve 1'i iyi anlamak :
let isActive = false // 0 
isActive = true // 1
console.log(isActive)

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("")  // Boş veri olduğu için False

userName = "User" // Boolean içinde veri varsa true , yoksa false değ (içinde bilginin veya verinin olduğunu kontrol eder.)
console.log("User Name : ",Boolean(userName))

// 0 , -0 , null , false , NaN , undefined , ("") : 

Boolean(0) //false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true [" 0 0'a eşit mi " diye soru sorduk. Aradaki farkı anla (=== veya == olur fark etmez :D)]

userName
Boolean(userName.length > 0) // true









