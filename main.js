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
btn2.style.display="none";
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
btn6.style.display="none";

//Automata 2
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
btn8.style.display="none";
const btn9 = document.querySelector(".btn9");
const btn10 = document.querySelector(".btn10");
const btn11 = document.querySelector(".btn11");
btn11.style.display="none";
//Form.HTML
const form1 = document.querySelector("fomr1");
const form2 = document.querySelector("fomr2");
//Funciones Conjuntas
const btn12 = document.querySelector(".btn12");

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
const imgAuEqui = document.querySelector(".Au-Equi");
const imgAuSimp = document.querySelector(".Au-Simp");
const imgAuCom = document.querySelector(".Au-Comp");

//Imagenes Automata 2
const imgAuAfdAu2 = document.querySelector(".Au-AFD-au2");
const imgAuEquiAu2 = document.querySelector(".Au-Equi-au2");
const imgAuSimpAu2 = document.querySelector(".Au-Simp-au2");
const imgAuComAu2 = document.querySelector(".Au-Comp-au2");

// Imagen Union Automatas
const imgAuUnion = document.querySelector(".Au-Union");
const imgAuUnionequi = document.querySelector(".Au-Unionequi");
const imgAuUnionsimp = document.querySelector(".Au-UnionSimp");
const imgAuConca = document.querySelector(".Au-Concatenacion");
const imgAuConcaequi = document.querySelector(".Au-Concaequi");
const imgAuConcasimp= document.querySelector(".Au-ConcaSimp");
const imgAuInter = document.querySelector(".Au-Inter");
const imgAuIntersimp= document.querySelector(".Au-InterSimp");




//Variables Globales
let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let Eabc = ["E","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numTransAfnd = [];
let numTransAfndAu2 = [];
let compatibles = [];
let numAlf;
let numAlf2;
let Largo;
let alfabeto = [];
let Estio = [];
let Tranco = [];

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
    constructor(k,s,g,f,qf,i,l){
        this.k = [];
        this.s = [];
        this.g = [];
        this.f = [];
        this.qf = [];
    }
}

//Se crean 2 automatas para cada caso
let automata1 = new automata;
let automataAfnd1 = new automata;

let automata2 = new automata;
let automataAfnd2 = new automata;

//Automatas equivalentes
let automataEqui1 = new automata;
let automataEqui2 = new automata;

let automataEqui3 = new automata;
let automataEqui4 = new automata;

//Automatas Simplificados
let automataSimplificado1 = new automata;
let automataSimplificado2 = new automata;

let automataSimplificadoAFND1 = new automata;
let automataSimplificadoAFND2 = new automata;

let automataSimplificado5 = new automata;
let automataSimplificado6 = new automata;
let automataSimplificado7 = new automata;

//Automatas mezcla de ambos
let automataUnionAux = new automata;
let automataConcaAux = new automata;

let automataUnion = new automata;
let automataConca = new automata;

//Automata convertir datos AFND a AFD
let automataRecuperar = new automata;

//Automatas interseccion
let comple1 = new automata;
let comple2 = new automata;
let unionComple = new automata;
let automataEquiInter = new automata;


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
    }//automata1.s
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
        document.getElementById(`sel${k}`).style.marginBottom = '5px';
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
        inputNewRad.setAttribute('checked','true');
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
    var x= document.getElementById("alfabeto").value;
    var y= document.getElementById("num1i").value;
    let esigual=x*y;
        
    for (let ss = 0; ss < vInputAfnd; ss++) {
        //let vQAfnd = document.getElementById(`qnumAfnd${ss}`).value;
        if(document.getElementById(`qnumAfnd${ss}`).value==""){
            alert("Debe agregar un valor entre 1 y "+ esigual);
            plog.error('Se agrego un valor invalido en las Transacciones AFND del Automata 1');
            numTransAfnd=[];
            return 0;
        }
        if(document.getElementById(`qnumAfnd${ss}`).value<1){
            alert("Debe agregar un valor entre 1 y "+ esigual);
            plog.error('Se agrego un valor invalido en las Transacciones AFND del Automata 1');
            numTransAfnd=[];
            return 0;
            
        }
        if(document.getElementById(`qnumAfnd${ss}`).value>esigual){
            alert("Debe agregar un valor entre 1 y "+ esigual);
            plog.error('Se agrego un valor invalido en las Transacciones AFND del Automata 1');
            numTransAfnd=[];
            return 0;
        }
        numTransAfnd.push(document.getElementById(`qnumAfnd${ss}`).value);
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
            const inputNewAlfAfnd = document.createElement('select');
            divInputAlfAfnd.append(inputNewAlfAfnd);
            inputNewAlfAfnd.setAttribute('name',`Alf_Afnd_Tr${zx}-${hj}`);
            inputNewAlfAfnd.setAttribute('id',`Alf_Afnd_Tr${zx}-${hj}`);
            inputNewAlfAfnd.setAttribute('class',`Alf_Afnd_Tr${zx}-${hj}`);
            document.getElementById(`Alf_Afnd_Tr${zx}-${hj}`).style.marginBottom = '5px';
        }  
    }
    agregarOptionAlfAfndTrans(); 
}

