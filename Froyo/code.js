let userResponse = prompt("Enter your froyo order by flavors separated by commas");

const froyo = {
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
}

const order = userResponse.split(",")

for (let index = 1; index < order.length; index++) {
    if (order[index] == "coffee"){
        froyo.coffee ++
    }
}

for (let index = 1; index < order.length; index++) {
    if (order[index] == "chocolate"){
        froyo.chocolate ++
    }
}

for (let index = 1; index < order.length; index++) {
    if (order[index] == "strawberry"){
        froyo.strawberry ++
    }
}

for (let index = 1; index < order.length; index++) {
    if (order[index] == "vanilla"){
        froyo.vanilla ++
    }
}

console.table(froyo);