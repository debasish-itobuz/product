import axios from "axios";

const URL = 'http://localhost:8000';

export const addCategory = async(data)=>{
    try{
        return await axios.post(`${URL}/addCatagory`, data)

    }
    catch(err){
        console.log("Error while call Api", err)
    }
}