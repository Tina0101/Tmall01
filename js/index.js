'use strict';
//header的右边移入移出
$('.right li').mouseenter(function(){
        $(this).children().addClass('cur');
	});
$('.right li').mouseleave(function(){
	    $(this).children().removeClass('cur');
	}); 

//2轮播图
var num=0;
var timer;
function gogo(){
timer=setInterval(function(){
num++;
if(num==6)num=0;
$('.banner .three').css('left',-1230*num+'px');
$('.banner .down .one li').eq(num).addClass('current');
$('.banner .down .one li').eq(num).siblings().removeClass('current');
},2000)
}
gogo();

//2.1鼠标移入停止，移出启动
$('.banner .down .three li').mouseenter(function(event) {
	clearInterval(timer);
});
$('.banner .down .three li').mouseleave(function(event) {
	gogo();
});


// 2.2把点击和背景联系起来-
/*$('.banner .down .one li').click(function(){
    var index1=$(this).index;
    $('.banner .down .three').css('left',-1230*index1+'px');
    $('.banner .down .one li').eq(index1).addClass('current');
    // $('.banner .down .one li').eq(num).siblings().removeClass('current');

})*/





// 轮播图左边移入移出1-

/*$('.banner .down .two').children().mouseenter(function(){
	var ban=$('.banner .down .two').children().index();
	$('.banner .down .two .main').eq(ban).show();
})
$('.banner .down .two .li_1').mouseleave(function(){
	$('.banner .down .two .main').hide();
})*/

/*轮播图左边移入移出1*/
$('.banner .down .two li').hover(function(){
	$(this).children().show()},
	function(){
		$(this).children().hide()
})

/*侧边栏的出现*/
$(window).scroll(function(){
	// console.log($(window).scrollTop());
	if($(window).scrollTop()>$(window).height()){
		$('.side').fadeIn();
	}else{
		$('.side').fadeOut();
	}
});
/*侧边栏回顶部*/
$('.side .sid_10').click(function(){
	$('html,body').animate({'scrollTop':'100px'})
});

/*侧边栏随着页面滑动而跳转*/
/*function fn(n){
	return $('.sid li').eq(n).addClass('roll').siblings().removeClass('roll')
}

$(window).scroll(function(event){
	if($(window).scrollTop()>=$('.con>div').eq(5).offset().top){
		console.log('.con>div')
		fn(5)
	}else if ($(window).scrollTop()>=$('.con>div').eq(4).offset().top){
		fn(4)
	}
})
*/
/*点击侧边栏页面跳转*/
$('.sid li').click(function(event){
	$(this).addClass('roll').siblings().removeClass('roll')
	var index= $(this).index()
	$('html,body').animate({'scrollTop':$('.con>div').eq(index).offset().top},1000)
});







/*tent4今日抢购的转换*/
$('.tent4 .tent4_2 ul li').mouseenter(function(){
	var m=$(this).index();
	$('.tent4 .tent4_2 ol li').eq(m).fadeIn(600).siblings().hide();
});


