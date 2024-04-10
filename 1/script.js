function iterator(lowerBound, upperBound){
  if(lowerBound > upperBound) return false;

  for(let i = lowerBound; i <= upperBound; i++){
    if(i%5===0 && i%3===0){
      console.log('CatDog');
    }
    else if(i%3===0){
      console.log('Cat');
    }
    else if(i%5===0){
      console.log('Dog');
    }
    else{
      console.log(i);
    }
  }
};

iterator(-50, 101);