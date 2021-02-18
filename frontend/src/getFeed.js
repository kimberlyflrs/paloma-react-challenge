const getFeed = (feedType) => {
    //returns 21 entries, release year >= 2010, sorted by title
    fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
    .then(response=>response.json())
    .then(data=>{

       var filteredSet = data.entries.filter(item =>((item.releaseYear >= 2010)&&(item.programType === feedType)));
      // console.log(filteredSet)
        var entries = filteredSet.slice(0,21);
        entries.sort(function(a,b){
            return (a.title.toUpperCase()<b.title.toUpperCase()) ? -1 : (a.title.toUpperCase()>b.title.toUpperCase()) ? 1 : 0;
        })
       // console.log(entries);
        return entries
    }
    )
}

export default getFeed;