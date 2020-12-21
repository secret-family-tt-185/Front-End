import Axios from "axios"



const axiosWithAuth = () => {

    const token = window.localStorage.getItem('token');
    
    return Axios.create({
    baseURL: "http://localhost:5000", //will need to update
    headers: {
        authorization: token
    }
})
}

export default axiosWithAuth