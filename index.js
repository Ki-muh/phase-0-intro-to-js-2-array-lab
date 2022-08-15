const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function appendCat(name) {
    const appendNewCat = [...cats, name];
    return appendNewCat;
}

function prependCat(name) {
    const prependNewCat = [name, ...cats];
    return prependNewCat;
}

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return Ralph;
}
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
    return Bob;
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return name;
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return name;
}
function removeLastCat() {
    return cats.slice(0,cats.length-1);
    
}
function removeFirstCat() {
    return cats.slice(1);
    
}