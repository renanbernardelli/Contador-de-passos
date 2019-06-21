function contar() {
    let inicio = document.querySelector('input#txti');
    let fim = document.querySelector('input#txtf');
    let passo = document.querySelector('input#txtp');
    let res = document.querySelector('div#res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.textContent = 'Impossível contar!';
    }
    else {
        res.textContent = 'Contando: ';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

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
}