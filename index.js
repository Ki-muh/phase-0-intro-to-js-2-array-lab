const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return Ralph
}
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    return Bob
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return name
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return name
}
function removeLastCat(Garfield) {
    cats.splice(-Garfield)
    return [cats]
}
function removeFirstCat(Milo) {
    cats.slice(-Milo)
    return [cats]
}