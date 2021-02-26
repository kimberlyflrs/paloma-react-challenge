const feedData = async (feedType) =>{

    return await fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
    .then((response) =>{
        var data = response.json();
        return data
    })
    .then(data=>{
        var filteredSet = data.entries.filter(item =>((item.releaseYear >= 2010)&&(item.programType === feedType)));
        var entries = filteredSet.slice(0,21);
        entries.sort(function(a,b){
            return (a.title.toUpperCase()<b.title.toUpperCase()) ? -1 : (a.title.toUpperCase()>b.title.toUpperCase()) ? 1 : 0;
        })
        return entries;
    })
    .catch((error) => {
        return [];
        }
    )
}

export default feedData;