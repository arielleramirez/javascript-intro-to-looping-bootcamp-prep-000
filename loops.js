function forLoop(array){
   for (let i = 0; i < 25; i++){
     if(i === 1){
       array.push(`I am a strange loop.`);
     }
     else {
       array.push(`I am ${i} strange loops.`);
     }

}
return array;
}

function whileLoop(array){
let countdown = 58;

while (countdown > 0 ){
  console.log(--countdown)
  return('done')
}
}