var x;

function foo(a, b, c){
    console.log(a, b ,c);
    console.log(arguments);
    console.log(arguments[1]);
    console.log(arguments.length);
}

x= foo;

x(23,12);