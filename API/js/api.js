// JavaScript Document

var hid=["frist","iconfont","button", "form", "mask", "table", "page","inend"];
var kk=[["style","html"],
	["if_in", "if_use"],
	["button_style", "button_size", "button_bg", "button_lt"],
	["input", "textarea", "radio", "checkbox", "select","input_select"],
	["mask_best"],
	["tabel_hline", "tabel_nline"],
	["page_besa"],
	["inend_bug","inend_edition"]
];
var berhei=$(".qky_header").outerHeight(true);
var allh=[];
var h2h=[];
$(function(){
	//api布局js
	ystocode();
	iconup();
	$(".qkycode").each(function(i) {
        $(this).htmlcode($(this));
    });
	
	//右导航
	xrapi_r();
	flnav(1000,".api_nav");
	ciapi_r();
	ciapi_r2();	
	s_a();//滚动执行
});
$(window).resize(function() {
flnav(1000,".api_nav");
});

function xrapi_r(){
	var onehtml="";
	$(".main_bg").each(function(i) {
		onehtml+='<a class="qky_njclick iskuai fz_16 pl0 trn dian3 one" href="#'+hid[i]+'">'+$(this).find("h1 b").html()+'</a><div class="qky_njbox  one"></div>';
    });
	$(".api_r").html(onehtml);
    $(".api_so.one").each(function(t) { 
		$(this).find(".api_so.two").each(function(j) {
			$(".qky_njbox.one").eq(t).append('<a class="qky_njclick iskuai fz_12 pl16 dian3 two trn" href="#'+kk[t][j]+'">'+$(this).parent().find("h2").eq(j).find("b").html()+'</a><div class="qky_njbox two"></div>'); 
			/*$(this).find("h3").each(function(i) {
				$(".qky_njbox.one").eq(t).find(".qky_njbox.two").eq(j).append('<a class="qky_njend pl0 fz_12 pa_tb10  dian3 three">'+$(this).html()+'</a>');
			});*/
		});
	});
}
function ciapi_r(){
	$(".qky_njclick.one").each(function(i) {
        $(this).click(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			anapi_r();
		});
    });
	}
	
	function ciapi_r2(){
	$(".qky_njclick.two").each(function(i) {
        $(this).click(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
		});
    });
	}
function anapi_r(){
	$(".qky_njclick.one").each(function(int) {
       if( $(this).hasClass("cur")){
		   $(".qky_njbox.one").slideUp();
		$(this).next(".qky_njbox.one").first().slideDown(200);
		}
    });
}

//自动把演示的代码显示到代码框里；
function ystocode(){
	$(".api_demo").each(function(i) {
        $(this).htmlcode($(this).parent().parent().find(".api_code"));
    });
}
//收缩伸展函数
function iconup(){
	$(".iconup").each(function(i) {
        $(this).click(function(){
			$(this).find("i").toggleClass("r90");
			$(this).parent().next().first().slideToggle(200,function(){
			});
		});
    });
}
  

//导航漂浮执行
function flnav(maxw,id){
	var w=$(window).width();
	var rw;
	if(w<=maxw) rw=0;
	else rw=(w-maxw)/2;
	$(id).css("right",rw+"px");
}

//滚动执行
function s_a(){
	$(window).scroll(function(){
		var body_scr=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		
		$(".main_bg").each(function(i) {
			var kk=0;
			for(var j=0;j<i;j++){
				kk+=$(".main_bg").eq(j).outerHeight(true);
			}
			allh[i]=kk+berhei;
			kk=0;	
        });
		$(".api_so.two").each(function(i) {
			h2h[i]=$(this).prev("h2").first().offset().top+berhei;
        });
		//console.log(allh);
		for(var l=0;l<allh.length;l++){
			if(body_scr>=allh[l]&&body_scr<allh[l+1]){
				    $(".qky_njbox.one").removeClass("cur").hide();
					$(".qky_njclick.one").eq(l).addClass("cur");
					$(".qky_njclick.one").eq(l).next(".qky_njbox.one").first().show().addClass("cur");
				}else{
					$(".qky_njclick.one").eq(l).removeClass("cur");	
				}
		}
		if(body_scr<berhei){$(".qky_njbox.one").removeClass("cur").hide();}
         for(var o=0;o<h2h.length;o++){
			if(body_scr>=h2h[o]&&body_scr<h2h[o+1]){
					$(".qky_njclick.two").eq(o).addClass("cur");
				}else{
					$(".qky_njclick.two").eq(o).removeClass("cur");	
				}
		}
	});	
}