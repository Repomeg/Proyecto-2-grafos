const cantAlf = document.getElementsByName("alfabeto");
const txtNumInput = document.getElementsByName("num-input");

const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");

const form1 = document.querySelector("fomr1");

const divInputsQ = document.querySelector(".inputsQ");
const divInputsAlf = document.querySelector(".inputsAlf");
const divInputsSel = document.querySelector(".selectRec");
const divInputsOpt = document.querySelector(".optionRec");
const divInputRad = document.querySelector(".inputsRad");

let numIndicador = cantAlf.value;

//Funciones
const imprimirInputsQ = () => {
    const valorInput = txtNumInput[0].value;

    for (let i = 0; i < valorInput*2; i++) {
        const inputNewQ = document.createElement('input');
        divInputsQ.append(inputNewQ);
        inputNewQ.setAttribute('name', `q${i}`); 
    }
}

const imprimirInputsAlf = () => {
    const valorALf = txtNumInput[0].value;

    for(let j=0;j<valorALf*2;j++){
        const inputNewAlf = document.createElement('input');
        divInputsAlf.append(inputNewAlf);
        inputNewAlf.setAttribute('name', `alf${j}`);
    }
}

const imprimirSelectRec = () => {
    const valorSel = txtNumInput[0].value;

    for(let k=0;k<valorSel*2;k++){
        const selNewRec = document.createElement('select');
        divInputsSel.append(selNewRec);
        selNewRec.setAttribute('name',`sel${k}`);
        selNewRec.setAttribute('class',`sel${k}`);
    }
    agregarOptions();
}

const agregarOptions = () => {
    const valorOp = txtNumInput[0].value;
    
    for(let l=0;l<valorOp*2;l++){
        let $select = document.querySelector(`.sel${l}`);
        for(let p=0;p<valorOp*2;p++){
            const opti = document.createElement('option');
            opti.value =`${p}`;
            opti.text = `${p}`;
            $select.append(opti);
        }
    }
}

const agregarRad = () => {
    const valorRad = txtNumInput[0].value;

    for(let n=0;n<valorRad;n++){
        const inputNewRad = document.createElement('input');
        divInputRad.append(inputNewRad);
        inputNewRad.setAttribute('type','checkbox');
        inputNewRad.setAttribute('name',`f${n}`);
    }
}

//Eventos
btn0.addEventListener('click', (evt) =>{
    console.log(numIndicador);
});


btn1.addEventListener('click', (evt) => {
    imprimirInputsQ();
    imprimirInputsAlf();
    imprimirSelectRec();
    document.getElementById("finales").innerHTML = 'Seleccione sus estados finales';
    agregarRad();
});
