var replaceSpace = function (s) {
    return s.replace(/\s/g, "%20");
};



let s = 'a a a';
console.log(s.replace(/\s/g,'%20'))