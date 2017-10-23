var actual = 0;
var amigos_true = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];
var nomes = [];
var amigos;

function onLoadFriendsHub(){}

function changeLinkFinancas(escolhido){
	if (!foi_swipe) 
    {   
        if (escolhido=='loja'){
            faz_descer('warning_loja.html');
        }
        else{
            setCookie('pagamento',escolhido,1);
            faz_descer('login.html');
        }
    }
}

function goUp(){
	/*var zero = 0;
	setCookie("actual",zero,1);	
	faz_subir('avatar_camera.html');*/
}
