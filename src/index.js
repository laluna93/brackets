module.exports = function check(str, bracketsConfig) {
    const obj = Object.fromEntries(bracketsConfig)
    console.log(obj)
    const left = ['(', '{' ,'[', '1', '3', '5', '7', '8', '|']
    let arr =[]
    for(let i = 0; i<str.length; i++){
    let simbol = str[i]
     if(obj[arr[arr.length-1]]===simbol){
     arr.pop()
        }else if(left.includes(simbol)){
            arr.push(simbol)
            }  else {
                if(arr.length ===0){
                return false
        }
        }
    }
    return arr.length===0
}
