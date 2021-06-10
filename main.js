//Document.HTML
const cantAlf = document.getElementsByName("alfabeto");
const txtNumInput = document.getElementsByName("num-input");

const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const form1 = document.querySelector("fomr1");

const divInputsQ = document.querySelector(".inputsQ");
const divInputsAlf = document.querySelector(".inputsAlf");
const divInputsSel = document.querySelector(".selectRec");
const divInputsOpt = document.querySelector(".optionRec");
const divInputCheck = document.querySelector(".inputsCheck");

//Variables Globales
let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

//Arrays Automata
let Qs = [];
let Alf = [];
let Trans = [];
let Finale = []; // --> Largo mitad que los otros arrays


//Funciones
const imprimirInputsQ = () => {
    const valorInput = txtNumInput[0].value;

    for (let i = 0; i < valorInput*numAlf; i++) {
        const inputNewQ = document.createElement('input');
        divInputsQ.append(inputNewQ);
        inputNewQ.setAttribute('name', `q${i/numAlf}${abc[i%numAlf]}`); 
        inputNewQ.setAttribute('value',`q${Math.trunc(i/numAlf)}`);
        console.log(`q${Math.trunc(i/numAlf)}${abc[i%numAlf]}`);
    }
}

const guardarQs = () => {
    const vInput = txtNumInput[0].value;
    
    for(let w=0;w<vInput*numAlf;w++){
        let vQ = `q${Math.trunc(w/numAlf)}`;
        Qs.push(vQ);
    }
    console.log(Qs);
}

const imprimirInputsAlf = () => {
    const valorALf = txtNumInput[0].value;

    for(let j=0;j<valorALf*numAlf;j++){
        const inputNewAlf = document.createElement('input');
        divInputsAlf.append(inputNewAlf);
        inputNewAlf.setAttribute('name', `alf${j}`);
        inputNewAlf.setAttribute('value',`${abc[j%numAlf]}`);
    }
}

const guardarAlf = () => {
    const vAlf = txtNumInput[0].value;

    for(let r=0;r<vAlf*numAlf;r++){
        let alfi = `${abc[r%numAlf]}`;
        Alf.push(alfi);
    }
    console.log(Alf);
}

const imprimirSelectRec = () => {
    const valorSel = txtNumInput[0].value;

    for(let k=0;k<valorSel*numAlf;k++){
        const selNewRec = document.createElement('select');
        divInputsSel.append(selNewRec);
        selNewRec.setAttribute('name',`sel${k}`);
        selNewRec.setAttribute('id',`sel${k}`);
        selNewRec.setAttribute('class',`sel${k}`);
    }
    agregarOptions();
}

const agregarOptions = () => {
    const valorOp = txtNumInput[0].value;
    
    for(let l=0;l<valorOp*numAlf;l++){
        let $select = document.querySelector(`.sel${l}`);
        for(let p=0;p<valorOp;p++){
            const opti = document.createElement('option');
            opti.value =`q${p%valorOp}`;
            opti.text = `q${p%valorOp}`;
            $select.append(opti);
        }
    }
}

const guardarSelec = () => {
    const vSel = txtNumInput[0].value;

    for(let s=0;s<vSel*numAlf;s++){
        let infoSel = document.getElementById(`sel${s}`).value;
        Trans.push(infoSel);
    }
    console.log(Trans);
}

const agregarCheck = () => {
    const valorCheck = txtNumInput[0].value;

    for(let n=0;n<valorCheck;n++){
        const inputNewCheck = document.createElement('input');
        divInputCheck.append(inputNewCheck);
        inputNewCheck.setAttribute('type','checkbox');
        inputNewCheck.setAttribute('id',`f${n}`);
        inputNewCheck.setAttribute('name',`f${n}`);
        divInputCheck.append(`q${n}  `);
    }
}

const guardarCheck = () => {
    const vCheck = txtNumInput[0].value;

    for(let c=0;c<vCheck;c++){
        let checki = document.getElementById(`f${c}`).checked;
        Finale.push(checki);
    }
    console.log(Finale);
}

//Eventos
btn0.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    console.log(numAlf);
});

btn1.addEventListener('click', (evt) => {
    imprimirInputsQ();
    imprimirInputsAlf();
    imprimirSelectRec();
    document.getElementById("finales").innerHTML = 'Seleccione sus estados finales';
    agregarCheck();
});

btn2.addEventListener('click', (evt) => {
    guardarQs();
    guardarAlf();
    guardarSelec();
    guardarCheck ();
});
