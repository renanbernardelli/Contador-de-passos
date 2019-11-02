const contarPassos = document.querySelector('#button');

contarPassos.addEventListener('click', function (event) {
    event.preventDefault()

    let inicio = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let passo = document.querySelector('#txtp');
    let res = document.querySelector('#res');

    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.textContent = 'Impossível contar!';
    }
    else {
        res.textContent = 'Contando: ';

        if(p <= 0){
            window.alert('Passo inválido!');
        }
        else if(i < f){ //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.textContent += ` ${c} \u{1F449}`;
            }
            res.textContent += `\u{1F3C1}`
        }
        else{ //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.textContent += ` ${c} \u{1F3C3}`;
            }
            res.textContent += `\u{1F64C}`;
        }
    }
    inicio.value = '';
    fim.value = '';
    passo.value = '';
    inicio.focus();
});