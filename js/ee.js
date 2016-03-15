addEvent(window,'load',function(){
	var now=98;
	var chouse=document.getElementById('chouse');
	var ji1=document.getElementById('ji1');
	var ji2=document.getElementById('ji2');
	var img=document.getElementsByTagName('img');
	var flyImg=document.getElementById('flyImg');
	var flyImg2=document.getElementById('flyImg2');
	var jiji1=document.getElementById('jiji1');
	var jiji2=document.getElementById('jiji2');
	var showHeroImg=document.getElementById('showHeroImg');	
	var time=document.getElementById('time');
	var star=document.getElementById('star');
		for(var i=1;i<11;i++){
		(function(i){
	    	addEvent(img[i+29],'mouseup',function(){
    		chouse.src=img[i+29].src;
    		mp3.setAttribute('src',"heroSound/"+i+".mp3");
	    	});
	    	addEvent(img[i+29],'mouseover',function(){
	    		showHeroImg.src="showImg/"+i+".jpg";
	    		showHeroImg.style['display']="block";
	    	});
	    	addEvent(img[i+29],'mouseout',function(){
	    		showHeroImg.src="showImg/"+i+".jpg";
	    		showHeroImg.style['display']="none";
	    	})
	   })(i);
	}  
	addEvent(jiji1,'mouseup',function(){
		flyImg.style['display']="block";
		for(var i=0;i<8;i++){
		(function(i){
	    	addEvent(img[i+16],'click',function(){
    		ji1.src=img[i+16].src;
    		jiji1.src=img[i+16].src;
    		flyImg.style['display']="none";
    		if(jiji1.src==jiji2.src){
    			alert("召唤师技能相同！");
    			ji1.src="heroImg/15.png";
    		}
	    	})		
	   })(i);
	}  	
	})
	addEvent(jiji2,'mouseup',function(){
		flyImg2.style['display']="block";
		for(var i=0;i<8;i++){
		(function(i){
	    	addEvent(img[i+22],'mouseup',function(){
    		ji2.src=img[i+22].src;
    		jiji2.src=img[i+22].src;
    		flyImg2.style['display']="none";
    		if(jiji1.src==jiji2.src){
    			alert("召唤师技能相同！");
    			ji2.src="heroImg/15.png";
    		}
	    	})		
	   })(i);
	}  	
	})	
	   var a=setInterval(function(){
             now--;
               time.childNodes[0].firstChild.nodeValue=now;
             if(now==0){
             	clearInterval(a);
             	if(jiji1.src==jiji2.src){
	                alert("召唤师技能相同无法开始！");
             	}else{
             		star.href="readloading.html"; 
	                star.style['background-color']="#CE681A";
             	}
             }
	   },1000);
})
