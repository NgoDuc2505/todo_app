
export const handleLocalStorage = (state)=>{
    if(state){
        localStorage.setItem('todoArr',JSON.stringify(state))
    }
}

export const handleGetDataFromLocal =()=>{
    let data = JSON.parse(localStorage.getItem('todoArr'))
    if(data !== null){
        return data;
    }else{
        return undefined;
    }
}