export const fetchData = async () => {
    const data = await fetch('https://tryingrailway-production.up.railway.app/db')
    .then(res => res.json())
    .then(data => data)
    .catch((err) => console.log(err))
    const response = await data;
    return response
};