//------------------------------------------------


function sumOfDistinctEl() {
	let arr1= [3,1,7,9];
	let arr2= [2,4,1,9,3];
  
// comparaison
  let sum = 0;
  for (let i = 0; i < arr1.length; i++){ 
	let num = arr1[i];
	if(!arr2.includes(num)){ // not includes
	  sum = sum + num;
	}
  }
  for (let i = 0; i < arr2.length; i++){
	let num = arr2[i];
	if(!arr1.includes(num)){
	  sum = sum + num;
  }
  } 
  return sum;
  }
  
  console.log(sumOfDistinctEl(('arr1','arr2')));