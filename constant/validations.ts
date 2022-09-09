export const EMAIL=(value:string):boolean=>{
    if(!value || !value.includes("@")) return false
    return true
}

export const PASSWORD = (value:string):boolean=>{
        
    if(!value || value.trim().length < 5)return false
    return true

}