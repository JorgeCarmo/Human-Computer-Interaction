var mvar;
var src = '';
var txt = '';
function popup_out(imagem,texto){
	_('popup').style.zIndex = '99';
	_('popup').className = 'pop_out';
	src = imagem;
	txt = texto;
	muda_cenas();
	
	setTimeout(function(){	_('popup_cima').style.zIndex = '99';
							
							_('popup_confirm').style.visibility = 'visible'
							}	,850);
}
function muda_cenas(){
	_('popup_img').src = "./imagens/FriendsHub/" + src;
	_('popup_cima').innerHTML = txt;

	_('popup_cima').behavior = 'scroll';
	_('popup_cima').direction="LEFT";

}

function botao_n(){
	_('popup').style.zIndex = '-50';
	_('popup').className = '';
	_('popup_cima').style.zIndex = '-50';						
	_('popup_confirm').style.visibility = 'hidden'
}
function botao_y(){
	amigos = parseInt(getCookie("amigos")); /*numero de amigos*/
	if (isNaN(amigos))
		amigos = 0;
    if (src == "amigo_13.png")
        setCookie("main_amigo1",1,1);
    if (src == "amigo_14.png")
        setCookie("main_amigo2",1,1);
	setCookie("amigo"+(amigos+1),src,1);
	setCookie("amigos",amigos+1,1);
	setCookie("sucess","Amigo Adicionado",1);
	setCookie("pagina_antiga","main_menu.html",1);
	faz_descer('great_sucess.html');	
}

function check_botoes() {
    var flag1 = parseInt(getCookie("main_amigo1"));
    var flag2 = parseInt(getCookie("main_amigo2"));
    console.log(flag1);
    console.log(flag2);
    
    if (flag1){        
        _('bot_poput1').style.display = "none";
    }
    if (flag2)
        _('bot_poput2').style.display = "none";
}