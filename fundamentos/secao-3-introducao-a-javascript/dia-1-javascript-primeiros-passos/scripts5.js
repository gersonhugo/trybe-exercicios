
mes = 'janeiro';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'


let candidata = 'aprovada';

switch (candidata) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!')
        break;
    
    case 'lista':
        console.log('Você está na nossa lista de espera')
        break;
        
    case 'reprovada':
            console.log('Você foi reprovada(o)')
            break;
                
    default:
        console.log('Informação incorreta')
        break;
}
