export default getFeed = (feedType) => {
    //returns 21 entries, release year >= 2010, sorted by title
    fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
    .then(response=>response.json)
    .then(data=>console.log(data))
}