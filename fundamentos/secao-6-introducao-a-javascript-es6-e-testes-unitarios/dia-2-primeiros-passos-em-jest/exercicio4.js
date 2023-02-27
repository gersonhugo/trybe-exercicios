function techList(array, string) {
    if (array.length === 0) return 'Vazio!';
    a = [];
    array.sort();
    for (let i = 0; i < array.length; i += 1) {
        a.push(
            {
            'tech': array[i],
            'name': string
        })
    }
    return a;
}

module.exports = techList;
