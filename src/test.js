function josephus(items, k) {
  let res = [];
  let i = 1;
  while (items.length > 0) {
    if (i % k == 0 && i > 0) {
      res.push(items[i + 1]);
      items.splice(i, 1);
    }
    i++;
    if (i > items.length) i = 1;
    console.log(i);
  }
  return res;
}

//josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2); //
//i = 2[1,3,4,5,6,7,8,9,10]

function moveZeros(arr) {
  let zeroes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes.push(arr.splice(i, 1)[0]);
    }
  }
  arr = arr.concat(zeroes);
  return arr;
}
