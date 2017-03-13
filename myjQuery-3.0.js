/**
 * Created by wei on 2017/3/10.
 */
// 利用自调函数优化全局域命名空间
(function (global) {
  /*  工厂函数：返回值是jQuery对象；作用使用选择器定位页面元素；将dom对象
    转换成JQuery对象；创建html页面中的元素
    */
    var jQuery =function (selector) {
        // selector为string类型
        // 创建jQuery对象
        var jquery=new JQUERY();
      // 创建html页面元素
      //   charAt() 方法可返回指定位置的字符。
        if (selector.charAt(0)==="<"&&
        selector.charAt(selector.length-1)===">"&&
        selector.length>=3){
// 实现创建html页面元素的逻辑代码
        }
    // 封装选择器的用法例如id#，claas.
        if (selector.substring(0,1)=='#'){
            var elemId=selector.substring(1);
            var element=document.getElementById(elemId);
            jquery.push(element);
        }else if (selector.substring(0,1)=='.'){
            var className=selector.substring(1);
            var elements=document.getElementsByClassName(className);j
            for (var i = 0; i < elements.length; i++) {
                 jquery.push(elementsl[i]) ;
            }
        }else {
            // 封装元素选择器
            var elementsName=document.getElementsByTagName(selector);
            for (var i = 0; i < elementsName.length; i++) {
                jquery.push(elementsName[i]);
            }
        }
        return jquery;

    }
/*创建jquery对象的构造函数
*/
function  JQUERY() {}
    JQUERY.prototype=new  Array();
    // 封装get(index)方法；
    JQUERY.prototype.get=function (index) {
        return this[index];
    }
    // val()方法：设置和获取  设置$().val(value)和获取$.val()
    JQUERY.prototype.val=function (value) {
        if (value){
            this[0].value=value;
            return this;
            // 返回当前jquery对象

        }else {
        return this[0].value;
        }
    }
    // 封装text（）方法
JQUERY.prototype.text=function (text) {
    if (text){
        if (window.navigator.userAgent.toLowerCase().indexOf('fixfox')==-1){
            for (var i = 0; i <this.length; i++) {
                this[i].textContent=text;
            }
        }else {
            for (var i = 0; i < this.length; i++) {
                this[i].innerText=text;
            }
        }
    }else {
        if (window.navigator.userAgent.toLowerCase().indexOf('fixfox')==-1){
            for (var i = 0; i < this.length; i++) {
             this[i]=this[i].textContent;
            }
        }else {
            for (var i = 0; i < this.length; i++) {
                this[i]=this[i].innerText;
            }
        }
        return this;
    }
}

// 封装html（）方法
JQUERY.prototype.html=function (html) {
    if (html){
        for (var i = 0; i < this.length; i++) {
          this[i].innerHTML=html;
        }
    }else {
        for (var i = 0; i < this.length; i++) {
            this[i]=this[i].innerHTML;

        }
    }
    return this;
}
//封装css()方法
    JQUERY.prototype.css=function (name,value) {
        if (value){
            // style[name]是css样式名称
            this.style[name]=value;
        }else {
            return this[0].style[name];
        }
    }
    // 封装each()方法
    JQUERY.prototype.each=function (fu) {
        // fu是函数里面需要传索引和dom元素
        for (var i = 0; i < this.length; i++) {
            fu(i,this[i]);
        }
    }
    //封装inArray（）方法
    JQUERY.prototype.inArray=function (value) {
        for (var i = 0; i <this.length; i++) {
            if (this[i]==value){
                return i;
            }
            else {
                return -1;
            }
        }
    }
    //封装makeArray()方法将jquery对象转换为数值
    JQUERY.prototype.makeArray=function () {
        var arr=new Array();
        for (var i = 0; i < this.length; i++) {
           arr[i]=this[i];
        }
        return arr;
    }
    // 将onclick事件封装成click事件
    JQUERY.prototype.click=function (fn) {
        for (var i = 0; i < global.length; i++) {
            var obj = global[i];
            
        }
    }
    
global.$=global.jQuery=jQuery;

})(window);