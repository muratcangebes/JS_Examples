// Nesnelere Nasıl Metot Ekleriz?


let user1 = {
    fName: "Bilgin",
    lName: "Uzman",
    score: [1,2,3,4],
    isActive: true,
    shName: function() {
        return `${this.fName[0].toUpperCase()}. ${this.lName}`
    }
};

console.log(user1)




