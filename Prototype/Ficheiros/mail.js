var actual = 0;
var amigos_true = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];
var nomes = [];
var amigos;

function onLoadMail(){
    txt_m = getCookie('texto_baixo');
    _('texto_baixo').innerHTML = txt_m;

}
function changeMail(letra){
    if (!foi_swipe) 
    { 
        if (letra=='OK'){
            setCookie('texto_baixo',_('texto_baixo').innerHTML,1); 
            faz_subir('login.html');
        }
        else if (letra=='del'){
            _('texto_baixo').innerHTML = _('texto_baixo').innerHTML.slice(0, -1);
        }
        else{
            _('texto_baixo').innerHTML = _('texto_baixo').innerHTML + letra;
            setCookie('texto_baixo',_('texto_baixo').innerHTML,1); 
            faz_stay('mail.html');
        } 
    }
}


function goUp(){
	var zero = 0;
	setCookie("actual",zero,1);	
	changeMail('OK');
}
