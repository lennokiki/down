(function(d, $){
	window.onload = function(){
/*		var nav = navigator.userAgent.toLowerCase();
		var isiOS = /iphone|ipad|ipod/.test(nav)
		isiOS?toShow():$('#music')[0].addEventListener('canplaythrough', toShow, false);*/
		
		//function toShow(){
			$('.tops').hide();
			$('#music-c').addClass('rotates');
			audioAutoPlay('music'); 
			//
			$('.corner').show().css({'opacity':'1','transition':'1s linear'})
			//显示线
			timeOutFunction(1000, showLine);
			//第一层分散
			timeOutFunction(2000, function(){
				$('.center-line').hide();
				$('#li1').css({'left':'-10%','top':'-10%','transition':'all 1s linear'});
				$('#li2').css({'right':'-10%','top':'-10%','transition':'all 1s linear'});
				$('#li3').css({'left':'-10%','bottom':'-10%','transition':'all 1s linear'});
				$('#li4').css({'right':'-10%','bottom':'-10%','transition':'all 1s linear'});
			})
			//显示萤火虫
			timeOutFunction(3000, function(){
				showFlyStart();
				//中间logo显示出来
				$('header').show().addClass('bounceIn');
			});
			//第一层收拢
			timeOutFunction(3500, function(){
				$('#li1').css({'left':'0','top':'0','transition':'all .8s linear'});
				$('#li2').css({'right':'0','top':'0%','transition':'all .8s linear'});
				$('#li3').css({'left':'0%','bottom':'0%','transition':'all .8s linear'});
				$('#li4').css({'right':'0%','bottom':'0%','transition':'all .8s linear'});
				$('.corner').css({'opacity':'0','transition':'all .8s linear'});
			})	
			timeOutFunction(4800, function(){
				$('.secondpage').show();
				//背景透明
				$('.break-four li').css({'opacity':'0','transition':'all 1s linear'});
				//显示灯光
				$('.blue-star').show();
				$('.red-star').show();
				//标题向上
				$('header').css({'transform':'translateY(-50px)','transition':'all .4s ease-in'});
				//显示说明
			})
			timeOutFunction(5400, function(){
				//显示游戏平台介绍
				$('.show-mes li').eq(0).show().addClass('flip');
			})			
			timeOutFunction(5800, function(){
				//显示游戏平台介绍
				$('.show-mes li').eq(1).show().addClass('flip');
			})
			timeOutFunction(6200, function(){
				//显示游戏平台介绍
				$('.show-mes li').eq(2).show().addClass('flip');
			})
			timeOutFunction(6600, function(){
				//显示游戏平台介绍
				$('.show-mes li').eq(3).show().addClass('flip');
			})
			timeOutFunction(7000, function(){
				//显示下载按钮
				$('.android').show().addClass('bounceInLeft');
				$('.iphone').show().addClass('bounceInRight');
				moves();
			})							
		//}
		$('#music-c').on('tap', function(){
			var music = $('#music')[0] ;
			if(music.paused){
				music.play();
				$(this).addClass('rotates');
			}else{
				music.pause();
				$(this).removeClass('rotates');
			}
		})

		function moves(){
			$('.secondpage').anim(
				{'bottom':'-100%'},
				30,
				'linear',
				function(){
					$(this).css({'bottom':'0'});
					moves();
				}
			);			
		}			
	}	
})(document, $)