const agregarOptionAlfAfndTrans = () => {
    const valorOptiAfnd = txtNumInputi[0].value;

    for(let ry=0;ry<valorOptiAfnd;ry++){
        for(let yh=0;yh<numTransAfnd[ry];yh++){
            let $selectiAfnd = document.querySelector(`.Alf_Afnd_Tr${ry}-${yh}`);
            for(let km=0;km<=numAlf;km++){
                const optiAfnd = document.createElement('option');
                optiAfnd.value=`${Eabc[km]}`;
                optiAfnd.text=`${Eabc[km]}`;
                $selectiAfnd.append(optiAfnd);
            }
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
            document.getElementById(`selAfnd${df}-${ad}`).style.marginBottom = '5px';
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
        inputNewRadAfnd.setAttribute('checked','true');
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
        document.getElementById(`sel${kP}-Au2`).style.marginBottom = '5px'
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
        inputNewRadAu2.setAttribute('checked','true');
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
    
    var x= document.getElementById("alfabeto").value;
    var y= document.getElementById("num1i-au2").value;
    let esigual=x*y;
    for (let ssm = 0; ssm < vInputAfndAu2; ssm++) {
        //let vQAfndAu2 = document.getElementById(`qnumAfnd${ssm}-Au2`).value;
        if(document.getElementById(`qnumAfnd${ssm}-Au2`).value==""){
            alert("Debe agregar un valor entre 1 y "+ esigual);
            plog.error('Se agrego un valor invalido en las Transacciones AFND del Automata 2');
            numTransAfndAu2=[];
            return 0;
        }
        
        if(document.getElementById(`qnumAfnd${ssm}-Au2`).value<1){
            alert("Debe agregar un valor entre 1 y "+ esigual);
            plog.error('Se agrego un valor invalido en las Transacciones AFND del Automata 2');
            numTransAfndAu2=[];
            return 0;
            
        }
        if(document.getElementById(`qnumAfnd${ssm}-Au2`).value>esigual){
            alert("Debe agregar un valor entre 1 y "+ esigual);
            plog.error('Se agrego un valor invalido en las Transacciones AFND del Automata 2');
            numTransAfndAu2=[];
            return 0;
        }
        numTransAfndAu2.push(document.getElementById(`qnumAfnd${ssm}-Au2`).value);
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
            const inputNewAlfAfndAu2 = document.createElement('select');
            divInputAlfAfndAu2.append(inputNewAlfAfndAu2);
            divInputAlfAfndAu2.setAttribute('name',`Alf_Afnd_Tr${zxo}-${hjo}-Au2`);
            inputNewAlfAfndAu2.setAttribute('id',`Alf_Afnd_Tr${zxo}-${hjo}-Au2`);
            inputNewAlfAfndAu2.setAttribute('class',`Alf_Afnd_Tr${zxo}-${hjo}-Au2`);
            document.getElementById(`Alf_Afnd_Tr${zxo}-${hjo}-Au2`).style.marginBottom = '5px';
        }  
    }
    agregarOptionAlfAfndTransAu2(); 
}

const agregarOptionAlfAfndTransAu2 = () => {
    const valorOptiAfnd = txtNumInputi2[0].value;

    for(let ryo=0;ryo<valorOptiAfnd;ryo++){
        for(let yho=0;yho<numTransAfndAu2[ryo];yho++){
            let $selectiAfndAu2 = document.querySelector(`.Alf_Afnd_Tr${ryo}-${yho}-Au2`);
            for(let kmo=0;kmo<=numAlf;kmo++){
                const optiAfndAu2 = document.createElement('option');
                optiAfndAu2.value=`${Eabc[kmo]}`;
                optiAfndAu2.text=`${Eabc[kmo]}`;
                $selectiAfndAu2.append(optiAfndAu2);
            }
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
            document.getElementById(`selAfnd${dfl}-${adl}-Au2`).style.marginBottom = '5px'
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
        inputNewRadAfndAu2.setAttribute('checked','true');
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
    let point=`poi->q${Inicio_aux}`+' [color=dodgerblue,style=dotted] ;';
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

const llenar = (info) => {
    Estio = [];
    
    for(i=0;i<info.qf.length;i++){
        let arr = [];
        arr.push(info.qf[i]);
        if(info.f[i]==true){
            arr.push('f')
        }else{
            arr.push('n')
        }
        if(info.i==i&&info.f[i]==true){
            arr[1]='if';
        }
        if(info.i==i&&info.f[i]!=true){
            arr[1]='i';
        }
        Estio.push(arr);
    }

    console.log(Estio);
}

const llenarTrans = (info) => {
    Tranco = [];

    for(i=0;i<info.k.length;i++){
        let arr = [];
        arr.push(info.k[i]);
        arr.push(info.s[i]);
        arr.push(info.g[i]);
        Tranco.push(arr);
    }
    console.log(Tranco);
}

const haceralfabeto = () => {
    alfabeto=[];
    for(i=0;i<=numAlf;i++){
        alfabeto.push(Eabc[i]);
    }
    console.log(alfabeto);
}

function agregaEstados(matrizD, estadoD, alfaD){
    var matrizDES=[], estadoDES=[], alfaDES=[], guardaNombre=[], a=0, b=0, esCombinado=0, guardaEstado=[], ingreso="k";
    matrizDES=matrizD, estadoDES=estadoD, alfaDES=alfaD;

    do{
    for(var c=0;c<estadoDES.length;c++){
            if(matrizDES[a][b]==estadoDES[c][0]){
            esCombinado=1;
        }
    }
        if(esCombinado==0){
            estadoDES.push([matrizDES[a][b],"n"]);
                guardaNombre=matrizDES[a][b].split("");
                var var1=0;
                do{
                    for(var pot=0;pot<guardaNombre.length;pot++){
                        if(guardaNombre[pot]==";"){
                            var1=1;
                        }
                    }
                    if(var1==1){
                        for(var twerk=0;guardaNombre[twerk]!=";";twerk++){
                            ingreso=ingreso+guardaNombre[twerk];
                        }
                        var algo=ingreso.slice(1, ingreso.length);
                        guardaEstado.push(algo);
                        do{
                            guardaNombre.splice(0,1);
                        }while(guardaNombre[1]==";");
                        guardaNombre.splice(0,1);
                        ingreso="k", var1=0;
                    }else{
                        if(var1==0){
                            var algo2="k";
                            for(var ser=0;ser<guardaNombre.length;ser++){
                                algo2=algo2+guardaNombre[ser];
                            }
                            var algo3=algo2.slice(1, algo2.length);
                            guardaEstado.push(algo3);
                            guardaNombre.splice(0, guardaNombre.length);
                        }
                    }
                }while(guardaNombre.length!=0);

                guardaEstado
            
                var tro=0, tra=0, tru=0, validadorDelNombre=0, guardaLlegada=[], ingresaLlegada=[], ingresoalgo="k";
                do{
                    do{
                        do{
                    if(guardaEstado[tro]==estadoDES[tra][0]){
                        var analisis=matrizDES[tra][tru].split("");
                        for(var two=0;two<analisis.length;two++){
                            if(analisis[two]==";"){
                                validadorDelNombre=1;
                            }
                        }
                            if(validadorDelNombre==1){
                                var var3=0;
                                do{
                                    for(var wq=0;wq<analisis.length;wq++){
                                        if(analisis[wq]==";"){
                                            var3=1;
                                        }
                                    }
                                    if(var3==1){
                                        for(var twerk=0;analisis[twerk]!=";";twerk++){
                                            ingresoalgo=ingresoalgo+analisis[twerk];
                                        }
                                        var algo=ingresoalgo.slice(1, ingresoalgo.length);
                                        guardaLlegada.push(algo);
                                        do{
                                            analisis.splice(0,1);
                                        }while(analisis[1]==";");
                                        analisis.splice(0,1);
                                        ingresoalgo="k", var3=0;
                                    }else{
                                        if(var3==0){
                                            var algo2="k";
                                            for(var ser=0;ser<analisis.length;ser++){
                                                algo2=algo2+analisis[ser];
                                            }
                                            var algo3=algo2.slice(1, algo2.length);
                                            guardaLlegada.push(algo3);
                                            analisis.splice(0, analisis.length); 
                                            var3=2; 
                                        }
                                    }
                                }while(var3!=2);
                                tra++;
                            }else{
                                if(validadorDelNombre==0){
                                    guardaLlegada.push(matrizDES[tra][tru]);
                                }
                                tra++;
                            }
                        }else{
                            tra++;
                        }
                    }while(tra<estadoDES.length);
                        tro++, tra=0;
                    }while(tro<guardaEstado.length);
                    guardaLlegada.sort();
                    var unicos = Array.from(new Set(guardaLlegada));
                    var ka="k";
                    for(var twf=0;twf<unicos.length;twf++){
                        ka=ka+";"+unicos[twf];
                    }
                    var ahoraSi=ka.slice(2, ka.length);
                    ingresaLlegada.push(ahoraSi);
                    guardaLlegada=[];
                    tru++, tra=0, tro=0;
                }while(tru<alfaDES.length);
                matrizDES.push(ingresaLlegada);
            }
            b++, esCombinado=0;
                if(b<alfaDES.length){
                    a++;
                    b=0;
                }
        }while(a<matrizDES.length);
        matrizDES
        estadoDES
        
    return[matrizDES, estadoDES];
}

function convertirAFND (estadoAFND, transAFND){//Solo ingresar automatas finitos no deterministas
    var eAUX=[], tranAUX=[], aAUX=[];
    eAUX=estadoAFND, tranAUX=transAFND;
    for(var ret=1; ret<alfabeto.length;ret++){
        aAUX.push(alfabeto[ret]);
    }

    var matrizDestinos=[]; ingresoDestino=[], validaAlfabeto=[], v=0, x=0, k=0, cont1=0;
    do{
        do{
            for(x;x<tranAUX.length;x++){
                if(eAUX[v][0]==tranAUX[x][0] && aAUX[k]==tranAUX[x][1]){
                    cont1++;
                }
            }
            validaAlfabeto.push(cont1);
            cont1=0,x=0, k++;
        }while(k<aAUX.length);
        console.log(validaAlfabeto);
        k=0, x=0;
        var n=0;
        do{
            if(validaAlfabeto[n]==0){
                ingresoDestino.push("NX");
                n++;
            }else{
                if(validaAlfabeto[n]==1){
                    var ñ=0
                    do{
                        if(eAUX[v][0]==tranAUX[x][0] && aAUX[n]==tranAUX[x][1]){
                            ingresoDestino.push(tranAUX[x][2]);
                            ñ=1;
                        }else{
                            x++;
                        }
                    }while(ñ==0);
                    x=0, n++;
                }
                else{
                    if(validaAlfabeto[n]>1){
                        var NNombre="k", estadosMM=[];
                        do{
                            if(eAUX[v][0]==tranAUX[x][0] && aAUX[n]==tranAUX[x][1]){
                                estadosMM.push(tranAUX[x][2]);
                                x++;
                            }else{
                                x++;
                            }
                        }while(x<tranAUX.length);
                        estadosMM.sort();
                        for(var por=0;por<estadosMM.length;por++){
                            NNombre=NNombre+";"+estadosMM[por];
                        }
                        var Nombre=NNombre.slice(2);
                        estadosMM=[];
                        ingresoDestino.push(Nombre), NNombre="k", x=0, n++;
                    }
                }
            }
        }while(n<validaAlfabeto.length);
    matrizDestinos.push(ingresoDestino);
        ingresoDestino=[], validaAlfabeto=[], x=0, n=0, k=0, v++;
    }while(v<eAUX.length);

    console.log(matrizDestinos);
    console.log(eAUX);

    var ingresoVariable=[], teo=0, wet=0, contador=1;
    do{
        if(matrizDestinos[teo][wet]=="NX"){
            matrizDestinos[teo].splice(wet, 1, "Nuevo"+contador);
            for(var hg=0; hg<aAUX.length;hg++){
                ingresoVariable.push("Nuevo"+contador);
            }
            matrizDestinos.push(ingresoVariable);
            eAUX.push(["Nuevo"+contador,"n"]);
            ingresoVariable=[];
            wet++, contador++;
            if(wet>aAUX.length){
                wet=0, teo++;
            }
        }else{
            wet++;
            if(wet>aAUX.length){
                wet=0, teo++;
            }
        }
    }while(teo<matrizDestinos.length);
    console.log(matrizDestinos);
    console.log(eAUX);

    const [matrizConvertida, estadoConvertido]=agregaEstados(matrizDestinos, eAUX, aAUX);
    
    var transFinalAFND=[];
    var ingreso3=[], nivelEstado=0, nivelAlfa=0;
    do{
        ingreso3.push(estadoConvertido[nivelEstado][0]);
        ingreso3.push(aAUX[nivelAlfa]);
        ingreso3.push(matrizConvertida[nivelEstado][nivelAlfa]);
        transFinalAFND.push(ingreso3);
        ingreso3=[];
        nivelAlfa++;
        if(nivelAlfa==aAUX.length){
            nivelEstado++, nivelAlfa=0;
        }
    }while(nivelEstado<estadoConvertido.length);
    console.log(transFinalAFND);
    console.log(estadoConvertido);
    return[estadoConvertido, transFinalAFND];
}

const recuperarAutoma = (info) => {
    automataRecuperar.k=[];
    automataRecuperar.s=[];
    automataRecuperar.g=[];
    automataRecuperar.f=[];
    automataRecuperar.qf=[];
    automataRecuperar.i=null;

    let Transa = info[1];
    let Esti = info[0];

    let recuQ = [];
    let alfa = [];
    let recibir = [];

    let Qfini = [];
    let fini = [];

    console.log(Transa);
    console.log(Esti);

    for(let nbv=0;nbv<Transa.length;nbv++){
        recuQ[nbv]=Transa[nbv][0];
    }
    console.log(recuQ);

    for(let nbo=0;nbo<Transa.length;nbo++){
        alfa[nbo]=Transa[nbo][1];
    }
    console.log(alfa);

    for(let nbl=0;nbl<Transa.length;nbl++){
        recibir[nbl]=Transa[nbl][2];
    }
    console.log(recibir);

    //-----------------------------------------------

    let auxiQ = recuQ;
    let auxiG = recibir;

    let c=0;

    for(let rgb=0;rgb<recuQ.length;rgb++){
        if(recuQ[rgb].charAt(0)=='q'){
            c++;
        }
    }
    c=c/2;
    if(c%1!=0){
        c=Math.trunc(c)+1;
    }

    console.log(c);

    let spli;

    for(let lmn =0;lmn<recuQ.length;lmn++){
        if(recuQ[lmn].charAt(0)=='N'){
            spli = recuQ[lmn].split('');
            //console.log(spli);
            for(let rg =0;rg<5;rg++){
                spli.shift();
            }
            console.log(spli);
            auxiQ[lmn]=`q${Number.parseInt(spli)+c}`;
        }
    }
    console.log(auxiQ);

    //-----------------------------------------------

    let splix;

    for(let lmn =0;lmn<recibir.length;lmn++){
        if(recibir[lmn].charAt(0)=='N'){
            splix = recibir[lmn].split('');
            //console.log(spli);
            for(let rg =0;rg<5;rg++){
                splix.shift();
            }
            console.log(splix);
            auxiG[lmn]=`q${Number.parseInt(splix)+c}`;
        }
    }
    console.log(auxiG);    
    
    //------------------------------------------------

    for(let hn=0;hn<Esti.length;hn++){
        Qfini[hn]=Esti[hn][0];
    }
    console.log(Qfini);

    let auxiqf=Qfini;
    let slip;

    for(let fd=0;fd<Esti.length;fd++){
        if(Qfini[fd].charAt(0)=='N'){
            slip=Qfini[fd].split('');
            for(let sf=0;sf<5;sf++){
                slip.shift();
            }
            console.log(slip);
            auxiqf[fd]=`q${Number.parseInt(slip)+c}`;
        }
    }
    console.log(auxiqf);
    
    //-------------------------------------------------

    for(let hnq=0;hnq<Esti.length;hnq++){
        fini[hnq]=Esti[hnq][1];
    }
    console.log(fini);

    let auxf=[];
    let ino;

    for(let rfv=0;rfv<fini.length;rfv++){
        if(fini[rfv]=='f'){
            auxf[rfv]=true;
        }

        if(fini[rfv]=='n'){
            auxf[rfv]=false;
        }

        if(fini[rfv]=='if'){
            auxf[rfv]=true;
            ino=auxiqf[rfv];
        }

        if(fini[rfv]=='i'){
            auxf[rfv]=false;
            ino=auxiqf[rfv];
        }
    }
    console.log(auxf);
    console.log(ino);

    ino=ino.split('');
    ino.shift();
    ino=Number.parseInt(ino);

    console.log(ino);

    automataRecuperar.k=auxiQ;
    automataRecuperar.s=alfa;
    automataRecuperar.g=auxiG
    automataRecuperar.f=auxf;
    automataRecuperar.qf=auxiqf;
    automataRecuperar.i=ino;

    console.log(automataRecuperar);
    return automataRecuperar;
}

const estadosCompatibles = (compi,ff) => {
    let aux = [];
    let Finale1 = ff;
    let compatibles1 = compi; 

    //Rellena con 1 los incompatibles
    for(let i = 0; i<Finale1.length; i++){
        for(let j = 0; j<Finale1.length; j++){
                if(i > j){
                    if(Finale1[i] == true && Finale1[j] == false || Finale1[i] == false && Finale1[j] == true ){
                        aux.push(1);
                    }
                    else
                        aux.push(0);
                }
            } 
            compatibles1[i] = aux;
            aux = [];
        }   
    console.log(compatibles1);
}

const estadosDistinguibles = (com,Fi,Tra,niu) => {
    let compatibles1 = com;
    let Finale1 = Fi;
    let Trans1 = Tra;
    let numAlf1 = niu;

    let a=0;
         for(let i=0; i<Finale1.length;i++){  // for para viajar a traves de la matriz "compatibles"
             for(let j=0; j<Finale1.length;j++){
                    if(compatibles1[i][j]==0){    // se pregunta cual de los puntos no ha sido evaludado
                        for(let p=0;p<Trans1.length;p++){   // se recorre con un "for" llamando "p" al vector que muestra el indice de "k y g o Qs y Trans"
                            if(p==(i*numAlf1)){  // se pregunta si "p" es igual al indice "i" multiplicado por la cantidad de alfabeto que se esta usando en el automata"
                                 let x=[];
                                 let y=[];
                                 for(a=0;a<numAlf1;a++){
                                     if(numAlf1<10){
                                        x[a]=Number.parseInt(Trans1[(i*numAlf1)+a].charAt(1));
                                     }
                                    else{
                                        x[a]=Number.parseInt(Trans1[(i*numAlf1)+a].charAt(1))*10 + Number.parseInt(Trans1[(i*numAlf1)+a].charAt(2));
                                    }
                                 }
                                 for(a=0;a<numAlf1;a++){
                                    if(numAlf1<10){
                                        y[a]=Number.parseInt(Trans1[(j*numAlf1)+a].charAt(1));
                                     }
                                    else{
                                        y[a]=Number.parseInt(Trans1[(j*numAlf1)+a].charAt(1))*10 + Number.parseInt(Trans1[(i*numAlf1)+a].charAt(2));
                                    }
                                 }
                                 for(a=0;a<Trans1.length;a++){
                                     if(Finale1[x[a]] != Finale1[y[a]]){ 
                                         compatibles1[i][j]=1;
                                     }
                                 }
                             }                         
                        }
                     }   
                 }
         }
     console.log(compatibles1);  
}

const estadosColapsados = (compp,qqs,Finn,Trass,nuuum) =>{
    let compatibles1 = compp;
    let Qs1 = qqs;
    let Finale1 = Finn;
    let Trans1 = Trass;
    let numAlf1 = nuuum;
    
    let colapso = [];
    for(let i=0;i<Qs1.length;i++){
        if(Finale1[Number.parseInt(Trans1[i].charAt(1))]==true){
            colapso[i]=0;
        }
        else{
            colapso[i]=1;
        }
    }
    let colapso2 = [];
    let cont=0;
    let conta=0;
    console.log(Finale1.length);
    for(let i=0;i<Finale1.length;i++){
        for(let j=0;j<Finale1.length;j++){
            if(i<j){
                for(let a=0;a<numAlf1;a++){
                    if(colapso2[i]==null){
                        if(colapso[(i*numAlf1)+a]==colapso[(j*numAlf1)+a]){
                            if(conta==numAlf1-1){      
                                colapso2[i]=cont;
                                colapso2[j]=cont;
                                cont++;
                                conta=0;
                            }
                            conta++;
                        }
                    }                 
                } 
                conta=0;
            }
        }
        if(colapso2[i]==null){
            colapso2[i]=cont;
            cont++;
        }
    }

    for(let i=0;i<Finale1.length;i++){
        for(let j=0;j<Finale1.length;j++){
            if(compatibles1[i][j]==0){
                for(let a=0;a<numAlf1;a++){
                    if(colapso2[Number.parseInt(Trans1[(i*numAlf1)+a].charAt(1))] != colapso2[Number.parseInt(Trans1[(j*numAlf1)+a].charAt(1))]){
                        compatibles1[i][j]=1;
                    }
                }
            }
        }
    }

    console.log(compatibles1);
    console.log(colapso);
    console.log(colapso2);
}

const simplificadoAFD = (compatibles1,Finale1,Qs1,Trans1,Alf1,numAlf1,Inicio1,Qfinal) => {
    let automataSimpi = new automata;
    let aux_compatibles = compatibles1;
    let auxFinale = Finale1;
    let auxQs = Qs1;
    let auxTrans = Trans1;
    let auxAlf = Alf1;
    let auxQFinale = Qfinal;

    for(let i=0;i<auxFinale.length;i++){
        for(let j=0;j<auxFinale.length;j++){
            if(aux_compatibles[i][j]==0){
                if(i==Inicio1){
                    for(let x=0;x<auxQs.length;x++){
                        if(numAlf1<10){
                            if(Number.parseInt(auxTrans[x].charAt(1))==j){
                                for(let a=0;a<numAlf1;a++){
                                    auxTrans[x]=auxQs[(i*numAlf1)+a];
                                    auxQs[(j*numAlf1)+a]=null;
                                    auxFinale[j]=null;
                                    auxQFinale[j]=null;
                                }  
                            }
                        }
                        else{
                            if(Number.parseInt(auxTrans[x].charAt(1))*10+Number.parseInt(auxTrans[x].charAt(2))==j){
                                for(let a=0;a<numAlf1;a++){
                                    auxTrans[x]=auxQs[(i*numAlf1)+a];
                                    auxQs[(j*numAlf1)+a]=null;
                                    auxFinale[j]=null;
                                    auxQFinale[j]=null;
                                }  
                            }
                        }   
                    }
                }   
                else{
                    for(let x=0;x<auxQs.length;x++){
                        if(numAlf1<10){
                            if(Number.parseInt(auxTrans[x].charAt(1))==i){
                                for(let a=0;a<numAlf1;a++){
                                    auxTrans[x]=auxQs[(j*numAlf1)+a];
                                    auxQs[(i*numAlf1)+a]=null;
                                    auxFinale[i]=null;
                                    auxQFinale[i]=null;                           
                                }  
                            }
                        }
                        else{
                            if(Number.parseInt(auxTrans[x].charAt(1)*10+Number.parseInt(auxTrans[x].charAt(2)))==i){
                                for(let a=0;a<numAlf1;a++){
                                    auxTrans[x]=auxQs[(j*numAlf1)+a];
                                    auxQs[(i*numAlf1)+a]=null;
                                    auxFinale[i]=null; 
                                    auxQFinale[i]=null;                               
                                }  
                            }
                        }
                    }
                } 
            }
        }
    }

    let cont=0;

    for(let i=0;i<Qs1.length;i++){
        if(auxQs[i]!=null){
            automataSimpi.k[cont]=auxQs[i];
            automataSimpi.s[cont]=auxAlf[i];
            automataSimpi.g[cont]=auxTrans[i];
            cont++;
        }
    }
    console.log(auxFinale.length);
    cont=0;
    for(let i=0;i<Finale1.length;i++){
        if(auxFinale[i]!=null){
            automataSimpi.f[cont]=auxFinale[i];
            automataSimpi.qf[cont]=auxQFinale[i];
            cont++;
        }
    }
    automataSimpi.i=Inicio1;
    console.log(automataSimpi);
    return(automataSimpi);
}

const simplificar = (comp,fin_aux,tran_aux,numAlf_aux,qq_aux,alf_aux,Inicio2,Qfinal) => {
    estadosCompatibles(comp,fin_aux);
    estadosDistinguibles(comp,fin_aux,tran_aux,numAlf_aux);
    estadosColapsados(comp,qq_aux,fin_aux,tran_aux,numAlf_aux);
    return simplificadoAFD(comp,fin_aux,qq_aux,tran_aux,alf_aux,numAlf_aux,Inicio2,Qfinal);
}

const complemento = (automata_aux) => {
    let compFinale = [];

    for(let cv=0;cv<automata_aux.length;cv++){
        if(automata_aux[cv]==true){
            compFinale[cv]=false;
        }
        else{
            compFinale[cv]=true;
        }
    }
    console.log(compFinale);
    return compFinale;
}

const union = (auxU1,auxU2) => {
    automataUnionAux.k = [];
    automataUnionAux.s = [];
    automataUnionAux.g = [];
    automataUnionAux.f = [];
    automataUnionAux.qf = [];
    automataUnionAux.i = null;

    let newQ = [];
    let newTrans = [];
    let newRec = [];
    let newFinale = [];
    let newQFinale = [];
    let newInicio = 0;

    let largo = auxU1.qf.length;
    let largo2 = auxU2.qf.length;

    let nivel_final = 0;

    for(let klh =0; klh<auxU1.k.length; klh++){
        newQ.push(`q${Number.parseInt(auxU1.k[klh].charAt(1))+1}`);
        if(klh==auxU1.k.length-1){
            nivel_final = Number.parseInt(auxU1.k[klh].charAt(1))+1;
            console.log(nivel_final);
        }
    }
    for(let klp =0; klp<auxU2.k.length; klp++){
        newQ.push(`q${Number.parseInt(auxU2.k[klp].charAt(1))+(nivel_final+1)}`);
    }

    for(let dvm=0; dvm<auxU1.s.length; dvm++){
        newTrans.push(auxU1.s[dvm]);
    }
    for(let dvi=0; dvi<auxU2.s.length; dvi++){
        newTrans.push(auxU2.s[dvi]);
    }

    for(let dvo=0; dvo<auxU1.g.length; dvo++){
        newRec.push(`q${Number.parseInt(auxU1.g[dvo].charAt(1))+1}`);
    }
    for(let dvj=0; dvj<auxU2.g.length; dvj++){
        newRec.push(`q${Number.parseInt(auxU2.g[dvj].charAt(1))+(nivel_final+1)}`);
    }

    for(let dva=0; dva<largo; dva++){
        newFinale.push(auxU1.f[dva]);
    }
    for(let dvn=0; dvn<largo2; dvn++){
        newFinale.push(auxU2.f[dvn]);
    }

    for(let dvg=0; dvg<newQ.length; dvg=dvg+2){
        newQFinale.push(newQ[dvg]);
    }

    let inicialE1 = Number.parseInt(auxU1.i)+1;
    let inicialE2 = Number.parseInt(auxU2.i)+nivel_final+1;

    newQ.push('q0');
    newQ.push('q0');

    newTrans.push('E');
    newTrans.push('E');

    newRec.push(`q${inicialE1}`);
    newRec.push(`q${inicialE2}`);

    newQFinale.push('q0');
    newFinale.push(false);

    console.log(newQ);
    console.log(newTrans);
    console.log(newRec);
    console.log(newFinale);
    console.log(newQFinale);
    console.log(`Estado Inicial: q${newInicio}`);

    automataUnionAux.k = newQ;
    automataUnionAux.s = newTrans;
    automataUnionAux.g = newRec;
    automataUnionAux.f = newFinale;
    automataUnionAux.qf = newQFinale;
    automataUnionAux.i = newInicio;
    Largo = largo;

    return automataUnionAux;
}

const concatenacion = (aux1,aux2) => {
    let newiQ = [];
    let newiTrans = [];
    let newiRec = [];
    let newiFinale = [];
    let newiQFinale = [];
    let newiInicio = aux1.i;

    let largoi = aux1.qf.length;
    let largoi2 = aux2.qf.length;

    let nivel_final = 0;

    for(let klh =0; klh<aux1.k.length; klh++){
        newiQ.push(`q${Number.parseInt(aux1.k[klh].charAt(1))}`);
        if(klh==aux1.k.length-1){
            nivel_final = Number.parseInt(aux1.k[klh].charAt(1));
            console.log(nivel_final);
        }
    }
    for(let klp =0; klp<aux2.k.length; klp++){
        newiQ.push(`q${Number.parseInt(aux2.k[klp].charAt(1))+(nivel_final+1)}`);
    }

    for(let dvm=0; dvm<aux1.s.length; dvm++){
        newiTrans.push(aux1.s[dvm]);
    }
    for(let dvi=0; dvi<aux2.s.length; dvi++){
        newiTrans.push(aux2.s[dvi]);
    }

    for(let dvo=0; dvo<aux1.g.length; dvo++){
        newiRec.push(`q${Number.parseInt(aux1.g[dvo].charAt(1))}`);
    }
    for(let dvj=0; dvj<aux2.g.length; dvj++){
        newiRec.push(`q${Number.parseInt(aux2.g[dvj].charAt(1))+(nivel_final+1)}`);
    }

    for(let dva=0; dva<largoi; dva++){
        newiFinale.push(aux1.f[dva]);
    }
    for(let dvn=0; dvn<largoi2; dvn++){
        newiFinale.push(aux2.f[dvn]);
    }

    for(let dvg=0; dvg<newiQ.length; dvg=dvg+2){
        newiQFinale.push(newiQ[dvg]);
    }

    console.log(newiQ);
    console.log(newiTrans);
    console.log(newiRec);
    console.log(newiFinale);
    console.log(newiQFinale);
    console.log(`Estado Inicial: q${newiInicio}`);

    let inicial2 = Number.parseInt(aux2.i)+largoi+1;

    for(let afg=0;afg<largoi;afg++){
        if(aux1.f[afg]==true){
            newiQ.push(newiQFinale[afg]);
            newiTrans.push('E');
            newiRec.push(`q${inicial2}`);
        }
    }

    for(let hjk=0;hjk<largoi;hjk++){
        if(newiFinale[hjk]==true){
            newiFinale[hjk]=false;
        }
    }

    console.log('------------------------------');
    console.log(newiQ);
    console.log(newiTrans);
    console.log(newiRec);
    console.log(newiFinale);
    console.log(newiQFinale);
    console.log(`Estado Inicial: q${newiInicio}`);

    automataConcaAux.k = newiQ;
    automataConcaAux.s = newiTrans;
    automataConcaAux.g = newiRec;
    automataConcaAux.f = newiFinale;
    automataConcaAux.qf = newiQFinale;
    automataConcaAux.i = newiInicio;
    Largo = largoi;

    return automataConcaAux;
}

const interseccion = (auxI1,auxI2) => {
    console.log(auxI1);
    console.log(auxI2);

    let auxaf1=[];
    let auxaf2=[];

    for(let gcs=0;gcs<auxI1.f.length;gcs++){
        if(auxI1.f[gcs]==true){
            auxaf1[gcs]=false;
        }
        else{
            auxaf1[gcs]=true;
        }
    }

    comple1.k=auxI1.k;
    comple1.s=auxI1.s;
    comple1.g=auxI1.g;
    comple1.f=auxaf1;
    comple1.qf=auxI1.qf;
    comple1.i=auxI1.i;


    for(let gcp=0;gcp<auxI2.f.length;gcp++){
        if(auxI2.f[gcp]==true){
            auxaf2[gcp]=false;
        }
        else{
            auxaf2[gcp]=true;
        }
    }

    comple2.k=auxI2.k;
    comple2.s=auxI2.s;
    comple2.g=auxI2.g;
    comple2.f=auxaf2;
    comple2.qf=auxI2.qf;
    comple2.i=auxI2.i;

    console.log(comple1);
    console.log(comple2);

    //-----------------------------------------------------------
    let auxU1 = comple1;
    let auxU2 = comple2;

    let newQ = [];
    let newTrans = [];
    let newRec = [];
    let newFinale = [];
    let newQFinale = [];
    let newInicio = 0;

    let largo = comple1.qf.length;
    let largo2 = comple2.qf.length;

    let nivel_final = 0;

    for(let klh =0; klh<auxU1.k.length; klh++){
        newQ.push(`q${Number.parseInt(auxU1.k[klh].charAt(1))+1}`);
        if(klh==auxU1.k.length-1){
            nivel_final = Number.parseInt(auxU1.k[klh].charAt(1))+1;
            console.log(nivel_final);
        }
    }
    for(let klp =0; klp<auxU2.k.length; klp++){
        newQ.push(`q${Number.parseInt(auxU2.k[klp].charAt(1))+(nivel_final+1)}`);
    }

    for(let dvm=0; dvm<auxU1.s.length; dvm++){
        newTrans.push(auxU1.s[dvm]);
    }
    for(let dvi=0; dvi<auxU2.s.length; dvi++){
        newTrans.push(auxU2.s[dvi]);
    }

    for(let dvo=0; dvo<auxU1.g.length; dvo++){
        newRec.push(`q${Number.parseInt(auxU1.g[dvo].charAt(1))+1}`);
    }
    for(let dvj=0; dvj<auxU2.g.length; dvj++){
        newRec.push(`q${Number.parseInt(auxU2.g[dvj].charAt(1))+(nivel_final+1)}`);
    }

    for(let dva=0; dva<largo; dva++){
        newFinale.push(auxU1.f[dva]);
    }
    for(let dvn=0; dvn<largo2; dvn++){
        newFinale.push(auxU2.f[dvn]);
    }

    for(let dvg=0; dvg<newQ.length; dvg=dvg+2){
        newQFinale.push(newQ[dvg]);
    }

    let inicialE1 = Number.parseInt(auxU1.i)+1;
    let inicialE2 = Number.parseInt(auxU2.i)+nivel_final+1;

    newQ.push('q0');
    newQ.push('q0');

    newTrans.push('E');
    newTrans.push('E');

    newRec.push(`q${inicialE1}`);
    newRec.push(`q${inicialE2}`);

    newQFinale.push('q0');
    newFinale.push(false);

    console.log(newQ);
    console.log(newTrans);
    console.log(newRec);
    console.log(newFinale);
    console.log(newQFinale);
    console.log(`Estado Inicial: q${newInicio}`);

    unionComple.k = newQ;
    unionComple.s = newTrans;
    unionComple.g = newRec;
    unionComple.f = newFinale;
    unionComple.qf = newQFinale;
    unionComple.i = newInicio;
    Largo = largo;

    console.log(unionComple);

    haceralfabeto(unionComple);
    llenar(unionComple);
    llenarTrans(unionComple);
    auxAfnd = convertirAFND(Estio, Tranco);
    automataEquiInter=recuperarAutoma(auxAfnd);
    
    console.log(automataEquiInter);

    //------------------------------------------------------

    let auxaf3=[];

    for(let gc=0;gc<automataEquiInter.f.length;gc++){
        if(automataEquiInter.f[gc]==true){
            auxaf3[gc]=false;
        }
        else{
            auxaf3[gc]=true;
        }
    }

    console.log(auxaf3);

    automataEquiInter.f=auxaf3;

    console.log(automataEquiInter);


}

//Inicialización de Plogs
//const concatenacion = (aux1,aux2) => {
var storage = new plog.storages.LocalStorage({maxSize: 2000})

plog.useStorage(storage);

const verplogs = () =>{
    console.log(storage.getEvents());
}
const limpiar = () =>{
    storage.clear();
  }
//función para descargar archivo
const DescargarLogs = () =>{
    var aux = "";
    var events = storage.getEvents();
    for (var i = 0; i < events.length - 1; i++) {
        aux = aux + JSON.stringify(events[i]) + "\n";
    }
    var element = document.createElement("a");
    element.setAttribute("href","data:events/plain;charset=utf-8," + encodeURIComponent(aux));
    element.setAttribute("download", "log.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
  document.getElementById("download").addEventListener(
    "click",
    function() {
      DescargarLogs();
    },
    false
  );


//Eventos
btn0.addEventListener('click', (evt) => {
    
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Debe agregar un valor entre 1 y 26 primero");
        plog.error('Se agrego un valor invalido en el alfabeto.');
        return 0;
    }
    if(numAlf<0){
        alert("Debe agregar un valor entre 1 y 26");
        plog.error('Se agrego un valor invalido en el alfabeto.');
        return 0;
    }
    if(numAlf>26){
        alert("Debe agregar un valor entre 1 y 26");
        plog.error('Se agrego un valor invalido en el alfabeto.');
        return 0;
    }
    console.log(numAlf);
    plog.info('Alfabeto creado con un tamaño: '+ numAlf);

});

// Automata 1
btn1.addEventListener('click', (evt) => {
    btn2.style.display="block";    
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Primero debe agregar el alfabeto.");
        plog.error('El alfabeto no ha sido inicializado.');
        return 0;
    }
    numAlf2 = document.getElementById("num1").value;
    if(numAlf2<0){
        alert("Debe agregar un valor entre 1 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFD del Automata 1.');
        return 0;
    }
    if(numAlf2>10){
        alert("Debe agregar un valor entre 1 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFD del Automata 1.');
        return 0;
    }
    document.getElementById("indique").innerHTML = '<h3> Indique las transacciones </h3>'
    imprimirInputsQ();
    imprimirInputsAlf();
    imprimirSelectRec();
    document.getElementById("inicial").innerHTML = 'Seleccione su estado inicial';
    agregarRad();
    document.getElementById("finales").innerHTML = 'Seleccione sus estados finales';
    agregarCheck();
    //botón enviar afd
    plog.info('Cantidad de conjuntos identificadores para automata 1(AFD): '+ txtNumInput[0].value);
});

btn2.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Primero debe agregar un valor entre 1 y 26 en el alfabeto");
        plog.error('El alfabeto no ha sido inicializado.');
        return 0;
    }
    if(numAlf<0){
        alert("Debe agregar un valor entre 1 y 26");
        plog.error('Se agrego un valor invalido en el Alfabeto.');
        return 0;
    }
    if(numAlf>26){
        alert("Debe agregar un valor entre 1 y 26");
        plog.error('Se agrego un valor invalido en el Alfabeto.');
        return 0;
    }
    document.getElementById("tipo").disabled=true;   
    guardarQs();
    guardarAlf();
    guardarSelec();
    guardarCheck();
    guardarRad();
    plog.info('Se creo automata1 (AFD) con los valores: ');
    plog.info(automata1);
    imgAuAfd.setAttribute('src',`${crearAu(automata1.k,automata1.g,automata1.s,automata1.qf,automata1.f,automata1.i)}`);
    imgAuEqui.setAttribute('src',`${crearAu(automata1.k,automata1.g,automata1.s,automata1.qf,automata1.f,automata1.i)}`);
    automataSimplificado1 = simplificar(compatibles,automata1.f,automata1.g,numAlf,automata1.k,automata1.s,automata1.i,automata1.qf);
    imgAuSimp.setAttribute('src',`${crearAu(automataSimplificado1.k,automataSimplificado1.g,automataSimplificado1.s,automataSimplificado1.qf,automataSimplificado1.f,automataSimplificado1.i)}`);
    imgAuCom.setAttribute('src',`${crearAu(automataSimplificado1.k,automataSimplificado1.g,automataSimplificado1.s,automataSimplificado1.qf,complemento(automataSimplificado1.f),automataSimplificado1.i)}`);

});

//Afnd 1
btn4.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Primero debe agregar el alfabeto.");
        plog.error('El alfabeto no ha sido inicializado.');
        return 0;
    }
    numAlf2 = document.getElementById("num1i").value;
    if(numAlf2<2){
        alert("Debe agregar un valor entre 2 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFND del Automata 1.');
        return 0;
    }
    if(numAlf2>10){
        alert("Debe agregar un valor entre 2 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFND del Automata 1.');
        return 0;
    }
    imprimirInputsQAfnd();
    imprimirInputNumQAfnd();
    botont5.style.display = 'block'
    //botón enviar afnd   
     plog.info('Cantidad de conjuntos identificadores para automata 1(AFND): '+ txtNumInputi[0].value);

})

btn5.addEventListener('click', (evt) => {
    btn6.style.display="block";
    plog.info('Cantidad de transiciones por estado para el automata 1(AFND): ');
    document.getElementById("titulo-transAfnd").innerHTML = 'Indique las Transacciones'
    
    if( guardarInputNumQAfnd()==0){
        return 0;
    }else{
        
   
    plog.info(numTransAfnd);
    imprimirInputsQAfndTrans();
    imprimirInputsAlfAfndTrans();
    imprimirSelectRecAfnd();
    document.getElementById("inicial-Afnd").innerHTML = 'Seleccione su estado inicial';
    agregarRadAfnd();
    document.getElementById("finales-Afnd").innerHTML = 'Seleccione sus estados finales';
    agregarCheckAfnd();
}
})

btn6.addEventListener('click', (evt) => {
     numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Debe agregar un valor entre 1 y 26 primero");
        return 0;
    }
    if(numAlf<0){
        alert("Debe agregar un valor entre 1 y 26");
        return 0;
    }
    if(numAlf>26){
        alert("Debe agregar un valor entre 1 y 26");
        return 0;
    }
    document.getElementById("tipo").disabled=true;
    guardarInputsQAfndTrans();
    guardarInputsAlfAfndTrans();
    guardarSelectRecAfnd();
    guardarCheckAfnd();
    guardarRadAfnd();
    haceralfabeto(automataAfnd1);
    llenar(automataAfnd1);
    llenarTrans(automataAfnd1);
    auxAfnd = convertirAFND(Estio, Tranco);
    console.log(auxAfnd[0]); // ----> Estados Finales 
    console.log(auxAfnd[1]); // ----> Transacciones
    plog.info('Se creo automata1 (AFND) con los valores: ');
    plog.info(automataAfnd1);
    automataEqui1=recuperarAutoma(auxAfnd);
    console.log(automataEqui1);
    imgAuAfd.setAttribute('src',`${crearAu(automataAfnd1.k,automataAfnd1.g,automataAfnd1.s,automataAfnd1.qf,automataAfnd1.f,automataAfnd1.i)}`);
    imgAuEqui.setAttribute('src',`${crearAu(automataEqui1.k,automataEqui1.g,automataEqui1.s,automataEqui1.qf,automataEqui1.f,automataEqui1.i)}`);
    automataSimplificado1=simplificar(compatibles,automataEqui1.f,automataEqui1.g,numAlf,automataEqui1.k,automataEqui1.s,automataEqui1.i,automataEqui1.qf);
    imgAuSimp.setAttribute('src',`${crearAu(automataSimplificado1.k,automataSimplificado1.g,automataSimplificado1.s,automataSimplificado1.qf,automataSimplificado1.f,automataSimplificado1.i)}`);
    imgAuCom.setAttribute('src',`${crearAu(automataSimplificado1.k,automataSimplificado1.g,automataSimplificado1.s,automataSimplificado1.qf,complemento(automataSimplificado1.f),automataSimplificado1.i)}`);
})

//Automata 2
btn7.addEventListener('click', (evt) => {
    btn8.style.display="block";
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Primero debe agregar el alfabeto.");
        plog.error('El alfabeto no ha sido inicializado.');
        return 0;
    }
    numAlf2 = document.getElementById("num1-au2").value;
    if(numAlf2<2){
        alert("Debe agregar un valor entre 2 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFD del Automata 2.');
        return 0;
    }
    if(numAlf2>10){
        alert("Debe agregar un valor entre 2 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFD del Automata 2.');
        return 0;
    }
    document.getElementById("tipo-au2").disabled=true;
    document.getElementById("indique-au2").innerHTML = '<h3> Indique las transacciones </h3>'
    imprimirInputsQAu2();
    imprimirInputsAlfAu2();
    imprimirSelectRecAu2();
    document.getElementById("inicial-au2").innerHTML = 'Seleccione su estado inicial';
    agregarRadAu2();
    document.getElementById("finales-au2").innerHTML = 'Seleccione sus estados finales';
    agregarCheckAu2();
    plog.info('Cantidad de conjuntos identificadores para automata 2(AFD): '+ txtNumInput2[0].value);
})

btn8.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Primero debe agregar un valor entre 1 y 26 en el alfabeto");
        plog.error('El alfabeto no ha sido inicializado.');
        return 0;
    }
    if(numAlf<0){
        alert("Debe agregar un valor entre 1 y 26");
        plog.error('Se agrego un valor invalido en el Alfabeto.');
        return 0;
    }
    if(numAlf>26){
        alert("Debe agregar un valor entre 1 y 26");
        plog.error('Se agrego un valor invalido en el Alfabeto.');
        return 0;
    }
    guardarQsAu2();
    guardarAlfAu2();
    guardarSelecAu2();
    guardarRadAu2();
    guardarCheckAu2();
    plog.info('Se creo automata2 (AFD) con los valores: ');
    plog.info(automata2);
    imgAuAfdAu2.setAttribute('src',`${crearAu(automata2.k,automata2.g,automata2.s,automata2.qf,automata2.f,automata2.i)}`);
    imgAuEquiAu2.setAttribute('src',`${crearAu(automata2.k,automata2.g,automata2.s,automata2.qf,automata2.f,automata2.i)}`);
    automataSimplificado2 = simplificar(compatibles,automata2.f,automata2.g,numAlf,automata2.k,automata2.s,automata2.i,automata2.qf);
    imgAuSimpAu2.setAttribute('src',`${crearAu(automataSimplificado2.k,automataSimplificado2.g,automataSimplificado2.s,automataSimplificado2.qf,automataSimplificado2.f,automataSimplificado2.i)}`);
    imgAuComAu2.setAttribute('src',`${crearAu(automataSimplificado2.k,automataSimplificado2.g,automataSimplificado2.s,automataSimplificado2.qf,complemento(automataSimplificado2.f),automataSimplificado2.i)}`);
})

