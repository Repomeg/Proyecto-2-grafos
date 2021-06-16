//Document.HTML
const cantAlf = document.getElementsByName("alfabeto");

const txtNumInput = document.getElementsByName("num-input");
const txtNumInputi = document.getElementsByName("num-inputi");

const txtNumInput2 = document.getElementsByName("num-input-au2");
const txtNumInputi2 = document.getElementsByName("num-inputi-au2");

//Botones.HTML
const btn0 = document.querySelector(".btn0");

//Automata 1
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");

//Automata 2
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
const btn11 = document.querySelector(".btn11");

//Form.HTML
const form1 = document.querySelector("fomr1");
const form2 = document.querySelector("fomr2");

//Divs.HTML
//Automata 1
const divInputsQ = document.querySelector(".inputsQ");
const divInputsAlf = document.querySelector(".inputsAlf");
const divInputsSel = document.querySelector(".selectRec");
const divInputsOpt = document.querySelector(".optionRec");
const divInputCheck = document.querySelector(".inputsCheck");
const divInputRad = document.querySelector(".inputsRad");

const divInputQAfnd = document.querySelector(".input-QAfnd");
const dviInputNumQAfnd = document.querySelector(".input-num-QAfnd");
const divInputQTrAfnd = document.querySelector(".inputs-Q-Afnd");
const divInputAlfAfnd = document.querySelector(".input-Alf-Afnd");
const divInputSelRecAfnd = document.querySelector(".select-Rec-Afnd");
const divInputCheckAfnd = document.querySelector(".inputs-Check-Afnd");
const divInputRadAfnd = document.querySelector(".inputs-Rad-Afnd");

const botont5 = document.getElementById("boton5");

//Automata 2
const divInputsQAu2 = document.querySelector(".inputsQ-au2");
const divInputsAlfAu2 = document.querySelector(".inputsAlf-au2");
const divInputsSelAu2 = document.querySelector(".selectRec-au2");
const divInputCheckAu2 = document.querySelector(".inputsCheck-au2");
const divInputRadAu2 = document.querySelector(".inputsRad-au2");

const divInputQAfndAu2 = document.querySelector(".input-QAfnd-au2");
const dviInputNumQAfndAu2 = document.querySelector(".input-num-QAfnd-au2");
const divInputQTrAfndAu2 = document.querySelector(".inputs-Q-Afnd-au2");
const divInputAlfAfndAu2 = document.querySelector(".input-Alf-Afnd-au2");
const divInputSelRecAfndAu2 = document.querySelector(".select-Rec-Afnd-au2");
const divInputCheckAfndAu2 = document.querySelector(".inputs-Check-Afnd-au2");
const divInputRadAfndAu2 = document.querySelector(".inputs-Rad-Afnd-au2");

const botont5Au2 = document.getElementById("boton5-au2");

//Imagenes Automata 1
const imgAuAfd = document.querySelector(".Au-AFD");
const imgAuCom = document.querySelector(".Au-Complemento");

//Imagenes Automata 2
const imgAuAfdAu2 = document.querySelector(".Au-AFD-au2");

// Imagen Union Automatas
const imgAusUnion = document.querySelector("Au-Union");

//Variables Globales
let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
let numTransAfnd = [];
let numTransAfndAu2 = [];

//Arrays Automata
let Qs = [];
let Alf = [];
let Trans = [];
let Finale = []; // --> Largo mitad que los otros arrays
let Qfinale = [] // --> Largo de los Qs Ej: Q1,Q2,Q3,etc.
let Inicio;
let InicioAfnd;

//Clase Automata
class automata{
    constructor(k,s,g,f,qf,i,afd){
        this.k = [];
        this.s = [];
        this.g = [];
        this.f = [];
        this.qf = [];
    }
}

//Se crean 2 automatas
let automata1 = new automata;
let automataAfnd1 = new automata;

let automata2 = new automata;
let automataAfnd2 = new automata;

//Funcion Select Formulario Au1
const mostrarFormulario = () => {
    let selValu = document.getElementById("tipo").value;
    if(selValu=='AFND'){
        document.getElementById("wrapper1").style.display = 'block';
        document.getElementById("wrapper").style.display = 'none';
    }
    if(selValu=='AFD'){
        document.getElementById("wrapper").style.display = 'block';
        document.getElementById("wrapper1").style.display = 'none';
    }
    console.log(selValu);
}

