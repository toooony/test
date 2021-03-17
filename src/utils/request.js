import axios from 'axios'

const service = axios.create({
    baseURL:process.env.VUE_APP_BASE_URL,
    timeout: 60 * 1000
})

service.interceptors.request.use(
    config => {
        // 是否有token的判断
        // if(localStorage.getItem('token')){
        //     config.headers.Authorization = 'Bearer'+ localStorage.getItem('token')
        // }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    res => {
        if(res.status !== 200){
            return Promise.reject(new Error(res))
        }else{
            return res.data
        }
    },
    error => {
        console.log(error.response)
        throw error.response
    }
)

export default service