//Afnd 2
btn9.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Primero debe agregar el abecedario.");
        plog.error('El alfabeto no ha sido inicializado.');
        return 0;
    }
    numAlf2 = document.getElementById("num1i-au2").value;
    if(numAlf2<2){
        alert("Debe agregar un valor entre 2 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFND del Automata 2.');
        return 0;
    }
    if(numAlf2>10){
        alert("Debe agregar un valor entre 2 y 10");
        plog.error('Se agrego un valor invalido para los identificadores AFND del Automata 2.');
        return 0;
    }
    imprimirInputsQAfndAu2();
    imprimirInputNumQAfndAu2();
    botont5Au2.style.display = 'block'
    plog.info('Cantidad de conjuntos identificadores para automata 2(AFND): '+ txtNumInputi2[0].value);
})

btn10.addEventListener('click', (evt) => {
    plog.info('Cantidad de transiciones por estado para el automata 2(AFND): ');
    btn11.style.display="block";
    document.getElementById("titulo-transAfnd-au2").innerHTML = 'Indique las Transacciones'
     
    if(guardarInputNumQAfndAu2()==0){
        return 0;
    }
    else{
    document.getElementById("tipo-au2").disabled=true;
    plog.info(numTransAfndAu2)
    imprimirInputsQAfndTransAu2();
    imprimirInputsAlfAfndTransAu2();
    imprimirSelectRecAfndAu2();
    document.getElementById("inicial-Afnd-au2").innerHTML = 'Seleccione su estado inicial';
    agregarRadAfndAu2();
    document.getElementById("finales-Afnd-au2").innerHTML = 'Seleccione sus estados finales';
    agregarCheckAfndAu2();
}
})

