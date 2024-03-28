type numType =  number | string | boolean
type objType = { "name" : string , "age" : number , "gender" : string , "country" : string}

let x : numType = 12
let y : numType | undefined = '嗨'

let obj :objType = {
    "name":"Jack",
    "age" : 18,
    "gender" : "male",
    "country" : "ROC",
}