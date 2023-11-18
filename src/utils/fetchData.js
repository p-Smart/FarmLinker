import axios from "axios"


const objectToFormData = (obj={}) => {
    const formData = new FormData()

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key])
        }
    }

    return formData
}

export const getUserId = () => {
    try{
        const userData = localStorage.getItem('userData')
        return JSON.parse(userData)?._id
    }
    catch(err){
        return null
    }
}

export const fetchData = async (prop = {
        endpoint: '',
        payload: {},
        useFormData: false,
    }) => {
    const {endpoint, payload, useFormData} = prop

    const userId = getUserId()

    const formData = {
        ...payload,
        ...userId && {
            _id: userId
        }
    }

    try{
        const {data} = !useFormData ? 
        await axios.post(`/api/${endpoint}`, formData) :
        await axios.post(`/api/${endpoint}`, objectToFormData(formData))


        if (data?.success){
            return data
        }
        else{
            throw new Error(data?.message || 'An error occured')
        }
    }
    catch(err){
        if(err?.response?.data){
            throw new Error(err?.response?.data?.message)
        }
        else{
            throw new Error(err.message)
        }
    }
}
