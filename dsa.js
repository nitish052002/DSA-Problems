//  Captalize first letter of each word 
const str = "hello world
let word = ""
let result = ""
let n = str.length 
for (let i = 0 ; i<=n ; i++) {
    if (str[i] === " " ||  i === n) {
        result += word
        word = ""
    }    
    if (i == 0 || str[i-1] == " ")
    {
    word += str[i].toUpperCase()
    continue
    }
    word += str[i]
}

 

 
