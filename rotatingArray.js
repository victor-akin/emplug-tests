function rotate(rotate_by_n, arr) {
    if(rotate_by_n < 1) return 'illegal offset...'
    let x = arr.slice(-rotate_by_n)
    let y = arr.slice(0, arr.length - rotate_by_n)
    return x.concat(y)
}
console.log(rotate(1, [1, 2, 3, 4, 5, 6]))