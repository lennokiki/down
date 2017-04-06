/*自动播放兼容*/
function audioAutoPlay(id){
    var audio = document.getElementById(id),  
        play = function(){  
            audio.play();  
        };  
    audio.play();  
    document.addEventListener("WeixinJSBridgeReady", function () {  
        play();  
    }, false);  
    document.addEventListener('YixinJSBridgeReady', function() {  
        play();  
    }, false);  
} 
/*运动对象*/
function bufferMove(obj, oTarget, fn) {
	clearInterval(obj.timer);

	obj.timer = setInterval(function () {
		var bBtn = true; // 默认所有的属性均已运动完毕
		for(var sAttr in oTarget) {
			// 获取当前值
			if(sAttr === 'opacity') {
				var iCur = parseFloat(getStyle(obj, sAttr) * 100);
			} else {
				var iCur = parseInt(getStyle(obj, sAttr));
			}

			// 计算速度
			var iSpeed = (oTarget[sAttr] - iCur)/400;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); 

			// 修改运动后的属性值
			if(sAttr === 'opacity') {
				obj.style['opacity'] = (iCur + iSpeed) / 100;
				obj.style['filter'] = 'alpha(opacity=' + ( iCur + iSpeed ) + ')';
			} else {
				obj.style[sAttr] = iCur + iSpeed + 'px';
			}

			// 如果有属性没有运动完毕，则将按钮关闭掉
			if(iCur + iSpeed !== oTarget[sAttr]) {
				bBtn = false;
			}
		}
		if(bBtn) {
			clearInterval(obj.timer);

			// 如果传入回调函数，则执行
			if(fn) {
				fn();
			}
		}
	}, 30);
}

// 获取对象样式的函数
function getStyle(obj, sAttr) {
	if(obj.currentStyle) {
		return obj.currentStyle[sAttr];
	} else {
		return getComputedStyle(obj, null)[sAttr];
	}
}
/*显示萤火虫*/
function showFlyStart(){
	var	iImgNum = 30, // 图片数量
			iImgWidth = 30, // 图片宽度
			iImgHeight = 30, // 图片高度
			iWindowWidth = document.documentElement.clientWidth, // 窗口宽度
			iWindowHeight = document.documentElement.clientHeight; // 窗口高度

	// 构造函数，构造一个萤火虫
	function Firefly(src, sClassName) {
		this.src = src; // 图片地址
		this.className = sClassName; // DOM对象className
	}
	// 创建萤火虫
	Firefly.prototype.create = function () {
		var oNewImg = document.createElement('img');
		oNewImg.src = this.src;
		oNewImg.className = this.className;
		document.body.appendChild(oNewImg);
		this.object = oNewImg;
	}
	// 随机设置位置
	Firefly.prototype.position = function () {
		this.left = Math.round(Math.random() * (iWindowWidth - iImgWidth));
		this.top  = Math.round(Math.random() * (iWindowHeight - iImgHeight));
	}

	// 让萤火虫运动起来
	Firefly.prototype.move = function () {
		var oThis = this;
		bufferMove(this.object, {left: this.left, top: this.top}, function () {
			// 重新生成下一个运动的目标点
			oThis.position();
			// 动起来
			oThis.move();
		});
	}

	// 萤火虫初始化
	Firefly.prototype.init = function () {
		// 创建萤火虫
		this.create();
		// 随机生成初始化位置
		this.position();
		// 设置初始化的位置
		this.object.style.left = this.left + 'px';
		this.object.style.top  = this.top + 'px';

		// 随机生成萤火虫运动的目标点位置
		this.position();

		// 让萤火虫运动起来
		this.move();
	}

	for(var i =0; i < iImgNum; i++) {
		var oFirefly = new Firefly('./images/fly.png', 'firefly');
		oFirefly.init();
	}			
}
//延时方法
function timeOutFunction(timer, fn){
	var t = setTimeout(function(){
		fn() || fn;
		clearTimeout(t);
	},timer);
}
//显示分裂线
function showLine(){
	var arr = ['#svg1','#svg2','#svg3',"#svg4"];
	var obj = [];
	$('.center-line').show();
	for(var i=0;i<arr.length;i++){
		obj[i] = new Walkway({
			selector: arr[i],
			duration: 1000,
			easing: 'ease-in'
		}).draw();
	}
}
