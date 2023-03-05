// var a = [12,14,16,13,17,81,91,62,45,65,45,81,65,42,32,18,78,55,50]
// function check(item){
//     return item%5==0
// }
// function myFind(arr,fun){
//     for(let item of arr){
//         if(fun(item))
//         return item
//     }
//     return undefined
// }
// function myFindIndex(arr,fun){
//     for(let index in arr){
//         if(fun(arr[index]))
//         return index
//     }
//     return -1
// }
// function myMap(arr,fun){
//     var output = []
//     for(let item of arr){
//         output.push(fun(item))
//     }
//     return output
// }
// function myFilter(arr,fun){
//     var output = []
//     for(let item of arr){
//         if(fun(item))
//         output.push(item)
//     }
//     return output
// }
// console.log(a.find(check))
// console.log(myFind(a,check))
// console.log(a.findIndex(check))
// console.log(myFindIndex(a,check))
// console.log(a.map(check))
// console.log(myMap(a,check))
// console.log(a.filter(check))
// console.log(myFilter(a,check))


// function sample(a,b,...x){
//     console.log(a,b,x)
// }
// sample(10,20)
// sample(10,20,30)
// sample(10,20,30,40)
// sample(10,20,30,40,50)
// sample(10,20,30,40,50,60)
// sample(10,20,30,40,50,60,70)
// sample(10,20,30,40,50,60,70,80,90)



// function sample(a,b,c,d,e,f,g,h){
//     console.log(a,b,c,d,e,f,g,h)
// }
// var x=[10,20,30,40,50,60,70,80]
// sample(...x)



function sample(){
        setTimeout(()=>{
            console.log("Hello World1")
            setTimeout(()=>{
                console.log("Hello World2")
                setTimeout(()=>{
                    console.log("Hello World3")
                    setTimeout(()=>{
                        console.log("Hello World4")
                        setTimeout(()=>{
                            console.log("Hello World5")
                            setTimeout(()=>{
                                console.log("Hello World6")
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)    
        },1000)
    }
    sample()