//Funcion Select Formulario Au2
const mostrarFormularioAu2 = () => {
    let selValuAu2 = document.getElementById("tipo-au2").value;
    if(selValuAu2=='AFND'){
        document.getElementById("wrapper1-au2").style.display = 'block';
        document.getElementById("wrapper-au2").style.display = 'none';
    }
    if(selValuAu2=='AFD'){
        document.getElementById("wrapper-au2").style.display = 'block';
        document.getElementById("wrapper1-au2").style.display = 'none';
    }
    console.log(selValuAu2);
}

//Funciones Formulario AFD Au1
const imprimirInputsQ = () => {
    const valorInput = txtNumInput[0].value;

    for (let i = 0; i < valorInput*numAlf; i++) {
        const inputNewQ = document.createElement('input');
        divInputsQ.append(inputNewQ);
        inputNewQ.setAttribute('name', `q${i/numAlf}${abc[i%numAlf]}`); 
        inputNewQ.setAttribute('value',`q${Math.trunc(i/numAlf)}`);
        inputNewQ.setAttribute('disabled','');
        console.log(`q${Math.trunc(i/numAlf)}${abc[i%numAlf]}`);
    }
}

const guardarQs = () => {
    const vInput = txtNumInput[0].value;
    
    for(let w=0;w<vInput*numAlf;w++){
        let vQ = `q${Math.trunc(w/numAlf)}`;
        automata1.k.push(vQ);
    }
    console.log(automata1.k);
}

const imprimirInputsAlf = () => {
    const valorALf = txtNumInput[0].value;

    for(let j=0;j<valorALf*numAlf;j++){
        const inputNewAlf = document.createElement('input');
        divInputsAlf.append(inputNewAlf);
        inputNewAlf.setAttribute('name', `alf${j}`);
        inputNewAlf.setAttribute('value',`${abc[j%numAlf]}`);
        inputNewAlf.setAttribute('disabled','');
    }
}

const guardarAlf = () => {
    const vAlf = txtNumInput[0].value;

    for(let r=0;r<vAlf*numAlf;r++){
        let alfi = `${abc[r%numAlf]}`;
        automata1.s.push(alfi);
    }automata1.s
    console.log(automata1.s);
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
        automata1.g.push(infoSel);
    }
    console.log(automata1.g);
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
        automata1.f.push(checki);
        automata1.qf.push(`q${c}`);
    }
    console.log(automata1.f);
}

const agregarRad = () => {
    const valorRad = txtNumInput[0].value;

    for(let aa=0;aa<valorRad;aa++){
        const inputNewRad = document.createElement('input');
        divInputRad.append(inputNewRad);
        inputNewRad.setAttribute('type','radio');
        inputNewRad.setAttribute('class','ini');
        inputNewRad.setAttribute('value',`${aa}`);
        inputNewRad.setAttribute('name','ini');
        divInputRad.append(`q${aa}  `);
    }
}

const guardarRad = () => {
    let inici =  document.querySelector('input[name=ini]:checked').value;
    automata1.i = inici;
    console.log('Estado Inicial: q'+automata1.i);
}

//Funciones Formulario AFND Au1
const imprimirInputsQAfnd = () => {
    const valorInputAfnd = txtNumInputi[0].value;

    for(let rt=0; rt<valorInputAfnd;rt++){
        const inputNewAfndQ = document.createElement('input');
        divInputQAfnd.append(inputNewAfndQ);
        inputNewAfndQ.setAttribute('name',`q_Afnd${rt}`);
        inputNewAfndQ.setAttribute('id',`q_Afnd${rt}`);
        inputNewAfndQ.setAttribute('value',`q${rt}`);
        inputNewAfndQ.setAttribute('disabled','');
    }
}

const imprimirInputNumQAfnd = () => {
    const valorInputNumAfnd = txtNumInputi[0].value;

    for(let yu=0;yu<valorInputNumAfnd;yu++){
        const inputNewNumQ = document.createElement('input');
        dviInputNumQAfnd.append(inputNewNumQ);
        inputNewNumQ.setAttribute('type','number');
        inputNewNumQ.setAttribute('id',`qnumAfnd${yu}`);  
        inputNewNumQ.setAttribute('name',`qnumAfnd${yu}`);
    }
}

