'use strict'

//order N*N
function find_chars(string1, string2) {
    let unique_chars = []
    let S1 = string1.split('')
    let S2 = string2.split('')
    S2.forEach(char => {
        if( (S1.includes(char)) && (!unique_chars.includes(char)) ) unique_chars.push(char)
    });
    return orderByString1(unique_chars, S1)
}
function orderByString1(unique, string1){
    let ordered = []
    unique.forEach( (x) => {
        let key = string1.indexOf(x)
        ordered[key] = x
    });
    let rebase = ordered.filter((x) => (typeof(x) =='string' ))
    return rebase
}

// order N
function findChars (string1, string2) {
    let unique = []
    let S1 = string1.split('')
    let S2 = string2.split('')

    S1.forEach((char) => {
        ( S2.includes(char) ) ? unique.push(char) : 'do nothing' 
    })
    return unique
}


console.log(find_chars('ascdf2bghzxjkl', '2rwcetbtyurtyoiuzoiuaaaaxewrwrwaaa'))
console.log(findChars('ascdf2bghzxjkl', '2rwcetbtyurtyoiuoiuaazaaewrxwrwaaa'))