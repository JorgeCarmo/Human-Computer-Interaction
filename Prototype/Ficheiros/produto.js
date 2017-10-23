var preco_base = 0;
var quant = 1;
var x = 0;
var sglm=new Array();
	
//PAUSE between messages in milliseconds: 1000=1s; set to your own; 
var bpause = 500;
function subir1() {
	if (quant == 9)
		x = 1;
	else
		quant = quant + 1;
	var num = (quant * preco_base).toFixed(2); 
	_("preco").innerHTML = num.toString() + "€";
	_("quantidade_q").innerHTML = quant;
}
function descer1() {
	if (quant == 1)
		x= 1;
	else
		quant = quant - 1;
	var num = (quant * preco_base).toFixed(2); 
	_("preco").innerHTML = num.toString() + "€";
	_("quantidade_q").innerHTML = quant;
}
function onLoadProd(){
	
	_('texto_cima').innerHTML = getCookie("nome_producto");	
	/*sglm[0] = getCookie("nome_producto");	
	if (sglm[0].length < 13)
		bpause = 500000;
	else
		bpause = 500;
*/
	preco_base = parseFloat(getCookie("preco")).toFixed(2); ;
	_("preco").innerHTML 	   = preco_base.toString() + "€";
}

function changeLinkProd1(){
	setCookie("preco_tot",_("preco").innerHTML,1);
	setCookie('actual_quantidade',_("quantidade_q").innerHTML,1);
	setCookie('actual_preco',_("preco").innerHTML,1);
	faz_descer("confirmar.html");
} 


function goUp(){
	faz_subir('products.html');
}
