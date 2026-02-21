export async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');

    if (!response.ok) {
        throw new Error("Error en la petición");
    }

    const data = await response.json();
    // console.log(data)
    return data;
}