btn11.addEventListener('click', (evt) => {
    numAlf = document.getElementById("alfabeto").value;
    if(numAlf==""){
        alert("Debe agregar un valor entre 1 y 26 primero");
        return 0;
    }
    if(numAlf<0){
        alert("Debe agregar un valor entre 1 y 26");
        return 0;
    }
    if(numAlf>26){
        alert("Debe agregar un valor entre 1 y 26");
        return 0;
    }
    guardarInputsQAfndTransAu2();
    guardarInputsAlfAfndTransAu2();
    guardarSelectRecAfndAu2();
    guardarCheckAfndAu2();
    guardarRadAfndAu2();
    haceralfabeto(automataAfnd2);
    llenar(automataAfnd2);
    llenarTrans(automataAfnd2);
    auxAfnd = convertirAFND(Estio, Tranco);
    console.log(auxAfnd[0]); // ----> Estados Finales Morapoop
    console.log(auxAfnd[1]); // ----> Transacciones
    plog.info('Se creo automata1 (AFND) con los valores: ');
    plog.info(automataAfnd1);
    automataEqui2=recuperarAutoma(auxAfnd);
    console.log(automataEqui2);
    imgAuAfdAu2.setAttribute('src',`${crearAu(automataAfnd2.k,automataAfnd2.g,automataAfnd2.s,automataAfnd2.qf,automataAfnd2.f,automataAfnd2.i)}`);
    imgAuEquiAu2.setAttribute('src',`${crearAu(automataEqui2.k,automataEqui2.g,automataEqui2.s,automataEqui2.qf,automataEqui2.f,automataEqui2.i)}`);
    automataSimplificado2=simplificar(compatibles,automataEqui2.f,automataEqui2.g,numAlf,automataEqui2.k,automataEqui2.s,automataEqui2.i,automataEqui2.qf);
    imgAuSimpAu2.setAttribute('src',`${crearAu(automataSimplificado2.k,automataSimplificado2.g,automataSimplificado2.s,automataSimplificado2.qf,automataSimplificado2.f,automataSimplificado2.i)}`);
    imgAuComAu2.setAttribute('src',`${crearAu(automataSimplificado2.k,automataSimplificado2.g,automataSimplificado2.s,automataSimplificado2.qf,complemento(automataSimplificado2.f),automataSimplificado2.i)}`);
})