const guardarInputNumQAfnd = () => {
    const vInputAfnd = txtNumInputi[0].value;

    for(let ss=0;ss<vInputAfnd;ss++){
        let vQAfnd = document.getElementById(`qnumAfnd${ss}`).value;
        numTransAfnd.push(vQAfnd);
    }
    console.log(numTransAfnd);
}

const imprimirInputsQAfndTrans = () => {
    const valorInputQAfnd = txtNumInputi[0].value;

    for(let f =0; f<valorInputQAfnd;f++){
        for(let g=0; g<numTransAfnd[f];g++){
            const inputNewQTrAfnd = document.createElement('input');
            divInputQTrAfnd.append(inputNewQTrAfnd);
            inputNewQTrAfnd.setAttribute('name',`q_Afnd_Tr${f}-${g}`);
            inputNewQTrAfnd.setAttribute('id',`q_Afnd_Tr${f}-${g}`);
            inputNewQTrAfnd.setAttribute('value',`q${f}`);
            inputNewQTrAfnd.setAttribute('disabled','');
        }
    }
}

const guardarInputsQAfndTrans = () => {
    const valQAfndTrans = txtNumInputi[0].value;

    for(let sg=0;sg<valQAfndTrans;sg++){
        for(let ca=0;ca<numTransAfnd[sg];ca++){
            let vQAfndTrans = document.getElementById(`q_Afnd_Tr${sg}-${ca}`).value;
            automataAfnd1.k.push(vQAfndTrans);
        }
    }
    console.log(automataAfnd1.k);
}

const imprimirInputsAlfAfndTrans = () => {
    const valorInputAlfAfnd = txtNumInputi[0].value;

    for(let zx=0;zx<valorInputAlfAfnd;zx++){
        for(let hj=0;hj<numTransAfnd[zx];hj++){
            const inputNewAlfAfnd = document.createElement('input');
            divInputAlfAfnd.append(inputNewAlfAfnd);
            inputNewAlfAfnd.setAttribute('type','text');
            inputNewAlfAfnd.setAttribute('name',`Alf_Afnd_Tr${zx}-${hj}`);
            inputNewAlfAfnd.setAttribute('id',`Alf_Afnd_Tr${zx}-${hj}`);
        }   
    }
}

const guardarInputsAlfAfndTrans = () => {
    const valorInputsAlfAfnd = txtNumInputi[0].value;

    for(let nt=0;nt<valorInputsAlfAfnd;nt++){
        for(let wf=0;wf<numTransAfnd[nt];wf++){
            let vTransAfndTrans = document.getElementById(`Alf_Afnd_Tr${nt}-${wf}`).value;
            automataAfnd1.s.push(vTransAfndTrans);
        }
    }
    console.log(automataAfnd1.s);
}

const imprimirSelectRecAfnd = () => {
    const valorSelAfnd = txtNumInputi[0].value;

    for(let df =0;df<valorSelAfnd;df++){
        for(let ad=0;ad<numTransAfnd[df];ad++){
            const selNewRecAfnd = document.createElement('select');
            divInputSelRecAfnd.append(selNewRecAfnd);
            selNewRecAfnd.setAttribute('name',`selAfnd${df}-${ad}`);
            selNewRecAfnd.setAttribute('id',`selAfnd${df}-${ad}`);
            selNewRecAfnd.setAttribute('class',`selAfnd${df}-${ad}`);
        } 
    }
    agregarOptionsAfnd();
}

const agregarOptionsAfnd = () => {
    const valorOptAfnd = txtNumInputi[0].value;

    for(let ry=0;ry<valorOptAfnd;ry++){
        for(let yh=0;yh<numTransAfnd[ry];yh++){
            let $selectAfnd = document.querySelector(`.selAfnd${ry}-${yh}`);
            for(let km=0;km<valorOptAfnd;km++){
                const optiAfnd = document.createElement('option');
                optiAfnd.value=`q${km%valorOptAfnd}`;
                optiAfnd.text=`q${km%valorOptAfnd}`;
                $selectAfnd.append(optiAfnd);
            }
        }
    }
}

const guardarSelectRecAfnd = () => {
    const vSelectRecAfnd = txtNumInputi[0].value;

    for(let cj=0;cj<vSelectRecAfnd;cj++){
        for(let ha=0;ha<numTransAfnd[cj];ha++){
            let vRecAfnd = document.getElementById(`selAfnd${cj}-${ha}`).value;
            automataAfnd1.g.push(vRecAfnd);
        }
    }
    console.log(automataAfnd1.g);
}

