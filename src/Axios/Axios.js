import axios from "axios"
const instance = axios.create({
    baseURL:'https://moviesverse1.p.rapidapi.com/',
    headers: {
      'x-rapidapi-key': 'fdb0b27bdemsh6c174a2db79ab75p1d3d29jsn6633f3a8fed8',
      'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
    }
});

export default instance