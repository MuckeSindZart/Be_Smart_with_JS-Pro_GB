// let map = new Map();
//
// map.set("1","str1");
// map.set(1,"num1");
// map.set(true,"bool1");
//
// console.log(map)
//
// console.log(map.get(1));
// console.log(map.get("1"));
// console.log(map.size);


// let map = new Map();
//
// map.set("1","We");
// map.set(1,"likes");
// map.set(true,"js");
//
// console.log(map)


let recepMap = new Map([
    ['Gurke', 500],
    ['Tomaten', 350],
    ['Zwiebel', 50],
])
console.log(recepMap)

for (let veg of recepMap.keys()) {
    console.log(veg)
}
for (let amount of recepMap.values()) {
    console.log(amount)
}
for (let entry of recepMap) {
    console.log(entry)
}

recepMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
})