const agregarCheckAfnd = () => {
    const valorCheckAfndAfnd = txtNumInputi[0].value;

    for(let ch=0;ch<valorCheckAfndAfnd;ch++){
        const inputNewCheckAfnd = document.createElement('input');
        divInputCheckAfnd.append(inputNewCheckAfnd);
        inputNewCheckAfnd.setAttribute('type','checkbox');
        inputNewCheckAfnd.setAttribute('id',`f-Afnd${ch}`);
        inputNewCheckAfnd.setAttribute('name',`f-Afnd${ch}`);
        divInputCheckAfnd.append(`q${ch}  `);
    }
}

const guardarCheckAfnd = () => {
    const vCheckAfnd = txtNumInputi[0].value;

    for(let ck=0;ck<vCheckAfnd;ck++){
        let checki = document.getElementById(`f-Afnd${ck}`).checked;
        automataAfnd1.f.push(checki);
        automataAfnd1.qf.push(`q${ck}`);
    }
    console.log(automataAfnd1.f);
}

const agregarRadAfnd = () => {
    const valorRadAfnd = txtNumInputi[0].value;

    for(let rv=0;rv<valorRadAfnd;rv++){
        const inputNewRadAfnd = document.createElement('input');
        divInputRadAfnd.append(inputNewRadAfnd);
        inputNewRadAfnd.setAttribute('type','radio');
        inputNewRadAfnd.setAttribute('class','inic');
        inputNewRadAfnd.setAttribute('value',`${rv}`);
        inputNewRadAfnd.setAttribute('name','inic');
        divInputRadAfnd.append(`q${rv}  `);
    }
}

const guardarRadAfnd = () => {
    let iniciAfnd =  document.querySelector('input[name=inic]:checked').value;
    automataAfnd1.i=iniciAfnd;
    console.log('Estado Inicial: q'+automataAfnd1.i); 
}

//Funciones Formulario AFD Au2
const imprimirInputsQAu2 = () => {
    const valorInputAu2 = txtNumInput2[0].value;

    for (let ik = 0; ik < valorInputAu2*numAlf; ik++) {
        const inputNewQAu2 = document.createElement('input');
        divInputsQAu2.append(inputNewQAu2);
        inputNewQAu2.setAttribute('name', `q${ik/numAlf}${abc[ik%numAlf]}-Au2`); 
        inputNewQAu2.setAttribute('value',`q${Math.trunc(ik/numAlf)}`);
        inputNewQAu2.setAttribute('disabled','');
        console.log(`q${Math.trunc(ik/numAlf)}${abc[ik%numAlf]}`);
    }
}

const guardarQsAu2 = () => {
    const vInputAu2  = txtNumInput2[0].value;
    
    for(let wx=0;wx<vInputAu2 *numAlf;wx++){
        let vQAu2  = `q${Math.trunc(wx/numAlf)}`;
        automata2.k.push(vQAu2 );
    }
    console.log(automata2.k);
}

const imprimirInputsAlfAu2 = () => {
    const valorALfAu2 = txtNumInput2[0].value;

    for(let ji=0;ji<valorALfAu2*numAlf;ji++){
        const inputNewAlfAu2 = document.createElement('input');
        divInputsAlfAu2.append(inputNewAlfAu2);
        inputNewAlfAu2.setAttribute('name', `alf${ji}-Au2`);
        inputNewAlfAu2.setAttribute('value',`${abc[ji%numAlf]}`);
        inputNewAlfAu2.setAttribute('disabled','');
    }
}

const guardarAlfAu2 = () => {
    const vAlfAu2 = txtNumInput2[0].value;

    for(let rf=0;rf<vAlfAu2*numAlf;rf++){
        let alfiAu2 = `${abc[rf%numAlf]}`;
        automata2.s.push(alfiAu2);
    }
    console.log(automata2.s);
}

const imprimirSelectRecAu2 = () => {
    const valorSelAu2 = txtNumInput2[0].value;

    for(let kP=0;kP<valorSelAu2*numAlf;kP++){
        const selNewRecAu2 = document.createElement('select');
        divInputsSelAu2.append(selNewRecAu2);
        selNewRecAu2.setAttribute('name',`sel${kP}-Au2`);
        selNewRecAu2.setAttribute('id',`sel${kP}-Au2`);
        selNewRecAu2.setAttribute('class',`sel${kP}-Au2`);
    }
    agregarOptionsAu2();
}

