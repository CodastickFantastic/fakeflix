export default async function fetchApi(url){
    let data;

    const response = await fetch(url)
    data = await response.json();
    
    return data
}