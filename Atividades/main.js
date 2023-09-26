//trazendo os elementos do HTML
const msg = document.getElementById("msg")
const info = document.getElementById("info")

//criando 'li' das frases
const fras = document.createElement("li")

//criando 'li' do horário e data
const hora = document.createElement("li")

//Criando a váriavel da hora e data local
const captura = new Date 

//Valor de 'hora'
hora.innerText=`hora`

//parametros
if(captura<12 && 5<captura)
    fras.innerHTML='Bom dia!'
else if(captura==12)
    fras.innerHTML='Hora do almoço!'
else if(captura<18 && 12<=captura)
    fras.innerHTML='Boa tarde!'
else if(captura>17)
    fras.innerHTML='Boa noite!'
else if(captura==0)
    fras.innerHTML='Não disse que ia dormir mais cedo hoje?'
else if(captura>0 && 6>captura)
    fras.innerHTML='Não está na netflix, está?'

//adicionando frase de horário
msg.appendChild(fras)

//Adicionando horário e data
InputDeviceInfo.appendChild(hora)