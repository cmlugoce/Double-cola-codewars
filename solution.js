///Solution 1

function whoIsNext(names, r){
   let peopleInLine = names.length;
  let copiesOfEachPerson = 1;
  
  while (r > peopleInLine) {
    r -= peopleInLine;
    copiesOfEachPerson *= 2;
    peopleInLine *= 2;
  }
  
  return names[Math.floor((r - 1) / copiesOfEachPerson) % peopleInLine];
}

///slow performance


/// Solution 2

function whoIsNext(names, r) {
  let l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[Math.ceil(names.length * r / l)-1];
}

/// Solution 3

function whoIsNext(names, r){
  let total=0, n=0, flag=false, len = names.length;
  if(r <= names.length){
    return names[r-1];
  }
  while(total < r && !flag){
    total += len*(Math.pow(2, n))
    n++
    if(total + len*(Math.pow(2, n)) >= r){
      flag = true;
    }
  }
  const numInPlace = Math.pow(2, n);
 const remainder = r - total;
  const place = Math.ceil(remainder/numInPlace);
  return names[place-1];
}
