var actual = 0;
var maximo = 0;
var anterior = 0;

var stores = {"Comidas": {	"imgs":["McDonalds_logo.png","Pizza_Hut_logo.png","pans_logo.png","Tasca_do_Manel_logo.png"],
							"nomes":["McDonnald's","Pizza Hut","Pans & Company","Tasca do Manel"]},
	      "Bebidas": {		"imgs":["McDonalds_logo.png","Pizza_Hut_logo.png","pans_logo.png","Tasca_do_Manel_logo.png"],
							"nomes":["McDonnald's","Pizza Hut","Pans & Company","Tasca do Manel"]	 
			 }
};

var tipo ="";
var imgs  = [];
var nomes = [];


var sglm=new Array();
	
//PAUSE between messages in milliseconds: 1000=1s; set to your own; 
var bpause = 500; 
	
function onLoadLoja(){
		var owl = $('.owl-carousel');
	owl.owlCarousel();
	tipo = getCookie("tipo");
	imgs = stores[tipo]["imgs"];
	nomes = stores[tipo]["nomes"];
	actual = parseInt(getCookie("actual"));
    drone_num_exist = parseInt(getCookie("drones"));
    if (drone_num_exist > 0){
        imgs.push("../encomendas.png");
        nomes.push("Ver Estado Encomendas");
    }
    maximo =  nomes.length;
	if (actual == 0)
		anterior = maximo-1;
	else 
		anterior = actual -1 ;
	str_imagens = "./imagens/";
		
	owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="changeLinkLoja('+ (0) +');" class="img" id="img_swipe" src="' + "./imagens/" + nomes[(0)%maximo] +"/"+ imgs[(0)%maximo] +'"> </img><marquee style="visibility:hidden" id="texto_marquee">'+ nomes[0] +'</marquee></div>',0]);
			
		
	for(i=1; i<maximo; i++){
	$('.owl-carousel')
		owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="changeLinkLoja('+ (i) +');" class="img" id="img_swipe" src="' + "./imagens/" + nomes[(i)%maximo] +"/"+ imgs[(i)%maximo] +'"> </img><marquee  id="texto_marquee">'+ nomes[i] +'</marquee></div>',i]);
		
	}
	$('.owl-carousel')
	owl.trigger('refresh');
    $('.owl-carousel').trigger('to.owl.carousel', [1, 0, true]);
}



function changeLinkLoja(x){
    if (!foi_swipe) 
    {
        if (nomes[x] == "Ver Estado Encomendas"){
            faz_descer('estado_encomendas.html');
            return;
        }
        setCookie('loja', nomes[x], 1); 
        setCookie('actual_loja', nomes[x], 1); 
        setCookie('actual', 0, 1); 
        faz_descer('products.html');	
    }
}
function goUp(){
	setCookie('actual', 0, 1);
	
	faz_subir('type_of_buy.html');	
}
