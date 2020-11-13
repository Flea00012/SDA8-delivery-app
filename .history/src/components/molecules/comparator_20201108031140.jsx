// function comparator is used to do all the comparisons only and separate concerns for program
export function comparator(dataArray, value) {

  
  return dataArray.filter((item) => item === value);
}
