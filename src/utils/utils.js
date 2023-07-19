
export function findById(arr,id){
    for(let i = 0; i < arr.length; i++){
        if(arr.id && arr.id === id){
            return arr[i];
        }
    }
}