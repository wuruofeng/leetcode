/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i = 0;
    var j = nums.length - 1;
    while(i < j) {
        var sum = nums[i] + nums[j];
        if(sum == target) {
            return [nums[i], nums[j]]
        }else if(sum < target){
            i++
        }else {
            j--
        }
    }
};
