// function comparator is used to do all the comparisons only and separate concerns for program
export function Sortin(dataArray) {


    
    const sortedResults = dataArray.sort((a, b) => (a[key] > b[key] ? 1 : -1));

    return sortedResults.map((item) => <Card key={item.id} data={item} />);
  
}
