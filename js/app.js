function sendValue(x) {
    let valor = document.getElementById('display'); 

    if(x == '=') {
        let porcentagem = valor.innerHTML.includes('%');

        if(porcentagem) {
            let valorArray = valor.innerHTML.split('%');
            calculo = eval(valorArray[0])*eval(valorArray[1])*0.01;
            valor.innerHTML = calculo;
            
        }
        
        valor.innerHTML = eval(valor.innerHTML);

        if(isNaN(parseInt(valor.innerHTML))) {
            alert('Houve um erro, tente novamente!');
            valor.innerHTML = '';
            return
        }
        
        return;
    } else if(x == 'clear') {
        valor.innerHTML = '';
        return;
    } else if(x == 'del') {
        let novoValor = ((valor.innerHTML).split('')).slice(0,-1);
        valor.innerHTML = novoValor.join('');
        return;
    } else {
        document.getElementById('display').innerHTML += x;
    }

}