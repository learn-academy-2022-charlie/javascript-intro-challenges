// Create a for loop that logs each number from 1 - 20.

	for(let i = 1; i <= 20; i++){
		console.log(i)
	}

// Create a for loop that logs every other number from 1 - 20.

	for(let i = 1; i <= 20; i = i + 2){
		console.log(i)
	}

// Create a for loop that logs the result of each number from 1 - 20 tripled.

for(let i = 1; i <= 20; i++ ){
		console.log(i*3)
	}

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

	for(let i = 1; i <= 20;i++){
		if(i % 2 === 0){
			console.log("even", i)
		}else{
			console.log("odd", i)
		}

	}

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc 