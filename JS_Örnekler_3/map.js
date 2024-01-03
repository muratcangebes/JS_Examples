// Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması

const users = ["Ayşe", "Mehmet", "Tuğçe", "Aksel"]


// userName içinde orjinal isim kalsin,
// shortName içinde ilk harf büyk . (A.)
// newName içinde ilk harf büyük olsun
//{userNameç: "Ayşe", shortName: "A", newName: "Ayşe"}


const new_users = users.map(user => user.toLocaleLowerCase() )
console.log(new_users)

//const users_obj = users.map(item => 
//    {
//    return {
//    userName: item, shortName: `${item[0]}.` , newName: `${item[0].toUpperCase()}
//    ${item.slice(1).toLowerCase()}` 
//    }
//    }
//)

const users_obj = users.map(item => 
    (
        {userName: item, shortName: `${item[0]}.` , newName: `${item[0].toUpperCase()}
        ${item.slice(1).toLowerCase()}` }
    )
    
)
console.log(users_obj)







