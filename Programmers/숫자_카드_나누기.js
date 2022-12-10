function solution(arrayA, arrayB) {
  const candidatesOfA = getAllCommonDivisorsOf(arrayA).sort((a, b) => b - a);
  const candidatesOfB = getAllCommonDivisorsOf(arrayB).sort((a, b) => b - a);
  
  let ret = 0;
  for(const candidate of candidatesOfA) {
      if(!isAllNotDivisible(candidate, arrayB)) continue;
      ret = candidate;
      break;
  }
  for(const candidate of candidatesOfB) {
      if(!isAllNotDivisible(candidate, arrayA)) continue;
      ret = Math.max(ret, candidate);
      break;
  }
  return ret;
}

function isAllNotDivisible(divider, array) {
  for(const element of array) {
      if(element % divider === 0) return false;
  }
  return true;
}

function getAllDivisorsOf(num) {
  const ret = [];
  for (let i = 2; i * i <= num; i++) {
      if (num % i !== 0) continue;
      ret.push(i);
      ret.push(num / i);
  }
  ret.push(num);
  return ret;
}

function getAllCommonDivisorsOf(array) {
  let candidateList = getAllDivisorsOf(array.sort()[0])
  const ret = [];
  for (const candidate of candidateList) {
      let completed = true;
      for (const element of array) {
          if (element % candidate === 0) continue;
          completed = false;
          break;
      }
      if (completed) ret.push(candidate)
  }
  return ret;
}