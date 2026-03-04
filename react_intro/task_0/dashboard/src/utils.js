



const getCurrentYear  = ()=>{
const date = new Date()
return date.getFullYear();

}
getCurrentYear()
const getFooterCopy = (isIndex)=>{
if (isIndex=== true){
    return 'Holberton School'
}else {
    return 'Holberton School main dashboard'
}

}
getFooterCopy(false);
