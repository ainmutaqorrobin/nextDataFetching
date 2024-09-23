function sortArrayDescending(a) {
  let result = [];
  let temp;
  let highest = Number.NEGATIVE_INFINITY;
  secondHighest = Number.NEGATIVE_INFINITY + 1;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > highest) {
      secondHighest = highest;
      highest = a[i];
    } else if (a[i] > secondHighest && a[i] < highest) {
      secondHighest = a[i];
    }
    result.push(a[i]);
  }
  console.log(secondHighest);
}

sortArrayDescending([1, 2, 3, 7, 8, 9, 4, 5, 6, 2, 3, 4]);