const agregarOptionsAu2 = () => {
    const valorOpAu2 = txtNumInput2[0].value;
    
    for(let ld=0;ld<valorOpAu2*numAlf;ld++){
        let $selectAu2 = document.querySelector(`.sel${ld}-Au2`);
        for(let pd=0;pd<valorOpAu2;pd++){
            const optiAu2 = document.createElement('option');
            optiAu2.value =`q${pd%valorOpAu2}`;
            optiAu2.text = `q${pd%valorOpAu2}`;
            $selectAu2.append(optiAu2);
        }
    }
}

const guardarSelecAu2 = () => {
    const vSelAu2 = txtNumInput2[0].value;

    for(let sn=0;sn<vSelAu2*numAlf;sn++){
        let infoSelAu2 = document.getElementById(`sel${sn}-Au2`).value;
        automata2.g.push(infoSelAu2);
    }
    console.log(automata2.g);
}

const agregarCheckAu2 = () => {
    const valorCheckAu2 = txtNumInput2[0].value;

    for(let nh=0;nh<valorCheckAu2;nh++){
        const inputNewCheckAu2 = document.createElement('input');
        divInputCheckAu2.append(inputNewCheckAu2);
        inputNewCheckAu2.setAttribute('type','checkbox');
        inputNewCheckAu2.setAttribute('id',`f${nh}-Au2`);
        inputNewCheckAu2.setAttribute('name',`f${nh}-Au2`);
        divInputCheckAu2.append(`q${nh}  `);
    }
}

const guardarCheckAu2 = () => {
    const vCheckAu2 = txtNumInput2[0].value;

    for(let cp=0;cp<vCheckAu2;cp++){
        let checkiAu2 = document.getElementById(`f${cp}-Au2`).checked;
        automata2.f.push(checkiAu2);
        automata2.qf.push(`q${cp}`);
    }
    console.log(automata2.f);
}

const agregarRadAu2 = () => {
    const valorRadAu2 = txtNumInput2[0].value;

    for(let aaw=0;aaw<valorRadAu2;aaw++){
        const inputNewRadAu2 = document.createElement('input');
        divInputRadAu2.append(inputNewRadAu2);
        inputNewRadAu2.setAttribute('type','radio');
        inputNewRadAu2.setAttribute('class','ini-Au2');
        inputNewRadAu2.setAttribute('value',`${aaw}`);
        inputNewRadAu2.setAttribute('name','ini-Au2');
        divInputRadAu2.append(`q${aaw}  `);
    }
}

const guardarRadAu2 = () => {
    let iniciAu2 =  document.querySelector('input[name=ini-Au2]:checked').value;
    automata2.i = iniciAu2;
    console.log('Estado Inicial: q'+automata2.i);
}

//Funciones Formulario AFND Au1
const imprimirInputsQAfndAu2 = () => {
    const valorInputAfndAu2 = txtNumInputi2[0].value;

    for(let rth=0; rth<valorInputAfndAu2;rth++){
        const inputNewAfndQAu2 = document.createElement('input');
        divInputQAfndAu2.append(inputNewAfndQAu2);
        inputNewAfndQAu2.setAttribute('name',`q_Afnd${rth}-Au2`);
        inputNewAfndQAu2.setAttribute('id',`q_Afnd${rth}-Au2`);
        inputNewAfndQAu2.setAttribute('value',`q${rth}`);
        inputNewAfndQAu2.setAttribute('disabled','');
    }
}

const imprimirInputNumQAfndAu2 = () => {
    const valorInputNumAfndAu2 = txtNumInputi2[0].value;

    for(let yux=0;yux<valorInputNumAfndAu2;yux++){
        const inputNewNumQAu2 = document.createElement('input');
        dviInputNumQAfndAu2.append(inputNewNumQAu2);
        inputNewNumQAu2.setAttribute('type','number');
        inputNewNumQAu2.setAttribute('id',`qnumAfnd${yux}-Au2`);  
        inputNewNumQAu2.setAttribute('name',`qnumAfnd${yux}-Au2`);
    }
}

