export const getData = async ()=> {

    const response = await fetch("http://localhost:3003/results");
    return response.json();
}