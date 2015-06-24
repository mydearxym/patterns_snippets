
// 全局函数 this 都是 window/global
// 使用 new 的构造函数 this 指向对象
// 闭包里面返回的 this 都是指向 global/window

// function a() {
//     //alert(this == window);
//     var that = this;

// 	console.log("this 1: ", this == global);

// 	var func = function() {
//         console.log(this == global);
//         console.log("that: ", that == global);
//     };
//     return func;
// }

// var b = a();
// b();

// var c = new a();
// c();


// 使用prototype扩展方法可以使用this获取到源对象的实例，私有字段无法通过原型链获取：

function a() {
	this.fieldA = "I'm a field";
	var privateFieldA = "I'm a var";
}

a.prototype.ExtendMethod = function(str) {
    console.log(str + " : " + this.fieldA);
    console.log(privateFieldA);   //出错
};

var b = new a();
b.ExtendMethod("From prototype");




