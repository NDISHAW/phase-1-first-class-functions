function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function Fn(){

    };
};

function returnsAnAnonymousFunction(){
    return ()=>console.log("How about this arrow function");
}