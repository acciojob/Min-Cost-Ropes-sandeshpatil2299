function mincost(arr)
{ 
//write your code here
// return the min cost
	const sorted = [...arr].sort((a, b) => a - b); 
  const sums = [];                                 
  let i = 0;
  let j = 0;
  let total = 0;

  const takeSmallest = () => {
    if (i < sorted.length && (j >= sums.length || sorted[i] <= sums[j])) {
      return sorted[i++];
    }
    return sums[j++];
  };

  for (let remaining = sorted.length; remaining > 1; remaining--) {
    const sum = takeSmallest() + takeSmallest();
    total += sum;
    sums.push(sum);
  }

  return total;
}

module.exports=mincost;
