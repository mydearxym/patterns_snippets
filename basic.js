

var func = function(bb){
    // console.log("func say: ",  this.name);
    console.log("bb: ",  bb);
};


// var xx = func.apply(null, ["aa"]); // => aa

Function.prototype.before = function(bfn){
    var self = this;
    console.log("before this: ",  this);
    console.log("before self: ",  self);

	return function(){
        //console.log("before inside this: ",  this);
        console.log("arguments: ",  arguments);
        bfn.apply(this, arguments);
        return self.apply(this, arguments);
    };
};

Function.prototype.after = function(afn){
    var self = this;

    return function(){
        var ret = self.apply(this, arguments);
        afn.apply(this, arguments);
        return ret;
    };
};

var func2 = function(){
    console.log(2);
};

func2 = func2.after(function(){
    //console.log("before");
    console.log("after");
}).before(function(){
    console.log("before");
});

func2();


