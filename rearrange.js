/*
						Time Complexity = O(n)
						Space Complexity = O(1)
						Possible Test Cases = [2,4,6,8,10],[1,2,3,4,5,6,7,8,9],[11,12,13,14,15,16,17]  ..N numbers of sorted array.
*/
const  rearrange =(array, n)=> {
	
		let maxIndex = n - 1;
		let minIndex = 0;

	
		let maxElement = array[n - 1] + 1;

		
		for (let index = 0; index < n; index++) {
			
			if (index % 2 == 0) {
				array[index] += (array[maxIndex] % maxElement) * maxElement;
				maxIndex--;
			}

			
			else {
				array[index] += (array[minIndex] % maxElement) * maxElement;
				minIndex++;
			}
		}

		
		for (let index = 0; index < n; index++)
			array[index] = Math.floor(array[index] / maxElement);

		return array;
	}



	let array = [2,4,6,8,10];
	let n = array.length;


	console.log(rearrange(array, n));



