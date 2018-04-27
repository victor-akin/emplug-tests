function compact(arr) {
    if(!Array.isArray(arr)) return 'Expecting array...'
    let transform = []
    arr.forEach(value => {
        !(transform.includes(value)) ? transform.push(value) : 'skip'
    });
    return transform
}

console.log(compact([1, 3, 7, 7, 8, 9, 9, 9, 10]))