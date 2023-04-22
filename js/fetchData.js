export const fetchData = async () => {
    const url = './json/data.json';//https://tryingrailway-production.up.railway.app/db';
    const data = await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err));
    const response = await data;
    return response
};