export const fetchData = async () => {
    const url = 'https://humorous-angry-detail.glitch.me/comida';
    const data = await fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch((err) => console.log(err));
    const response = await data;
    return response
};