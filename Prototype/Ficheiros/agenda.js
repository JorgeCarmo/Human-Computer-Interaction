//var atividades = JSON.parse(localStorage["atividadesLocal"]);

function onLoadAgenda() { 
/*
	if (atividades.length != 0){
		_(divInicial).innerHTML="Adicionar";
	}
*/
	for (i = 0; i < atividades.length; i++) { 
  
		var newDiv = document.createElement("div"); 
		var newContent = document.createTextNode(atividades[i]); 
		newDiv.appendChild(newContent); //add the text node to the newly created div. 

		// add the newly created element and its content into the DOM 
		var currentDiv = document.getElementById("divInicial"); 
	  
		document.body.insert(newDiv, currentDiv); 

    }
 
}

function changeDia(numero){
	if (!foi_swipe) 
    {
        setCookie("diaCorrecto", numero, 1);
	   faz_descer('dia1.html');
    }
}

function addDia(dia){
	
slideIndex++;
  $('.center').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
	
}


function goUp(){
	setCookie('actual', 0, 1);
	
	faz_subir('main_menu.html');	
}
