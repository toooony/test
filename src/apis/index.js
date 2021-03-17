import service from '@/utils/request'

export function testApi (params){
    return service({
        url:'/a/a/a',
        method:'get',
        params
    })
}

export function testApi2 (data){
    return service({
        url:'/a/a/a',
        method:'post',
        data
    })
}