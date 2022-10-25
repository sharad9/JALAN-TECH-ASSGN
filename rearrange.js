
	const  rearrayange =(array, n)=> {
	
		let maxIndex = n - 1, minIndex = 0;

	
		let maxEment = array[n - 1] + 1;

		
		for (let index = 0; index < n; index++) {
			
			if (index % 2 == 0) {
				array[index] += (array[maxIndex] % maxEment) * maxEment;
				maxIndex--;
			}

			
			else {
				array[index] += (array[minIndex] % maxEment) * maxEment;
				minIndex++;
			}
		}

		
		for (let index = 0; index < n; index++)
			array[index] = Math.floor(array[index] / maxEment);

		return array;
	}



	let array = [2,4,6,8,10];
	let n = array.length;


	console.log(rearrayange(array, n));



