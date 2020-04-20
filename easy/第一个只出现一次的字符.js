var firstUniqChar = function (s) {
    let arr = s.split('');
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if (map.get(arr[i])==null) {
            map.set(arr[i],1);
        }else{
            map.set(arr[i],map.get(arr[i])+1);
        }
    };
    for (const iterator of map) {
        if (iterator[1]==1) {
            return iterator[0];
        }
    }
    return ' ';
};

console.log(firstUniqChar(''));
