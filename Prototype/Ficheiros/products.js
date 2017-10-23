/*loja;tipo;{ imgs,nomes,preco}*/
var products = {"Pizza Hut":{	"Comidas":{	"imgs":["pizza.png","pizza2.png","pizza3.jpg","pizza2.png"],
											"nomes":["Pizza 4 Queijos","Pizza Rustica","Pizza Havaiana","Pizza Margarita"],
											"preco":[13,12,13,11]}
								,"Bebidas":{	"imgs":["sprite.jpg","beer.jpg","coke.jpg","ice.jpg","sumolaranja.jpg","Water.jpg"],
											"nomes":["Sprite","Cerveja","Coca Cola","Ice Tea","Sumo de Laranja","Água"],
											"preco":[2,2,1,2,2,3,1.5]}},
				"McDonnald's":{	"Comidas":{	"imgs":["bacon.jpg","big.png","cheese.jpg","double.jpg","mcflurry.png"],
											"nomes":["BaconBurguer","BigMac","Cheeseburguer","DoubleCheese","McFlurry"],
											"preco":[6,5,2.5,4,1.5]}
							,	"Bebidas":{	"imgs":["sprite.jpg","beer.jpg","coke.jpg","ice.jpg","sumolaranja.jpg","Water.jpg"],
											"nomes":["Sprite","Cerveja","Coca Cola","Ice Tea","Sumo de Laranja","Água"],
											"preco":[2,2,1,2,2,3,1.5]}},
                "Pans & Company":{	   "Comidas":{	"imgs":["burguer.png","maximus.png","Napoli.png","rustik.png","sandes delicias mar.png"],
											"nomes":["Sandes Hamburger","Sandes Maximus","Sandes Napoli","Sandes Rustik","Sandes Delicias do Mar"],
											"preco":[3,4,4,3.5,4]}
							,	"Bebidas":{	"imgs":["sprite.jpg","beer.jpg","coke.jpg","ice.jpg","sumolaranja.jpg","Water.jpg"],
											"nomes":["Sprite","Cerveja","Coca Cola","Ice Tea","Sumo de Laranja","Água"],
											"preco":[2,2,1,2,2,3,1.5]}},
                "Tasca do Manel":{	   "Comidas":{	"imgs":["bifana.jpg","chips.png","frango assado.jpg","kebab.jpg","noodles.jpg","pitashoarma.jpg"],
											"nomes":["Bifana","Batatas Fritas","Frango asssado com batatas assadas","Kebab","Noodles","Pita Shoarma"],
											"preco":[2,1.5,4,3,3,3]}
							,	"Bebidas":{	"imgs":["sprite.jpg","beer.jpg","coke.jpg","ice.jpg","sumolaranja.jpg","Water.jpg"],
											"nomes":["Sprite","Cerveja","Coca Cola","Ice Tea","Sumo de Laranja","Água"],
											"preco":[2,2,1,2,2,3,1.5]}},                
				"Lembrancas":{	"Lembrancas":{	"imgs":["camisola.jpg","camisola_metallica.jpg","cd_metallica.jpg","camisola_muse.jpg","cd_muse.jpg","camisola_linkin_park.jpg","cd_linkin_park.jpg","pen.jpg","porta_chaves.jpg"],
									"nomes":["Camisola Oficial Rock in Rio","Camisola Metallica","cd Black Album - Metallica","Camisola Muse","cd The Resistance - Muse","Camisola Linkin Park","cd Hybrid Theory - Linkin Park","Guitarra","Porta Chaves"],
									"preco":[10,20,15,20,15,20,15,69.99,2]}}
				};


var str_imagens = "";
var str_anterior = "./imagens/";

var loja = "";
var tipo = "";

var imgs = [];

var nomes = [];
var precos = [];
var actual = 0;
var maximo = 0;
var anterior = 0;



function onLoadProducts(){
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	loja = getCookie("loja");
	tipo = getCookie("tipo");
	actual = parseInt(getCookie("actual"));	
	str_imagens = "./imagens/" + loja + "/" + tipo + "/";
	imgs = products[loja][tipo]["imgs"];
	nomes = products[loja][tipo]["nomes"];
	precos = products[loja][tipo]["preco"];
    drone_num_exist = parseInt(getCookie("drones"));
    if (drone_num_exist > 0){
        imgs.push("../../encomendas.png");
        nomes.push("Ver Estado Encomendas");
    }
    maximo =  nomes.length;
	
	if (actual == 0)
		anterior = maximo-1;
	else 
		anterior = actual -1 ;
		 
		 owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)"  onClick="changeLinkProd('+ (0) +');" class="img" id="img_swipe" src="' + "./imagens/" + loja + "/" + tipo + "/" + imgs[(0)%maximo] +'"> </img><marquee style="visibility:hidden" id="texto_marquee">'+ nomes[0] +'</marquee></div>',0]);
			
		 
	for(i=1; i<maximo; i++){
		$('.owl-carousel')
			owl.trigger('add', ['<div> <img onmousedown="foi_abaixo(event)" onmouseup="foi_acima(event)"  onClick="changeLinkProd('+ (i) +');" class="img" id="img_swipe" src="' + "./imagens/" + loja + "/" + tipo + "/" + imgs[(i)%maximo] +'"> </img><marquee  id="texto_marquee">'+ nomes[i] +'</marquee></div>',i]);
			
		}
	$('.owl-carousel')
	owl.trigger('refresh');
	
}
function changeLinkProd(x){
	if (!foi_swipe) 
    {    
        if (nomes[x] == "Ver Estado Encomendas"){
            faz_descer('estado_encomendas.html');
            return;
        }
        setCookie('preco', precos[x], 1);
        setCookie('nome_producto', nomes[x], 1);
        var zero = 0;
        setCookie("actual",zero,1);
        setCookie("actual_imagem",imgs[x],1);
        setCookie("actual_nome",nomes[x],1);

        faz_descer('produto.html');
    }
}


function goUp(){
	var zero = 0;
	setCookie("actual",zero,1);		
	if (loja=="Lembrancas")
		faz_subir('type_of_buy.html');	
	else
		faz_subir('lojas.html');	
}