const guardarInputNumQAfndAu2 = () => {
    const vInputAfndAu2 = txtNumInputi2[0].value;

    for(let ssm=0;ssm<vInputAfndAu2;ssm++){
        let vQAfndAu2 = document.getElementById(`qnumAfnd${ssm}-Au2`).value;
        numTransAfndAu2.push(vQAfndAu2);
    }
    console.log(numTransAfndAu2);
}

const imprimirInputsQAfndTransAu2 = () => {
    const valorInputQAfndAu2 = txtNumInputi2[0].value;

    for(let fb =0; fb<valorInputQAfndAu2;fb++){
        for(let gb=0; gb<numTransAfndAu2[fb];gb++){
            const inputNewQTrAfndAu2 = document.createElement('input');
            divInputQTrAfndAu2.append(inputNewQTrAfndAu2);
            inputNewQTrAfndAu2.setAttribute('name',`q_Afnd_Tr${fb}-${gb}-Au2`);
            inputNewQTrAfndAu2.setAttribute('id',`q_Afnd_Tr${fb}-${gb}-Au2`);
            inputNewQTrAfndAu2.setAttribute('value',`q${fb}`);
            inputNewQTrAfndAu2.setAttribute('disabled','');
        }
    }
}

const guardarInputsQAfndTransAu2 = () => {
    const valQAfndTransAu2 = txtNumInputi2[0].value;

    for(let sgd=0;sgd<valQAfndTransAu2;sgd++){
        for(let cad=0;cad<numTransAfndAu2[sgd];cad++){
            let vQAfndTransAu2 = document.getElementById(`q_Afnd_Tr${sgd}-${cad}-Au2`).value;
            automataAfnd2.k.push(vQAfndTransAu2);
        }
    }
    console.log(automataAfnd2.k);
}


const imprimirInputsAlfAfndTransAu2 = () => {
    const valorInputAlfAfndAu2 = txtNumInputi2[0].value;

    for(let zxo=0;zxo<valorInputAlfAfndAu2;zxo++){
        for(let hjo=0;hjo<numTransAfndAu2[zxo];hjo++){
            const inputNewAlfAfndAu2 = document.createElement('input');
            divInputAlfAfndAu2.append(inputNewAlfAfndAu2);
            inputNewAlfAfndAu2.setAttribute('type','text');
            inputNewAlfAfndAu2.setAttribute('name',`Alf_Afnd_Tr${zxo}-${hjo}-Au2`);
            inputNewAlfAfndAu2.setAttribute('id',`Alf_Afnd_Tr${zxo}-${hjo}-Au2`);
        }   
    }
}

const guardarInputsAlfAfndTransAu2 = () => {
    const valorInputsAlfAfndAu2 = txtNumInputi2[0].value;

    for(let ntn=0;ntn<valorInputsAlfAfndAu2;ntn++){
        for(let wfn=0;wfn<numTransAfndAu2[ntn];wfn++){
            let vTransAfndTransAu2 = document.getElementById(`Alf_Afnd_Tr${ntn}-${wfn}-Au2`).value;
            automataAfnd2.s.push(vTransAfndTransAu2);
        }
    }
    console.log(automataAfnd2.s);
}

const imprimirSelectRecAfndAu2 = () => {
    const valorSelAfndAu2 = txtNumInputi2[0].value;

    for(let dfl =0;dfl<valorSelAfndAu2;dfl++){
        for(let adl=0;adl<numTransAfndAu2[dfl];adl++){
            const selNewRecAfndAu2 = document.createElement('select');
            divInputSelRecAfndAu2.append(selNewRecAfndAu2);
            selNewRecAfndAu2.setAttribute('name',`selAfnd${dfl}-${adl}-Au2`);
            selNewRecAfndAu2.setAttribute('id',`selAfnd${dfl}-${adl}-Au2`);
            selNewRecAfndAu2.setAttribute('class',`selAfnd${dfl}-${adl}-Au2`);
        } 
    }
    agregarOptionsAfndAu2();
}

