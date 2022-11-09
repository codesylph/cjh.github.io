/* 제이쿼리연결 */
$(function(){
	
	//가로사이즈 자동인식 설정 - 삼선메뉴 사라지는 오류문제 해결]
	$(window).resize(function(){
		var w = $(window).width();//윈도우 참의 가로사이즈를 구해서 w변수에 저장
		if(w>=1200){
			$("nav").css({
				"right":"10%",
				"top":"50%",
				"transform":"translateY(-50%)"	/* 중앙위치 */
			});
		}else{	
			$("nav").css({
				"right":"-50%",
				"top":"0%",
				"transform":"translateY(0%)"	/* 중앙위치 */
			});
		}
	});
		//이벤트 휠 반응 시 다음페이지로 이동
		window.addEventListener("wheel", function(e){
		e.preventDefault();
		},{passive : false});	
		
		var $html = $("html");
	 
		var page = 1;
	 
		var lastPage = $(".content").length;
		 
		$html.animate({scrollTop:0},10);
		
		$(window).on("wheel", function(e){
	 
		if($html.is(":animated")) return;
	 
		if(e.originalEvent.deltaY > 0){
			if(page == lastPage) return;
	 
			page++;
			
		}else if(e.originalEvent.deltaY < 0){
			if(page == 1) return;
	 
			page--;
		}
		var posTop = (page-1) * $(window).height();
	 
		$html.animate({scrollTop : posTop});
	});	
	
	//topBtn : 감추기/보이기 script생성 , header의 배경색 바뀌기
	$("#topBtn").fadeOut();
	
	//내 윈도우 창에서 스크롤이 발생하거든 topBtn이 보여라
	$(window).scroll(function(){
		
		if($(this).scrollTop()>=300){//스크롤 이벤트 발생 시 위값이 300이상이면
			$("#topBtn").fadeIn(500);		
			$("header").css("background","transparent");
			$("header").css("box-shadow","0 0 5px rgba(0,0,0,0.3)");
			$("nav a").css("color","#333");
		}else{
			$("#topBtn").fadeOut(500);
			$("header").css("background","rgba(0,0,0,0.7)");
			$("nav a").css("color","white");
			$("header").css("box-shadow","none");			
		}
	});
	//모바일 환경에서 삼선메뉴 클릭 시 전체메뉴 보이기 / 감추기
	//현재의 상태(삼선메뉴상태)를 s=1(개발자가 임의로 설정)
	//삼선메뉴 클릭 시 보이는 상태를 s=0(개발자가 임의로 설정)	
	var s=1;
	$(".mAllMenu>ul").click(function(){//mAllMenu의 ul을 클릭하거든 
		$(this).toggleClass("mX"); //한번 누르면x , 두번 누르면 삼선	
		if(s==1){
			$("nav").stop().animate({right:0},500); //하던걸 멈추고 애니메이션 기능을 수행해라
			s=0;
		}else{	
			$("nav").stop().animate({right:"-50%"},500);
			s=1;
		}
	});
	
	//주메뉴 클릭 시 해당페이지로 이동할 때 메뉴 포커스 설정과 부드럽게 이동
	$("nav ul li a"). click(function(){
		$("nav ul li a").removeClass("on");
		$(this).addClass("on");
		$("body").scrollTo($(this).attr("href"),500);
		return false;
	});
	
	//사이드메뉴 클릭 시 해당페이지로 이동할 때 메뉴 포커스 설정과 부드럽게이동
	$("aside ul li"). click(function(){
		$("aside ul li").removeClass("onState");
		$(this).addClass("onState");
		$("body").scrollTo($(this).attr("href"),500);
		return false;
	});

	$("#topBtn a").click(function(){
		$("body").scrollTo($(this).attr("href"),500);
	});
	
	//마우스 스크롤 시 메뉴의 포커스 설정
	$(window).scroll(function(){
		
		//스크롤된 화면의 top의 값을 구하여 sct변수에 기억
		var sct=$(window).scrollTop();
		//alert(sct); - 스크롤탑값 확인작업
				
		var menu = $("nav ul li a");
		var content = $("#wrap>section");
		var state = $("aside ul li");
		
		//0번째(#home)에 위치한 값이 크거나 같으면
		if(sct>=content.eq(0).offset().top){
			menu.removeClass("on");
			menu.eq(0).addClass("on");
			state.removeClass("onState");
			state.eq(0).addClass("onState")
		}
		
		if(sct>=content.eq(1).offset().top){
			menu.removeClass("on");
			menu.eq(1).addClass("on");
			state.removeClass("onState");
			state.eq(1).addClass("onState")
			
			$("#about .left").css("left","0");
			$("#about .right").css("right","0");			
		}else{
			$("#about .left").css("left","-50%");
			$("#about .right").css("right","-50%");			
		}
		if(sct>=content.eq(2).offset().top){
			menu.removeClass("on");
			menu.eq(2).addClass("on");
			state.removeClass("onState");
			state.eq(2).addClass("onState")
			
			$("#skills .left").css("transform","scale(1)");
			$("#skills .right").css("transform","scale(1)");	
		}else{
			$("#skills .left").css("transform","scale(0)");
			$("#skills .right").css("transform","scale(0)");
		}
		
		if(sct>=content.eq(3).offset().top){
			menu.removeClass("on");
			menu.eq(3).addClass("on");
			state.removeClass("onState");
			state.eq(3).addClass("onState")
			
			$("#work .left").css("height","100%");
			$("#work .right").css("height","100%");
		}else{
			$("#work .left").css("height","0");
			$("#work .right").css("height","0");
		}
		if(sct>=content.eq(4).offset().top){
			menu.removeClass("on");
			menu.eq(4).addClass("on");
			state.removeClass("onState");
			state.eq(4).addClass("onState")
			
			$("#contact .left").css("width","45%");
			$("#contact .right").css("width","45%");
		}else{
			$("#contact .left").css("width","0");
			$("#contact .right").css("width","0");
		}
	});
});

