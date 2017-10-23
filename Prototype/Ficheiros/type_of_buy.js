var actual = 0;
var maximo = 0;
var str_imagens = "./imagens/";
var imgs= ["fork_knife.png","copo_cerveja.jpg","main_shirt.jpg"];
var nomes = ["Comidas","Bebidas","Lembranças"];
var sglm=new Array();
	
//PAUSE between messages in milliseconds: 1000=1s; set to your own; 
var bpause = 500; 
function swipe_left(){
	actual = (actual+1)%maximo;
	setCookie("actual",actual,1);
	document.location='type_of_buy.html';
	/*actual = (actual+1)%maximo;
	if (actual == 0)
		anterior = maximo-1;
	else 
		anterior = actual -1 ;
	_("img_left").src = str_imagens  + imgs[anterior];
	_("img_central").src = str_imagens + imgs[actual];
	_("img_right").src = str_imagens + imgs[(actual+1)%maximo];
	_("texto_baixo").innerHTML = nomes[actual];*/
}
function swipe_right(){
	if (actual == 0)
		actual = maximo;
	actual = (actual-1)%maximo;
	setCookie("actual",actual,1);
	document.location='type_of_buy.html';
	/*if (actual == 0)
		actual = maximo;
	actual = (actual-1)%maximo;
	if (actual == 0)
		anterior = maximo-1;
	else 
		anterior = actual -1; 
	_("img_left").src = str_imagens  + imgs[anterior];
	_("img_central").src = str_imagens + imgs[actual];
	_("img_right").src = str_imagens + imgs[(actual+1)%maximo];
	_("texto_baixo").innerHTML = nomes[actual];*/
}
function onLoadType(){
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	actual = parseInt(getCookie("actual"));
	drone_num_exist = parseInt(getCookie("drones"));
    if (drone_num_exist > 0){
        imgs.push("encomendas.png");
        nomes.push("Ver Estado Encomendas");
    }
    maximo =  nomes.length;
    console.log(imgs);
	if (actual == 0)
		anterior = maximo-1;
	else 
		anterior = actual -1 ;
	
	owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="changeLinkType('+ (0) +');" class="img" id="img_swipe" src="' + "./imagens/" + imgs[(0)%maximo] +'"> </img><marquee  style="visibility:hidden" id="texto_marquee">'+ nomes[0] +'</marquee></div>',0]);

	
	for(i=1; i<maximo; i++){
	$('.owl-carousel')
		owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)" onClick="changeLinkType('+ (i) +');" class="img" id="img_swipe" src="' + "./imagens/" + imgs[(i)%maximo] +'"> </img><marquee  id="texto_marquee">'+ nomes[i] +'</marquee></div>',i]);
		
	}
	owl.trigger('refresh');
}

function changeLinkType(x){
	if (!foi_swipe) 
    {
        var zero = 0;
        setCookie("actual",zero,1);
        if (nomes[x] == "Lembranças")
        {
            setCookie('actual_loja',"Loja Oficial Rock in Rio",1);
            setCookie('actual_tipo',"Lembrancas",1);
            setCookie('tipo', "Lembrancas", 1); 
            setCookie('loja', "Lembrancas", 1);
            faz_descer('products.html');
            return;
        }
        else if (imgs[x] == "encomendas.png"){
            faz_descer('estado_encomendas.html');
            return;
        }
        else{	
            setCookie('tipo', nomes[x], 1); 
            setCookie('actual_tipo',nomes[x],1);}
            faz_descer('lojas.html');	
    }
}

function goUp(){
	var zero = 0;
	setCookie("actual",zero,1);
    faz_subir('main_menu.html');
}
