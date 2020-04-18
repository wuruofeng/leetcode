var reverseLeftWords = function (s, n) {
    const arr = s.split('');
    const arr_index = [];
    while (n--) {
        let i = arr.shift();
        arr_index.push(i);
    }
    console.log(arr_index);
    const ans = arr.concat(arr_index);
    return ans.join('');
};


console.log(reverseLeftWords("wuruofeng", 1));

// 'abc'=>1=>'bca'


