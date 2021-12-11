  //----------------------------------------------------------------

  //insertion_Sort algorithm


  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let v = arr[i]
      let j = i -1;
      for (j = i - 1; j >= 0 && arr[j] > v; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = v
    }
    return arr
  }
  console.log(insertionSort([2, 1, 3, 7, 5 , 0 , 4, 6, 9, 10, 8]))