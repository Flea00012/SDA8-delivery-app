// function comparator is used to do all the comparisons only and separate concerns for program
export function sortFunction(dataArray, key) {


    
    const sortedResults = dataArray.sort((a, b) => (a[key] > b[key] ? 1 : -1));

    return sortedResults.map((item) => <Ckey={item.id} data={item} />);
  
}
