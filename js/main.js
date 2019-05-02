const btn=document.querySelector('button');
const codeBox=document.querySelector('.code');
const div=document.querySelector('div');

const charsInput=document.querySelector('#chars');
const codesNumberInput=document.querySelector('#codesNumber');
const charsNumberInput=document.querySelector('#charsNumber');

let chars='';
let codesNumber='';
let charsNumber='';

const charsChoice = ()=>{
    if(charsInput.value===''){
        charsInput.classList.add('borderEmptyInput');
        const divInfo = document.createElement('div');
        divInfo.textContent="Characters in the code must be filled out";
        codeBox.appendChild(divInfo);

    } else{
        chars=charsInput.value;
    }
}

const codesNumberChoice = ()=>{
    if (isNaN(codesNumberInput.value)) {
        codesNumberInput.classList.add('borderEmptyInput');
        const divInfo = document.createElement('div');
        divInfo.textContent="Number of code must be a number";
        codeBox.appendChild(divInfo);

     } else if (codesNumberInput.value===""){
        codesNumberInput.classList.add('borderEmptyInput');
        const divInfo = document.createElement('div');
        divInfo.textContent="Number of code must be filled out";
        codeBox.appendChild(divInfo);
     }
      else {
        codesNumber=codesNumberInput.value;
     }      
}

const charsNumberChoice = ()=>{
    if (isNaN(charsNumberInput.value)) {
        charsNumberInput.classList.add('borderEmptyInput');
        const divInfo = document.createElement('div');
        divInfo.textContent="Number of characters must be a number";
        codeBox.appendChild(divInfo);

     } else if (charsNumberInput.value===""){
        charsNumberInput.classList.add('borderEmptyInput');
        const divInfo = document.createElement('div');
        divInfo.textContent="Number of characters must be filled out";
        codeBox.appendChild(divInfo);

     }  else {
        charsNumber=charsNumberInput.value;
     }      
}

const codesGenerator=()=>{
    div.textContent="";
    charsInput.classList.remove('borderEmptyInput');
    codesNumberInput.classList.remove('borderEmptyInput');
    charsNumberInput.classList.remove('borderEmptyInput');

    charsChoice();
    codesNumberChoice();
    charsNumberChoice();

    for(let i=0; i<codesNumber; i++){
        let code = "";
        for (let i=0; i<charsNumber; i++){
            const index=Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        if(chars===''){
            const div = document.createElement('div');
            div.id="codeBox";
            div.textContent = '';
            codeBox.appendChild(div);

        } else {
            const div = document.createElement('div');
            div.id="codeBox";
            div.textContent = code;
            codeBox.appendChild(div);
        }
    }
        chars='';
        codesNumber='';
        charsNumber='';
}

btn.addEventListener('click', codesGenerator);