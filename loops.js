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

let countdown = 100;

while (countdown > 0 ){
  console.log(--countdown)
  return('done')
}