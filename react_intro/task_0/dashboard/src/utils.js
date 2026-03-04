



export  function getCurrentYear()  {
const date = new Date()
return date.getFullYear();

}

export function getFooterCopy() {
if (isIndex=== true){
    return 'Holberton School'
}else {
    return 'Holberton School main dashboard'
}

}

