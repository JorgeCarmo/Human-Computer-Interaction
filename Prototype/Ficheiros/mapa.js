var zoom = 2;
var mexer = 0;
var x_ini = 0;
var y_ini = 0;
var x_fin = 0;
var y_fin = 0;
var left = ['35px','29px','18px','24px','17px','57px'];
var topo = ['30px','61px','40px','57px','53px','36px',];
/*
function fixPageXY(e) {
  if (e.pageX == null &amp;&amp; e.clientX != null ) { 
    var html = document.documentElement
    var body = document.body

    e.pageX = e.clientX + (html.scrollLeft || body &amp;&amp; body.scrollLeft || 0)
    e.pageX -= html.clientLeft || 0
    
    e.pageY = e.clientY + (html.scrollTop || body &amp;&amp; body.scrollTop || 0)
    e.pageY -= html.clientTop || 0
  }
}
document.getElementById('innverdiv').onmousedown = function() {
  this.style.position = 'absolute'

  var self = this

  document.onmousemove = function(e) {
    e = e || event
    fixPageXY(e) 
   
    self.style.left = e.pageX-25+'px' 
    self.style.top = e.pageY-25+'px' 
  }
  this.onmouseup = function() {
    document.onmousemove = null
  }
}

*/

function rato_down(event){
	mexer = 1;
	x_ini = event.clientX;
	y_ini = event.clientY;
}
function rato_up(){
	mexer = 0;
}
function move_map(event){
	if (mexer){
		x_fin = event.clientX;
		y_fin = event.clientY;
		
		x_muda = x_fin - x_ini;
		y_muda = y_fin - y_ini;
		if(parseInt(_('innerdiv').style.left) + x_muda < 0 && Math.abs(parseInt(_('innerdiv').style.left) + x_muda) < parseInt(_('innerdiv').width)-parseInt(_('ecra-edge').clientWidth)){
			_('innerdiv').style.left = (parseInt(_('innerdiv').style.left) + x_muda).toString() +'px'; 
			var x = document.getElementsByClassName("imagens_mapa");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.left =(parseInt(x[i].style.left) + x_muda).toString() +'px';
			}
			/*_('red_circle').style.left = (parseInt(_('red_circle').style.left) + x_muda).toString() +'px'; */
			}
		else{
			
			if (parseInt(_('innerdiv').style.left) + x_muda < 0){
				_("barra_dir").style.visibility='visible';
			}else{
				_("barra_esq").style.visibility='visible';
				}
			_("barra_dir").className='animacao_in';
			_("barra_esq").className='animacao_in';
		/*	setTimeout(function(){_("barra_ver").className='animacao_out';},400);*/
			setTimeout(function(){_("barra_dir").className='';_("barra_esq").className='';_("barra_esq").style.visibility='hidden';_("barra_dir").style.visibility='hidden';},1000);
		}
		if(parseInt(_('innerdiv').style.top) + y_muda < 0 && Math.abs(parseInt(_('innerdiv').style.top) + y_muda) < parseInt(_('innerdiv').height)-parseInt(_('ecra-edge').clientHeight)){
			_('innerdiv').style.top = (parseInt(_('innerdiv').style.top) + y_muda).toString() +'px'; 
			var x = document.getElementsByClassName("imagens_mapa");
			var i;
			for (i = 0; i < x.length; i++) {
				x[i].style.top =(parseInt(x[i].style.top) + y_muda).toString() +'px';
			}
			/*_('red_circle').style.top = (parseInt(_('red_circle').style.top) + y_muda).toString() +'px';*/
		}
		
		else{
			
			if(parseInt(_('innerdiv').style.top) + y_muda < 0){
				_("barra_bai").style.visibility='visible';
			}else{
				_("barra_cim").style.visibility='visible';
				}
			_("barra_cim").className='animacao_in';
			_("barra_bai").className='animacao_in';
			/*setTimeout(function(){_("barra_hor").className='animacao_out';},400);*/
			setTimeout(function(){_("barra_cim").className='';_("barra_bai").className='';_("barra_cim").style.visibility='hidden';_("barra_bai").style.visibility='hidden';},1000);
		}		
		x_ini = x_fin;
		y_ini = y_fin;
	}
}
/*
function left(){
	
	if(parseInt(_('innerdiv').style.left) + 10 < 0)
		_('innerdiv').style.left = (parseInt(_('innerdiv').style.left) + 10).toString() +'px'; 

	_('chei').innerHTML = _('innerdiv').height;
	_('cwid').innerHTML = _('innerdiv').width;
	_('ctop').innerHTML = _('innerdiv').style.top;
	_('clef').innerHTML = _('innerdiv').style.left;
		
}
function right(){

	if(Math.abs(parseInt(_('innerdiv').style.left) - 10) < parseInt(_('innerdiv').width)-parseInt(_('ecra-edge').clientWidth))
		_('innerdiv').style.left = (parseInt(_('innerdiv').style.left) - 10).toString() +'px'; 

	_('chei').innerHTML = _('innerdiv').height;
	_('cwid').innerHTML = _('innerdiv').width;
	_('ctop').innerHTML = _('innerdiv').style.top;
	_('clef').innerHTML = _('innerdiv').style.left;
		}


function down(){

	if(Math.abs(parseInt(_('innerdiv').style.top) - 10) < parseInt(_('innerdiv').height)-parseInt(_('ecra-edge').clientHeight))
		_('innerdiv').style.top = (parseInt(_('innerdiv').style.top) - 10).toString() +'px'; 
	
	_('chei').innerHTML = _('innerdiv').height;
	_('cwid').innerHTML = _('innerdiv').width;
	_('ctop').innerHTML = _('innerdiv').style.top;
	_('clef').innerHTML = _('innerdiv').style.left;
	}

function up(){
	if(parseInt(_('innerdiv').style.top) + 10 < 0)
		_('innerdiv').style.top = (parseInt(_('innerdiv').style.top) + 10).toString() +'px'; 
	
	_('chei').innerHTML = _('innerdiv').height;
	_('cwid').innerHTML = _('innerdiv').width;
	_('ctop').innerHTML = _('innerdiv').style.top;
	_('clef').innerHTML = _('innerdiv').style.left;
	}
*/
function bigger(){
	if (zoom < 5){
		zoom = zoom + 1;
		_('innerdiv').width = (parseInt(_('innerdiv').width) * 1.4).toString() ;
		_('innerdiv').height = (parseInt(_('innerdiv').height) * 1.4).toString();
		_('innerdiv').style.top = ((parseInt(_('innerdiv').style.top)  - parseInt(_('ecra-edge').clientHeight)/2) *1.4 + parseInt(_('ecra-edge').clientHeight)/2 ).toString() + 'px';
		_('innerdiv').style.left =((parseInt(_('innerdiv').style.left) - parseInt(_('ecra-edge').clientWidth) /2) *1.4 + parseInt(_('ecra-edge').clientWidth) /2 ).toString() + 'px';
		
		var x = document.getElementsByClassName("imagens_mapa");
		var i;
		for (i = 0; i < x.length; i++) {

			x[i].style.width = (parseInt(x[i].style.width) * 1.2).toString() + 'px' ;
			x[i].style.height = (parseInt(x[i].style.height) * 1.2).toString() + 'px';
			x[i].style.top = ((parseInt(x[i].style.top)  - parseInt(_('ecra-edge').clientHeight)/2) *1.4 + parseInt(_('ecra-edge').clientHeight)/2 ).toString() + 'px';
			x[i].style.left =((parseInt(x[i].style.left) - parseInt(_('ecra-edge').clientWidth) /2) *1.4 + parseInt(_('ecra-edge').clientWidth) /2 ).toString() + 'px';
		}
		_('chei').innerHTML = _('red_circle').height;
		_('cwid').innerHTML = _('red_circle').width;
		_('ctop').innerHTML = _('red_circle').style.top;
		_('clef').innerHTML = _('red_circle').style.left;	
	}
	else{
		_("barra_dir").className='animacao_in';
		_("barra_esq").className='animacao_in';
		_("barra_cim").className='animacao_in';
		_("barra_bai").className='animacao_in';
		_("barra_bai").style.visibility='visible';
		_("barra_cim").style.visibility='visible';
		_("barra_dir").style.visibility='visible';
		_("barra_esq").style.visibility='visible';
		setTimeout(function(){	_("barra_cim").style.visibility='hidden';
								_("barra_dir").style.visibility='hidden';
								_("barra_esq").style.visibility='hidden';
								_("barra_bai").style.visibility='hidden';
								_("barra_cim").className='';
								_("barra_bai").className='';
								_("barra_dir").className='';
								_("barra_esq").className='';},1000);
		
	}
}
function smaller(){
	if(parseInt(_('ecra-edge').clientWidth) < (parseInt(_('innerdiv').width)  / 1.4 + (parseInt(_('innerdiv').style.left) - parseInt(_('ecra-edge').clientWidth) /2) /1.4 + parseInt(_('ecra-edge').clientWidth) /2) &&
	   parseInt(_('ecra-edge').clientHeight)< (parseInt(_('innerdiv').height) / 1.4 + (parseInt(_('innerdiv').style.top)  - parseInt(_('ecra-edge').clientHeight)/2) /1.4 + parseInt(_('ecra-edge').clientHeight)/2) &&
	   ((parseInt(_('innerdiv').style.top)  - parseInt(_('ecra-edge').clientHeight)/2) /1.4 + parseInt(_('ecra-edge').clientHeight)/2 )<0 &&
	   ((parseInt(_('innerdiv').style.left) - parseInt(_('ecra-edge').clientWidth) /2) /1.4 + parseInt(_('ecra-edge').clientWidth) /2 )<0)
	{	   
		zoom = zoom - 1;
		_('innerdiv').width = (parseInt(_('innerdiv').width) / 1.4).toString() ;
		_('innerdiv').height = (parseInt(_('innerdiv').height) / 1.4).toString();
		_('innerdiv').style.top = ((parseInt(_('innerdiv').style.top)  - parseInt(_('ecra-edge').clientHeight)/2) /1.4 + parseInt(_('ecra-edge').clientHeight)/2 ).toString() + 'px';
		_('innerdiv').style.left =((parseInt(_('innerdiv').style.left) - parseInt(_('ecra-edge').clientWidth) /2) /1.4 + parseInt(_('ecra-edge').clientWidth) /2 ).toString() + 'px';
		
		var x = document.getElementsByClassName("imagens_mapa");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.width = (parseInt(x[i].style.width) / 1.2).toString() + 'px';
			x[i].style.height = (parseInt(x[i].style.height) / 1.2).toString() + 'px';
			x[i].style.top = ((parseInt(x[i].style.top)  - parseInt(_('ecra-edge').clientHeight)/2) /1.4 + parseInt(_('ecra-edge').clientHeight)/2 ).toString() + 'px';
			x[i].style.left =((parseInt(x[i].style.left) - parseInt(_('ecra-edge').clientWidth) /2) /1.4 + parseInt(_('ecra-edge').clientWidth) /2 ).toString() + 'px';
		}
		console.log(x);
	}
	else{
		zoom = 0;
		_('innerdiv').width = (parseInt(_('ecra-edge').clientWidth)).toString() ;
		_('innerdiv').height = (parseInt(_('ecra-edge').clientHeight)).toString();
		_('innerdiv').style.top = 0;
		_('innerdiv').style.left =0;
		var x = document.getElementsByClassName("imagens_mapa");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.top    = topo[i];
			x[i].style.left   = left[i];
			x[i].style.width  = 9;
			x[i].style.height = 9;
		}
		_('friends_icon').style.width  = 9;
		_('friends_icon').style.height = 10;
				_("barra_dir").className='animacao_in';
		_("barra_esq").className='animacao_in';
		_("barra_cim").className='animacao_in';
		_("barra_bai").className='animacao_in';
		_("barra_bai").style.visibility='visible';
		_("barra_cim").style.visibility='visible';
		_("barra_dir").style.visibility='visible';
		_("barra_esq").style.visibility='visible';
		setTimeout(function(){	_("barra_cim").className='';
								_("barra_bai").className='';
								_("barra_dir").className='';
								_("barra_esq").className='';
								_("barra_cim").style.visibility='hidden';
								_("barra_dir").style.visibility='hidden';
								_("barra_esq").style.visibility='hidden';
								_("barra_bai").style.visibility='hidden';},1000);

	}
		
	_('chei').innerHTML = _('friends_icon').height;
	_('cwid').innerHTML = _('friends_icon').width;
	_('ctop').innerHTML = _('friends_icon').style.top;
	_('clef').innerHTML = _('friends_icon').style.left;
	
}
function onLoad_mapa(){
	mapa_str_imagem = getCookie('mapa_imagem');
	if (mapa_str_imagem != ""){
		var pos = mapa_str_imagem.search("amigo_");
		pseudo_link = mapa_str_imagem.slice(pos);
		imagem_final = "./imagens/FriendsHub/mapa_"+pseudo_link;
		_('friends_icon').src = imagem_final;
		_('friends_icon').style.visibility = 'visible';
	}
    else{
    	_('friends').style.visibility = 'visible';
    }
}
function goUp(){
    faz_subir(getCookie('pagina de voltar atras'));
}

