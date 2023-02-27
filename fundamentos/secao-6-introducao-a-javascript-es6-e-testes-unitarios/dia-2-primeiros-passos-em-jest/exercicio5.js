function hydrate (string) {
    const sep = string.split(" ").filter(Number);
    soma = 0;
    for (const i of sep) {
       soma += parseInt(i); 
    }
    if (soma === 1) return `${soma} copo de água`;
    return `${soma} copos de água`;
}

module.exports = hydrate;
