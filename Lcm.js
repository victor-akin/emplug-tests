function Lcm(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let lcm = max;
  
    let smallestCommon = function(low, high) {
      function scm(l, h) {
        if (h % l === 0) {
          return h;
        } else {
          return scm(l, h + high);
        }
      }
      return scm(low, high);
    };
  
    for (let i = min; i <= max; i += 1) {
      lcm = smallestCommon(i, lcm);
    }
  
    return lcm;
  }
  
  console.log(Lcm([5,1,6,7,8,9,])) 