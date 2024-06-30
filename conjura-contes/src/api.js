import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const registerUser = async(email,password) =>{
    try{
        const response = await api.post('/register',{email,password});
        return response.data;
    }catch(error){
        throw error.response.data;
    }
};

export const loginUser = async(email,password)=>{
    try{
        const response = await api.post('/login',{email,password});
        return response.data;
    }catch(error){
        throw error.response.data;
    }
};

export const getUser = async(id) => {
    try{
        const response = await api.get('/user/${id}');
        return response.data;
    }catch(error){
        throw error.response.data;
    }
};
