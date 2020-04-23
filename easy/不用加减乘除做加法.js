var add = function (a, b) {
    while (b!=0) {
        let  temp = (a&b)<<1;
        a ^=b;
        b = temp;
    }
    return a;
};



console.log(add(0,0))