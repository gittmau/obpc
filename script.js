//menu mobile

var btnMenu = document.querySelector('#hamburguinho')
var naveg = document.querySelector('#menu')

var btnFechar = document.querySelector('#btn-fechar')


function mostrarMenu(){

	naveg.style.transform = 'translateX(0%)'
	naveg.style.transition = '0.55s'
}


function esconderMenu(){

	naveg.style.transform = 'translateX(-100%)'
	naveg.style.transition = '0.55s'
}



btnMenu.addEventListener('click',mostrarMenu)

btnFechar.addEventListener('click',esconderMenu)


//Troca de Slide


var satual=1
var smax=3
var stmp=1500

function troca() {
	
	document.getElementById('filho1').style.visibility = 'hidden'
	document.getElementById('filho2').style.visibility = 'hidden' //Esconder todas as divs
	document.getElementById('filho3').style.visibility = 'hidden'

	document.getElementById('filho'+satual).style.visibility = 'visible' //Mostra uma div de cada vez
	satual= satual+1 // Variável preparada para receber atribuição

	 if(satual > smax){
	 	 satual = 1
	 }

}

function container(){
	document.getElementById('filho1').style.visibility = 'hidden'
	document.getElementById('filho2').style.visibility = 'hidden'
	document.getElementById('filho3').style.visibility = 'visible'

	 var tempo = setInterval(troca,stmp)
}