//Boton Funciones Conjuntas
btn12.addEventListener('click', (evt) => {
     let contador = 0;
     if(automata1.k.length>0){
         contador++;
     }
     if(automataAfnd1.k.length>0){
        contador++;
    } 
    if(automata2.k.length>0){
        contador++;
    } 
    if(automataAfnd2.k.length>0){
        contador++;
    } 
    console.log(contador);
    if(contador == 2){
        automataUnion=union(automataSimplificado1,automataSimplificado2);
        imgAuUnion.setAttribute('src',`${crearAu(automataUnion.k,automataUnion.g,automataUnion.s,automataUnion.qf,automataUnion.f,automataUnion.i)}`);
        plog.info('Se crea la imagen de la Union de Automatas');
        automataConca=concatenacion(automataSimplificado1,automataSimplificado2);
        imgAuConca.setAttribute('src',`${crearAu(automataConca.k,automataConca.g,automataConca.s,automataConca.qf,automataConca.f,automataConca.i)}`);
        plog.info('Se crea la imagen de la Concatenacion de Automatas');
        interseccion(automataSimplificado1,automataSimplificado2);
        imgAuInter.setAttribute('src',`${crearAu(automataEquiInter.k,automataEquiInter.g,automataEquiInter.s,automataEquiInter.qf,automataEquiInter.f,automataEquiInter.i)}`);
        plog.info('Se crea la imagen de la Interseccion de Automatas');
        
        haceralfabeto(automataUnion);
        llenar(automataUnion);
        llenarTrans(automataUnion);
        auxAfnd = convertirAFND(Estio, Tranco);
        console.log(auxAfnd[0]); // ----> Estados Finales Mp
        console.log(auxAfnd[1]); // ----> Transacciones
        automataEqui3=recuperarAutoma(auxAfnd);
        console.log(automataEqui3);
        imgAuUnionequi.setAttribute('src',`${crearAu(automataEqui3.k,automataEqui3.g,automataEqui3.s,automataEqui3.qf,automataEqui3.f,automataEqui3.i)}`);
        plog.info('Se crea la imagen de la Equivalencia de la Union de Automatas');
        automataSimplificado5=simplificar(compatibles,automataEqui3.f,automataEqui3.g,numAlf,automataEqui3.k,automataEqui3.s,automataEqui3.i,automataEqui3.qf);
        imgAuUnionsimp.setAttribute('src',`${crearAu(automataSimplificado5.k,automataSimplificado5.g,automataSimplificado5.s,automataSimplificado5.qf,automataSimplificado5.f,automataSimplificado5.i)}`);
        plog.info('Se crea la imagen de la Simplificacion de la Union de Automatas');

        haceralfabeto(automataConca);
        llenar(automataConca);
        llenarTrans(automataConca);
        auxAfnd = convertirAFND(Estio, Tranco);
        console.log(auxAfnd[0]); // ----> Estados Finales Mp
        console.log(auxAfnd[1]); // ----> Transacciones
        automataEqui4=recuperarAutoma(auxAfnd);
        console.log(automataEqui4);
        imgAuConcaequi.setAttribute('src',`${crearAu(automataEqui4.k,automataEqui4.g,automataEqui4.s,automataEqui4.qf,automataEqui4.f,automataEqui4.i)}`);
        plog.info('Se crea la imagen de la Equivalencia de la Concatenacion de Automatas');
        automataSimplificado6=simplificar(compatibles,automataEqui4.f,automataEqui4.g,numAlf,automataEqui4.k,automataEqui4.s,automataEqui4.i,automataEqui4.qf);
        imgAuConcasimp.setAttribute('src',`${crearAu(automataSimplificado6.k,automataSimplificado6.g,automataSimplificado6.s,automataSimplificado6.qf,automataSimplificado6.f,automataSimplificado6.i)}`);
        plog.info('Se crea la imagen de la Simplificacion de la Concatenacion de Automatas');
        automataSimplificado7=simplificar(compatibles,automataEquiInter.f,automataEquiInter.g,numAlf,automataEquiInter.k,automataEquiInter.s,automataEquiInter.i,automataEquiInter.qf);
        imgAuIntersimp.setAttribute('src',`${crearAu(automataSimplificado7.k,automataSimplificado7.g,automataSimplificado7.s,automataSimplificado7.qf,automataSimplificado7.f,automataSimplificado7.i)}`);       
        plog.info('Se crea la imagen de la Simplificacion de la Interseccion de Automatas');
        
    } 
    else{
        alert("Para utilizar este botón, primero debe crear dos automatas"); 
        plog.error("No se han creado los 2 automatas necesarios.");
        return 0;
    }

})