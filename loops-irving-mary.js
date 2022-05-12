// Create a for loop that logs each number from 1 - 20.
// for(let index = 1; index < 21 ; index ++){
//   console.log(index)
// }
// Create a for loop that logs every other number from 1 - 20.
//  for(let index = 0; index < 21 ; index += 2){
//    console.log(index)
// }

// Create a for loop that logs the result of each number from 1 - 20 tripled.

// for(let index = 0; index < 21; index ++){
//   console.log(index * 3)
// }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for(let index =0; index < 21; index ++){
  if(index % 2 === 1){
    console.log("odd")
  }else{
    console.log(index)
  }
}
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