const agregarOptionsAfndAu2 = () => {
    const valorOptAfndAu2 = txtNumInputi2[0].value;

    for(let ry=0;ry<valorOptAfndAu2;ry++){
        for(let yh=0;yh<numTransAfndAu2[ry];yh++){
            let $selectAfndAu2 = document.querySelector(`.selAfnd${ry}-${yh}-Au2`);
            for(let km=0;km<valorOptAfndAu2;km++){
                const optiAfndAu2 = document.createElement('option');
                optiAfndAu2.value=`q${km%valorOptAfndAu2}`;
                optiAfndAu2.text=`q${km%valorOptAfndAu2}`;
                $selectAfndAu2.append(optiAfndAu2);
            }
        }
    }
}

const guardarSelectRecAfndAu2 = () => {
    const vSelectRecAfndAu2 = txtNumInputi2[0].value;

    for(let cjp=0;cjp<vSelectRecAfndAu2;cjp++){
        for(let hap=0;hap<numTransAfndAu2[cjp];hap++){
            let vRecAfndAu2 = document.getElementById(`selAfnd${cjp}-${hap}-Au2`).value;
            automataAfnd2.g.push(vRecAfndAu2);
        }
    }
    console.log(automataAfnd2.g);
}

const agregarCheckAfndAu2 = () => {
    const valorCheckAfndAfndAu2 = txtNumInputi2[0].value;

    for(let chg=0;chg<valorCheckAfndAfndAu2;chg++){
        const inputNewCheckAfndAu2 = document.createElement('input');
        divInputCheckAfndAu2.append(inputNewCheckAfndAu2);
        inputNewCheckAfndAu2.setAttribute('type','checkbox');
        inputNewCheckAfndAu2.setAttribute('id',`f-Afnd${chg}-Au2`);
        inputNewCheckAfndAu2.setAttribute('name',`f-Afnd${chg}-Au2`);
        divInputCheckAfndAu2.append(`q${chg}  `);
    }
}

const guardarCheckAfndAu2 = () => {
    const vCheckAfndAu2 = txtNumInputi2[0].value;

    for(let cks=0;cks<vCheckAfndAu2;cks++){
        let checkiAu2 = document.getElementById(`f-Afnd${cks}-Au2`).checked;
        automataAfnd2.f.push(checkiAu2);
        automataAfnd2.qf.push(`q${cks}`);
    }
    console.log(automataAfnd2.f);
}

const agregarRadAfndAu2 = () => {
    const valorRadAfndAu2 = txtNumInputi2[0].value;

    for(let rvb=0;rvb<valorRadAfndAu2;rvb++){
        const inputNewRadAfndAu2 = document.createElement('input');
        divInputRadAfndAu2.append(inputNewRadAfndAu2);
        inputNewRadAfndAu2.setAttribute('type','radio');
        inputNewRadAfndAu2.setAttribute('class','inic-Au2');
        inputNewRadAfndAu2.setAttribute('value',`${rvb}`);
        inputNewRadAfndAu2.setAttribute('name','inic-Au2');
        divInputRadAfndAu2.append(`q${rvb}  `);
    }
}

const guardarRadAfndAu2 = () => {
    let iniciAfndAu2 =  document.querySelector('input[name=inic-Au2]:checked').value;
    automataAfnd2.i=iniciAfndAu2;
    console.log('Estado Inicial: q'+automataAfnd2.i); 
}

//Funciones Items
const crearAu = (Qs_aux,Trans_aux,Alf_aux,Qfinale_aux,Finale_aux,Inicio_aux) => {
    let direccionQ = Qs_aux[0]+'->'+Trans_aux[0]+`[label="${Alf_aux[0]}"]`+';';
    let double='';
    let point=`poi->${Qfinale_aux[Inicio_aux]}`+' [color=dodgerblue,style=dotted] ;';
    let poi=`poi[shape=point]`;
    let fin;

    for(let z=0;z<Finale_aux.length;z++){
        if(Finale_aux[z]==true){
            double+=`${Qfinale_aux[z]} [shape=doublecircle];`;
        }
    }
    console.log(double);

    for(let b =1; b < Qs_aux.length; b++){
        direccionQ+=Qs_aux[b]+'->'+Trans_aux[b]+`[label="${Alf_aux[b]}"]`+';';
    }
    fin = 'https://quickchart.io/graphviz?graph=digraph{'+poi+point+double+direccionQ+'}';
    return fin;
}

const complemento = () => {
    let compFinale = [];

    for(let cv=0;cv<automata1.f.length;cv++){
        if(automata1.f[cv]==true){
            compFinale[cv]=false;
        }
        else{
            compFinale[cv]=true;
        }
    }
    console.log(automata1.f);
    return compFinale;
}

const union = () => {
    
}


//Eventos
btn0.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    console.log(numAlf);
    
});

// Automata 1
btn1.addEventListener('click', (evt) => {
    document.getElementById("indique").innerHTML = '<h3> Indique las transacciones </h3>'
    imprimirInputsQ();
    imprimirInputsAlf();
    imprimirSelectRec();
    document.getElementById("inicial").innerHTML = 'Seleccione su estado inicial';
    agregarRad();
    document.getElementById("finales").innerHTML = 'Seleccione sus estados finales';
    agregarCheck();

});

btn2.addEventListener('click', (evt) => {
    guardarQs();
    guardarAlf();
    guardarSelec();
    guardarCheck();
    guardarRad();
    imgAuAfd.setAttribute('src',`${crearAu(automata1.k,automata1.g,automata1.s,automata1.qf,automata1.f,automata1.i)}`);
    //simplificar();
});

//Afnd 1
btn4.addEventListener('click', (evt) => {
    imprimirInputsQAfnd();
    imprimirInputNumQAfnd();
    botont5.style.display = 'block'
    
})

btn5.addEventListener('click', (evt) => {
    document.getElementById("titulo-transAfnd").innerHTML = 'Indique las Transacciones'
    guardarInputNumQAfnd();
    imprimirInputsQAfndTrans();
    imprimirInputsAlfAfndTrans();
    imprimirSelectRecAfnd();
    document.getElementById("inicial-Afnd").innerHTML = 'Seleccione su estado inicial';
    agregarRadAfnd();
    document.getElementById("finales-Afnd").innerHTML = 'Seleccione sus estados finales';
    agregarCheckAfnd();
})

btn6.addEventListener('click', (evt) => {
    guardarInputsQAfndTrans();
    guardarInputsAlfAfndTrans();
    guardarSelectRecAfnd();
    guardarCheckAfnd();
    guardarRadAfnd();
    imgAuAfd.setAttribute('src',`${crearAu(automataAfnd1.k,automataAfnd1.g,automataAfnd1.s,automataAfnd1.qf,automataAfnd1.f,automataAfnd1.i)}`);
})

//Automata 2
btn7.addEventListener('click', (evt) => {
    document.getElementById("indique-au2").innerHTML = '<h3> Indique las transacciones </h3>'
    imprimirInputsQAu2();
    imprimirInputsAlfAu2();
    imprimirSelectRecAu2();
    document.getElementById("inicial-au2").innerHTML = 'Seleccione su estado inicial';
    agregarRadAu2();
    document.getElementById("finales-au2").innerHTML = 'Seleccione sus estados finales';
    agregarCheckAu2();
})

btn8.addEventListener('click', (evt) => {
    guardarQsAu2();
    guardarAlfAu2();
    guardarSelecAu2();
    guardarRadAu2();
    guardarCheckAu2();
    imgAuAfdAu2.setAttribute('src',`${crearAu(automata2.k,automata2.g,automata2.s,automata2.qf,automata2.f,automata2.i)}`);
    union();
})

//Afnd 2
btn9.addEventListener('click', (evt) => {
    imprimirInputsQAfndAu2();
    imprimirInputNumQAfndAu2();
    botont5Au2.style.display = 'block'
})

btn10.addEventListener('click', (evt) => {
    document.getElementById("titulo-transAfnd-au2").innerHTML = 'Indique las Transacciones'
    guardarInputNumQAfndAu2();
    imprimirInputsQAfndTransAu2();
    imprimirInputsAlfAfndTransAu2();
    imprimirSelectRecAfndAu2();
    document.getElementById("inicial-Afnd-au2").innerHTML = 'Seleccione su estado inicial';
    agregarRadAfndAu2();
    document.getElementById("finales-Afnd-au2").innerHTML = 'Seleccione sus estados finales';
    agregarCheckAfndAu2();
})

btn11.addEventListener('click', (evt) => {
    guardarInputsQAfndTransAu2();
    guardarInputsAlfAfndTransAu2();
    guardarSelectRecAfndAu2();
    guardarCheckAfndAu2();
    guardarRadAfndAu2();
    imgAuAfdAu2.setAttribute('src',`${crearAu(automata2.k,automata2.g,automata1.s,automata2.qf,automata2.f,automata2.i)}`);
})
