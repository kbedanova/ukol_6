const justFood = (pocetLidi) => {
    const nazev = "Just Food"
    const suma = pocetLidi*1000
    return `catering od ${nazev} pro ${pocetLidi} lidí za ${suma} Kč.`
}

const yourMama = (pocetLidi) => {
    const nazev = "Your Mama"
    const suma = pocetLidi*2000
    return `catering od ${nazev} pro ${pocetLidi} lidí za ${suma} Kč.`
}

const flavourHaven = (pocetLidi) => {
    const nazev = "Flavour Haven"
    const suma = pocetLidi*3000
    return `catering od ${nazev} pro ${pocetLidi} lidí za ${suma} Kč.`
}

console.log(justFood(100))
console.log(yourMama(100))
console.log(flavourHaven(100))


const createEvent = (nazevUdalosti, pocetLidi, catering) => {
    return `Událost ${nazevUdalosti} s ${catering(pocetLidi)}`
}

console.log(createEvent("inaugurace prezidenta", 100, flavourHaven))
console.log(createEvent("promoce", 100, justFood))