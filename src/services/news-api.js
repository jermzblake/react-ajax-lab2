export async function getNews () {
    let result = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=0c512316c1064209a9b1517022308659`).then(res => res.json())
    return result
}