var findContinuousSequence = function (target) {
    let index = (target % 2 == 0)? (parseInt(target / 2)) : (parseInt(target / 2)+1);
    let ans=0;
    let arr = [];
    let temp = [];
    for(let i=1;i<=index;i++){
        ans+=i;
        temp.push(i);
        while (ans>target) {
            ans-=temp[0];
            temp.shift();
        }
        if (ans==target) {
            temp.length >=2 && arr.push([...temp]);
        }
    }
    return arr;    
};