//猜你喜欢 
// var cl=0;
/*var list=[{
	src:'images/l001.jpg',title:'1LINING李宁正品 新款男子开衫无帽卫衣',mon:'￥169.0'},{
	src:'images/l002.jpg',title:'李宁正品冬季新款 女子运动生活系列休闲',mon:'￥179.0'},{
	src:'images/l003.jpg',title:'1LINING李宁正品 新款 男子运动风衣 ',mon:'￥169.0'},{
	src:'images/l004.jpg',title:'ADAM-6521/ST-AE 1个起订 货期5-9天',mon:'￥2127.3'},{
	src:'images/l005.jpg',title:'LINING李宁专柜正品 当季新款 男子运动     ',mon:'￥189.0'},{
	src:'images/l006.jpg',title:'3M6895吸气孔红色垫圈 配6200面具使用',mon:'￥8.8'},{
	src:'images/l007.jpg',title:'Lining/李宁羽毛球服 运动上衣AWDH283',mon:'￥209.0'},{
	src:'images/l008.jpg',title:'1LINING李宁正品 夏季新款 男子七分卫裤',mon:'￥119.0'},{
	src:'images/l009.jpg',title:'进口正品欧莱雅秀发锁护乳染前护理精华',mon:'￥32.0'},{
	src:'images/l010.jpg',title:'1LINING李宁正品 夏季新款 女子训练系列',mon:'￥79.0'},{
	src:'images/l011.jpg',title:'1LINING李宁专柜正品新款 男子运动紧身衣',mon:'￥109.'},{
	src:'images/l012.jpg',title:'1LINING李宁专柜正品 男子灵活训练鞋',mon:'￥199.0'},{
	src:'images/l013.jpg',title:'1长青款 李宁正品女裤 新款女子篮球系列',mon:'￥79.0'},{
	src:'images/l014.jpg',title:'LINING李宁专柜正品 夏季新款 女子训练系列',mon:'￥59.0'},{
	src:'images/l015.jpg',title:'现货 李宁正品 夏季新款 男子运动生活系列',mon:'￥69.0'},{
	src:'images/l016.jpg',title:'Skechers/斯凯奇休闲鞋女编织脚中口透气',mon:'￥949.0'},{
	src:'images/l017.jpg',title:'美国直邮Skechers/斯凯奇14061 GOwalk',mon:'￥949.0'},{
	src:'images/l018.jpg',title:'费列罗巧克力礼盒装6粒礼盒 结婚婚庆喜糖',mon:'￥16.68'},{
	src:'images/l019.jpg',title:'匡威男装棉服2018冬季新款星箭休闲保暖',mon:'￥649.0'},{
	src:'images/l020.jpg',title:'费列罗巧克力喜糖成品礼盒装6粒',mon:'￥17.8'},{
	src:'images/l021.jpg',title:'Skechers/斯凯奇女鞋凉拖平底包头绒面耐磨',mon:'￥1099.0'},{
	src:'images/l022.jpg',title:'Skechers/斯凯奇人字拖鞋男夏季夹趾帆布',mon:'￥829.0'},{
	src:'images/l023.jpg',title:'美国直邮 70361 Converse/匡威女鞋',mon:'￥1129.0'},{
	src:'images/l024.jpg',title:'美国直邮 55177 Skechers/斯凯奇女鞋',mon:'￥879.0'},{
	src:'images/l025.jpg',title:'李宁专柜正品新款 男子碎钉抓地足球训练',mon:'￥149.0'},{
	src:'images/l026.jpg',title:'1LINING李宁正品 春秋新款男子训练系列',mon:'￥189.0'},{
	src:'images/l027.jpg',title:'美国直邮Skechers/斯凯奇14255夏季舒适',mon:'￥669.0'},{
	src:'images/l028.jpg',title:'三星 GALAXY Tab P7510 P7500 保护套 ',mon:'￥45.0'},{
	src:'images/l029.jpg',title:'LINING李宁专柜正品新款 男子保暖羽绒马甲',mon:'￥309.0'},{
	src:'images/l030.jpg',title:'The North Face/北面男休闲裤长裤加厚',mon:'￥2139.0'},{
	src:'images/l031.jpg',title:'美国直邮 34849 Skechers/斯凯奇女鞋',mon:'￥1259.0'},{
	src:'images/l032.jpg',title:'现货华为AR161-S 全千兆企业路由器',mon:'￥1609.0'},{
	src:'images/l033.jpg',title:'Canon/佳能 EW-88B 遮光罩 佳能 TS-E',mon:'￥331.0'},{
	src:'images/l034.jpg',title:'现货促销 华为 S2700-9TP-SI-AC ',mon:'￥719.0'},{
	src:'images/l035.jpg',title:'IBM 90Y8872 服务器硬盘 600G SAS 2.5寸',mon:'￥1550.0'},{
	src:'images/l036.jpg',title:'大疆DJI御Mavic 维修配件遥控器5维按钮',mon:'￥15.0'},{
	src:'images/l037.jpg',title:'联想电脑商用台式机扬天M7200d 锐龙R3-2200',mon:'￥2199.0'},{
	src:'images/l038.jpg',title:'美国直邮Skechers斯凯奇76832男舒适耐磨轻便',mon:'￥879.0'},{
	src:'images/l039.jpg',title:'The North Face/北面男棒球帽遮阳休闲简单舒适',mon:'￥609.0'},{
	src:'images/l040.jpg',title:'Converse/匡威双肩包背女包休闲旅行包书包',mon:'￥1049.0'},{
	src:'images/l041.jpg',title:'乐扣乐扣保鲜盒塑料微波炉饭盒旗舰店密封盒',mon:'￥12.0'},{
	src:'images/l042.jpg',title:'乐扣乐扣塑料保鲜盒食品装水果的盒子密封盒',mon:'￥18.0'},{
	src:'images/l043.jpg',title:'厨房冰箱长方形保鲜盒塑料饭盒水果保鲜盒',mon:'￥8.6'},{
	src:'images/l044.jpg',title:'原装进口乐扣乐扣塑料保鲜盒冰箱保鲜碗',mon:'￥10.6'},{
	src:'images/l045.jpg',title:'包邮美乐惠大容量5L长方形冰箱保鲜盒',mon:'￥6.0'},{
	src:'images/l046.jpg',title:'美国直邮Adidas/阿迪达斯 E042Y男运动防晒',mon:'￥9.9'},{
	src:'images/l047.jpg',title:'美国直邮Skechers/斯凯奇54105彩色舒适柔',mon:'￥1479.0'},{
	src:'images/l048.jpg',title:'行货联想X260 X250 T460 T450 T440 ',mon:'￥788.0'},{
	src:'images/l049.jpg',title:'海尔母婴空气净化器滤网 适用HY-KJ30A ',mon:'￥299.0'},{
	src:'images/l050.jpg',title:'戴尔原装DELL latitude E5280 E5480 E7280',mon:'￥820.0'},{
	src:'images/l051.jpg',title:'永久山地自行车水瓶架放水杯的架子固定架',mon:'￥9.9'},{
	src:'images/l052.jpg',title:'1李宁专柜正品 新款 女子透气溯溪鞋 户外鞋',mon:'￥169.0'},{
	src:'images/l053.jpg',title:'瑞士浪琴律雅系列石英女士手表皮带腕表',mon:'￥5525.0'},{
	src:'images/l054.jpg',title:'美国直邮Puma/彪马 E028Y女运动裙连衣裙',mon:'￥1029.0'},{
	src:'images/l055.jpg',title:'y比瑞吉开饭乐德克萨斯牛排牛肉成犬粮1.6kg',mon:'￥62.0'},{
	src:'images/l056.jpg',title:'戴尔DELL USB-C 转HDMI/VGA/以太网/USB ',mon:'￥278.0'},{
	src:'images/l057.jpg',title:'The North Face/北面女羽绒服鹅绒中长款',mon:'￥3339.0'},{
	src:'images/l058.jpg',title:'IRIS/爱丽思爱丽思 蓝色 无盖塑料垃圾桶 ',mon:'￥14.0'},{
	src:'images/l059.jpg',title:'爱丽思有盖塑料收纳箱SCB-15L小号整理箱',mon:'￥26.0'},{
	src:'images/l060.jpg',title:'The North Face/北面女棉马甲保暖防水防风',mon:'￥1459.0'},{
	src:'images/l061.jpg',title:'The North Face/北面男马甲厚款针织立领休闲',mon:'￥1249.0'},{
	src:'images/l062.jpg',title:'日本爱丽丝扁平塑料小号床底收纳储衣箱家用',mon:'￥78.0'},{
	src:'images/l063.jpg',title:'3M口罩 9021A 可折叠式颗粒物防护口罩防尘',mon:'￥4.5'},{
	src:'images/l064.jpg',title:'天堂NF-3雨衣防风成人男女休闲户外风衣雨衣',mon:'￥65.0'},{
	src:'images/l065.jpg',title:'美国直邮THE NORTH FACE/北面 E143Y女户',mon:'￥1329.0'},{
	src:'images/l066.jpg',title:'美国3M净水器 BEV120滤芯 HF20滤芯 ',mon:'￥480.0'},{
	src:'images/l067.jpg',title:'专柜原装正品 ZIPPO打火机耗材-芝宝专用',mon:'￥5.0'},{
	src:'images/l068.jpg',title:'美国直邮NEW BALANCE/新百伦童鞋',mon:'￥979.0'},{
	src:'images/l069.jpg',title:'卡西欧运动手表太阳能学生户外防水双显电子',mon:'￥328.0'},{
	src:'images/l070.jpg',title:'Braun/博朗 炫发护色 陶瓷恒温 防褪色损伤',mon:'￥396.0'},{
	src:'images/l071.jpg',title:'The North Face/北面男风衣外套连帽中长款工',mon:'￥2439.0'},{
	src:'images/l072.jpg',title:'包邮 3M经典系列 656多色可选 便条纸 便签纸本',mon:'￥62.0'},{
	src:'images/l073.jpg',title:'3M Littmann通用听诊器专业医用双头双膜片',mon:'￥980.0'},{
	src:'images/l074.jpg',title:'美国直邮THE NORTH FACE/北面10251566女',mon:'￥619.0'},{
	src:'images/l075.jpg',title:'The North Face/北面女卫衣外套连帽开衫加厚',mon:'￥1799.0'},{
	src:'images/l076.jpg',title:'The North Face/北面男触屏手套弹力加绒',mon:'￥839.0'},{
	src:'images/l077.jpg',title:'美国直邮Skechers/斯凯奇13832 GOwalk',mon:'￥1059.0'},{
	src:'images/l078.jpg',title:'美国直邮Skechers斯凯奇76987男户外工作耐磨',mon:'￥1119.0'},{
	src:'images/l079.jpg',title:'The North Face北面冬季加厚抗寒保暖休闲裤',mon:'￥2169.0'},{
	src:'images/l080.jpg',title:'TheNorthFace/北面 女款 短款羽绒服 CTW1',mon:'￥849.0'},{
	src:'images/l081.jpg',title:'拓朴大卫原装拖把头墩布头好好拖替换头5个装',mon:'￥50.0'},{
	src:'images/l082.jpg',title:'美国直邮THE NORTH FACE/北面10285324女',mon:'￥3689.0'},{
	src:'images/l083.jpg',title:'Adidas/阿迪达斯卫衣男连帽柔软纯色休闲',mon:'￥1299.0'},{
	src:'images/l084.jpg',title:'联想LT2641粉盒LJ2600D 2400 M7600D',mon:'￥249.0'},{
	src:'images/l085.jpg',title:'Adidas/阿迪达斯T恤男纯色连帽短袖透气',mon:'￥1019.0'},{
	src:'images/l086.jpg',title:'THE NORTH FACE/北面女连帽防风防水中长款',mon:'￥2129.0'},{
	src:'images/l087.jpg',title:'雅戈尔长袖衬衫男士法兰绒休闲纯棉磨毛格子',mon:'￥375.0'},{
	src:'images/l088.jpg',title:'美国直邮THE NORTH FACE/北面10285136',mon:'￥2069.0'},{
	src:'images/l089.jpg',title:'Adidas/阿迪达斯棒球衫男浅灰色休闲夹克外套',mon:'￥1139.0'},{
	src:'images/l090.jpg',title:'美国直邮THE NORTH FACE/北面 B4932T',mon:'￥1209.0'}
	]*/

for(var i=0;i<list.length;i++){
	var tag=$('.con .tent8 ul li').eq(0).clone(true);
	if(i==0) $('.con .tent8 ul').html('')
	tag.children('img').attr('src',list[i].src);
	tag.children('.zi').html(list[i].title);
	tag.children('.mon').html(list[i].mon);
	$('.con .tent8 ul').append(tag)
}


// 登录
$('.header .right .r_2').click(function(){
			$('main').show();
		});
