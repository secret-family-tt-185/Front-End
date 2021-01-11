import axios from "axios"



export const axiosWithAuth = () => {

    const token = localStorage.getItem('token');
    
    return axios.create({
    baseURL: "https://secret-family.herokuapp.com", 
    headers: {
        authorization: `${token}`
    }
})
}

export const axiosWithAuth1 = () => {

    const token = localStorage.getItem('token');
    
    return axios.create({
    baseURL: "https://secret-family.herokuapp.com", 
    headers: {
        authorization: `${token} 2`
    }
})
}


