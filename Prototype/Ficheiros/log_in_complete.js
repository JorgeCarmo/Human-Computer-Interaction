var actual = 0;
var maximo = 0;
var str_imagens = "./imagens/FriendsHub/";
var imgs= [];

function swipe_right(){
}
function swipe_left(){
}
/*

	*/
function onLoadConfirm_Remove(){
}

function changeLinkProcess(Value){
    if (Value){
        faz_stay('log_sucess.html');}	
    else{
        faz_stay('log_fail.html');	}
        
}

function goUp(){
}

function apagarBuddy(){
	if (apagar != amigos){
		setCookie("amigo"+apagar,getCookie("amigo"+amigos),1);
	}
	setCookie("amigos",amigos-1,1);
	goUp();
}
