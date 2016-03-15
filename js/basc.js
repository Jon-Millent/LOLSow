//绑定函数兼容

function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else{
		obj.attachEvent('on'+type,fn);
	}
}
//删除绑定兼容
function removeEvent(obj,type,fn){
	if(obj.removeAttribute){
		obj.removeAttribute(type,fn,false);
	}else{
		obj.detachEvent('on'+type,fn);
	}
}
//获取目标事件兼容
function objEvent(event){
	return event||window.event;
}
//字符键盘输入兼容
function passkeypress(event){
	if(event.charCode){
		return event.charCode;
	}else{
		return event.keyCode;
	}
}
//鼠标兼容
function passMouse(event){
	var e=event || window.event;
	if(event){
		return e.button;
		}else{
			switch(e.button){
				case 1:
				return 0;
				case 4:
				return 1;
				case 2:
				return 2;
				}
			}
}
//阻止默认行为
function Default(event){
	var a=event||window.event;
	if(a.preventDefault){
		a.preventDefault();
		
	}else{
		returnValue=false;
	}
}