// Simple interest

// var p = 657890
// var t = 5
// var r = 12.36
// var si = p*r*t/100
// var total = si+p
// var emi = total/(t*12)
// console.log(
//     `   
//         Principal Amount   : ${p}
//         Rate               : ${r}
//         Time               : ${t}
//         Simple Interest    : ${Math.round(si)}
//         Total Amount       : ${Math.round(total)}
//         EMI Amount         : ${Math.round(emi)}
// `)
// console.log(si);





//WAP to check wether to number even or odd//

// var num=parseInt(prompt("enter the number"))
// if(num%2==0)
//   document.write(`${num} is even`)
// else
//   document.write(`${num} is odd`)





//WAP to check a persion can vote or not//

// var age=parseInt(prompt("enter the age of persion"))
// if(age>=18)
//   document.write(`${age} is eigibal for vote`)
// else
//   document.write(`${age} is not eigibal for vote`)




//WAP  to check wether a number is perfect square number or not//

// var num=parseInt(prompt("enter the number"))
// var n=parseInt(num**0.5)
//  if(n*n==num)
//    document.write(`${num} is perfect squre`)
// else
//    document.write(`${num} is not perfect squre`)



//WAP to print day name when user enter any day number//


// var day=parseInt(prompt("enter the number"))
// if(day==1)
// document.write(`${day} Monday`)
//  else if(day==2)
//  document.write(`${day} Tuesday`)
// else if(day==3)
// document.write(`${day} Wednesday`)
// else if(day==4)
// document.write(`${day} Thursday`)
// else if(day==5)
// document.write(`${day} Friday`)
// else if(day==6)
// document.write(`${day} Saturday`)
// else 
// document.write(`${day} Sunday`)



//WAP to create the simple calculator


// var result
// var op = prompt("Enter op( either +, -, * or /): ")
// var num1 = parseFloat(prompt("Enter first number: "))
// var num2 = parseFloat(prompt("Enter second number: "))
// if (op == '+') {
//    result = num1 + num2
//    document.write(`${result} `)
// }
// else if (op== '-') {
//     result = num1 - num2
//     document.write(`${result} `)
// }
// else if (op == '*') {
//     result = num1 * num2
//     document.write(`${result}` )
// }
// else {
//     result = num1 / num2
//     document.write(`${result} `)
// }



// for(var i=1;i<=10;i=++i)
// {
//     console.log(`chandan\n`)
// }



// for(var i=1;i<=10;i++){
//     console.log(`${i} chandan\n`)
// }



//print the prime or not

// var num=Number(prompt("enter the number"))
// var count=0
// for (let i=2;i<=num**0.5;i++){
//     if(num%2===0)
//         count++
//         break

// }
// if(count==0&&num>=2)
// document.write(`${num} is prime number`)
// else
// document.write(`${num} is not prime number`)



//   var num=parseInt(prompt("enter the number "))
//   var rev=0
//   while(num!=0){                     //1234           123          12                    1
//    let r=num%10                      //0*10+4=4       4*10+3=43    43*10+2=432           432*10+1=4321
//    rev=rev*10+r
//     num =parseInt(num/10)           //1234/10=123     123/10=12    12/10=1              1/10=0
//   }
//   document.write(`reverse=${rev}`)




// var num=parseInt(prompt("enter the number "))
// var sum=0
// let i=1
// while(i<=num/2){
// if(num%i==0)
// sum=sum+i
// i++
// }
// if(sum==num)
// document.write(`${num} is perfect number`)
// else
// document.write(`${num} is not perfect number`)



// var num = parseInt(prompt("Enter a the number "))
// var sum = 0
// var temp = num
// while (temp > 0) {
//     let rem = temp % 10
//     sum= rem *rem*rem+sum 
//     temp = parseInt(temp / 10)

// }  
// if (sum == num) {
//     document.write(`${num} is an Armstrong number`)
// }
// else {
//     document.write(`${num} is not an Armstrong number`)
// }



// var rem, temp, final = 0
// var number = Number(prompt("enter the number"))
// temp = number
// while (number > 0) {
//     rem = number % 10                     //121%10=1          12%10=2        1%10=1
//     number = parseInt(number / 10)        //121/10=12         12/10=1        1/10=0
//     final = final * 10 + rem                //0*10+1=1          1*10+2=12      12*10+1=121
// }
// if (final == temp) {
//     document.write("number is Palindrome")
// }
// else {
//     document.write(" number is not palindrome")
// }


// for(let num=1;num<=20;num++){
//          console.log(`Table of ${num} is`)
//          for(let i=1;i<=10;i++){
//            console.log(`${num} * ${i} = ${num*i}`);
//         }
//      }



// for(let num=1;num<=10;num++){
//     for(let i=1;i<=17;i++)
//     {
//         process.stdout.write(`${num*i}\t`);
//     }
//     console.log()
// }



//do while loop

// let i=1
// do{
//    document.write(`${i}=hello world \t<br
//     >`)
//    i++
// }while(i<=20)


//while loop

// let i=1
// while(i<=20){
//    document.write(`${i}=hello world \t<br
//     >`)
//    i++
// }


//for loop

/* for(let i=1;i<=20;  i++){
  document.write(`${i}=hello world \t<br
   >`)
 
} */


//function

//addition of two number 

// function  add(a,b){
// document.write(`Add=${a+b}`)
// }
// add(25,25);.





// function add(a, b) {
//   document.write(`Add=${a + b}`)
// }
// function sample() {
//   add(25, 25);
// }

// sample()



// function add(a, b) {
//   document.write(`Add=${a + b}`)
// }
// function sample() {
//   add(25, 25);
// }

// sample()



// function add() {
//   var a = 10
//   var b = 20
//   var sum = a + b
//   console.log(`sum = ${sum}`)
// }
// function sample() {
//   add()
// }
// sample()


// var a="javascript is a scripting language "
// // var b="react "
// var c="node"
// console.log(a.indexOf(b,c))
// console.log(a.indexOf(" "))
// console.log(a.indexOf("PHP"))
// console.log(a.includes(" "))
//  console.log(a.includes("PHP"))

// let a = "javascript is a scripting language"

// console.log(a.substr(5,15))
//  console.log(a.substring(5,15))
// console.log(a.replace(" ","_"));
// console.log(a.replaceAll(" ","_"));
// console.log(a.split(" "))
//  console.log(a.split("a"))


// var a = "          Hello World     "
// var b = a.trim()
// var c = a.trimStart()
// var d = a.trimEnd()
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
//  console.log(d.length)


// var a = "abcd"
// var b = "abc"
// console.log(a.localeCompare(b))
// console.log(b.localeCompare(a))
// console.log(a.localeCompare(a))

// var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// // console.log(a)
// // console.log(a.slice(5,20))
// console.log(a.slice(20))
// //console.log(a.slice(-20))
//  var a = [1,2,3,4,5]
// // for(let i=0;i<a.length;i++){
// //    console.log(a[i])
// // }

// let i=0
// while(i<a.length){
//   console.log(a[i])
//   i++
// }


//for of loop
// var a=[12,13,122,13,3,1,31,3,243,4]
// for(let i of a){
//      console.log(i);
//    }


//for in loop to find the index value
//var a=[12,13,122,13,3,1,31,3,243,4]
// for(let i in a){
//      console.log(i);
//    }


 //for in loop to find the exjact  valve
// var a=[12,13,122,13,3,1,31,3,243,4]
// for(let i of a){
//      console.log(i);
//    }




//sort()


// var a = ["Nitin","Naman","Aman","Kunal","Ankit","Anil","Sunil"]
// console.log(a)
// function check(a,b){
//   console.log(a,b);
//   return a-b
// }
// // a.sort(check)
// // console.log(a)

// console.log(a)
// a.sort((x,y)=>x-y)
// console.log(a)



/*(1)Map()=yh jo find krna rhta hai usko true or false ke roop me deta hai. (2) Filter()=jo find krna rahta hai usko filter kr ke sb de deta hai.(3) findindex()=yh index find krta hai.(4) find()=yh jo find krna
rahta hai usko find krta hai like even No,odd no,etc.*/

// var a=[13,20,023,2,323,031,321,43434,322,33,33,42,4,3,5,43,5,6,85,3,3]
// function check(num){
//   return num%2==0
// }
// console.log(a)
// console.log(a.map(check))
// console.log(a.find(check));
// console.log(a.findIndex(check));
// console.log(a.filter(check));



// var a  = [21,51,26,7,9,5,13,51,5,5,27,11,5,26,18]
// function check(item){
//     var flag=false
//     for(let i=2;i<=item**0.5;i++){
//       if(item%i==0){
//         flag=true
//         break
//       }
//     }
//     if(flag==false && item>=2)
//     return true
//     else
//     return false
//   }
//   console.log(a.find(check))
//   console.log(a.findIndex(check))
//   console.log(a.map(check))
//   console.log(a.filter(check))
  


//entries()=find key and index


// var a=[10,20,30,40,50,60,70,80,90,100]
// var b = a.entries()
// for(let i of b){
//   console.log(i)
// }



//includes(),lastindex(),include().
// var a  = [21,51,26,7,9,5,13,51,5,5,27,11,5,26,18]
// console.log(a)
// console.log(a.indexOf(5))
// console.log(a.lastIndexOf(5))
// console.log(a.includes(5))
// console.log(a.includes(50))



//array destructing.

// var a  = [1001,"Nitin Chauhan","Trainer",78900,"Noida","UP"]
// var [id,name,dsg,salary,city,state] = a
// console.log(
//   `
//     Id          = ${id}
//     Name        = ${name}
//     Designation = ${dsg}
//     Salary      = ${salary}
//     City        = ${city}
//     State       = ${state}
//   `
// )


// var a={b:12,
//   c:13,
//   d:13,
//   e:14,
//   f:2,
//   g:5}
//   console.log(a.b)
// console.log(a.c)
// console.log(a.d)
// console.log(a.e)
// console.log(a.f)
// console.log(a.g)


// var num=parseInt(prompt("enter the number"))                                                 
// if(num<0) 
// alert(` enter the positive value`)    
// document.write(`${num+2}  ${num+4}  ${num+6}`)                                                





// var emp = new Object()
// emp.id = 1001
// emp.name="Nitin Chauan"
// emp['dsg']="Trainer"
// emp['salary']=78900
// emp.city="Noida"
// emp.state="UP"
// for(let key in emp){
 // console.log(`${key} = ${emp[key]}`);
//}
// for(let i=0;i<Object.keys(emp)[length];i++){
//   console.log(`${i} = ${emp[i]}`);
// }
// for(let key of Object.keys(emp)){

//       console.log(`${key} = ${emp[key]}`);
//   }

// console.log(emp)
// emp.email = "vishanchauhan@gmai.com"
// emp['phone'] = "9873848046"
// console.log(emp)

// console.log(emp)
// delete emp.name
// delete emp['city']
// console.log(emp)

//console.log(emp)
// var emp = new Object()
// emp.id = 1001
// emp.name="Nitin Chauan"
// emp['dsg']="Trainer"
// emp['salary']=78900
// emp.city="Noida"
// emp.state="UP"
// console.log(
//     `
//                 ID          :   ${emp.id}
//                 Name        :   ${emp.name}  
//                 Designation :   ${emp.dsg}
//                 Salary      :   ${emp.salary}
//                 City        :   ${emp.city}
//                 State       :   ${emp.state}
//     `
// );



// object destruction=>


// var emp = new Object()
// emp.id = 1001
// emp.name="Nitin Chauan"
// emp['dsg']="Trainer"
// emp['salary']=78900
// emp.city="Noida"
// emp.state="UP"
// var {id,name,dsg,salary,city,state} = emp
// console.log(
//     `
//         ID          :   ${id}
//         Name        :   ${name}  
//         Designation :   ${dsg}
//         Salary      :   ${salary}
//         City        :   ${city}
//         State       :   ${state}
//     `
// );
// // console.log(emp)



//fat or arrow function in Object


// var emp = {
//     id:1001,
//     name:"Rahul Sharma",
//     dsg:"Team Head",
//     salary:12000,
//     city:"North Delhi",
//     state:"Delhi",
//     display:()=>{
//         console.log(
//             `
//             ID          :   ${emp.id}
//             Name        :   ${emp.name}  
//             Designation :   ${emp.dsg}
//             Salary      :   ${emp.salary}
//             City        :   ${emp.city}
//             State       :   ${emp.state}
//             `
//         );
//     }
// }
// emp.display()

// getter and setter 

// get

// var emp = {
//       id:1001,
//       name:"Rahul Sharma",
//       dsg:"Team Head",
//       salary:12000,
//       city:"North Delhi",
//       state:"Delhi",
//       get display(){
//           console.log(
//               `
//               ID          :   ${this.id}
//               Name        :   ${this.name}  
//               Designation :   ${this.dsg}
//               Salary      :   ${this.salary}
//               City        :   ${this.city}
//               State       :   ${this.state}
//               `
//           );
//       }
//   }
//   emp.display
  
// set


// var emp = {
//       id:1001,
//       name:"Rahul Sharma",
//       dsg:"Team Head",
//       city:"North Delhi",
//       state:"Delhi",
//       set setSalary(num){
//           this.salary = num
//       },
//       get display(){
//           console.log(
//               `
//               ID          :   ${this.id}
//               Name        :   ${this.name}  
//               Designation :   ${this.dsg}
//               Salary      :   ${this.salary}
//               City        :   ${this.city}
//               State       :   ${this.state}
//               `
//           );
//       }
//   }
//   emp.setSalary = 45000
//   emp.display
  

//object constructor


// var Employee = function(id,name,dsg,salary,city,state){
//   this.id=id
//   this.name=name
//   this.dsg=dsg
//   this.salary=salary
//   this.city=city
//   this.state=state
// }
// var e1 = new Employee(101,"Nitin Chauhan","Trainer",78900,"Noida","UP")
// var e2 = new Employee(102,"Ramesh Saini","Trainer",78900,"Noida","UP")
// var e3 = new Employee(103,"Nitesh Rana","Trainer",78900,"Noida","UP")
// console.log(e1,e2,e3)
// console.log(e2)
// console.log(e3)


// var a = [10,20,30,40,50,60,10,20,30,40,50,10,20,30,10,20,30,40,50,60,40,50,60,10,20,30,40,50,60,70,80,90,10,10,10,10,20,30,40,50,60]
// var b = new Set(a)
// var c = Array.from(b)
// // console.log(a)
// // console.log(b)
// // console.log(c)

// add item in Array

// var a = [10,20,30,40,50,60,10,20,30,40,50,10,20,30,10,20,30,40,50,60,40,50,60,10,20,30,40,50,60,70,80,90,10,10,10,10,20,30,40,50,60]
// var b = new Set(a)
// console.log(b)
// b.add(100)
// console.log(b)
// // b.add(101)
// console.log(b)

// // detete in aarey

// var a = [10,20,30,40,50,60,10,20,30,40,50,10,20,30,10,20,30,40,50,60,40,50,60,10,20,30,40,50,60,70,80,90,10,10,10,10,20,30,40,50,60]
// var b = new Set(a)
// console.log(b)
// b.delete(50)
// console.log(b)
// b.delete(500)
// b.delete()
// console.log(b)

// clear

// var a = [10,20,30,40,50,60,10,20,30,40,50,10,20,30,10,20,30,40,50,60,40,50,60,10,20,30,40,50,60,70,80,90,10,10,10,10,20,30,40,50,60]
// var b = new Set(a)
// b.clear()
// console.log(b)

// has to find true false

// var a = [10,20,30,40,50,60,10,20,30,40,50,10,20,30,10,20,30,40,50,60,40,50,60,10,20,30,40,50,60,70,80,90,10,10,10,10,20,30,40,50,60]
// var b = new Set(a)
// console.log(b.has(50))
// console.log(b.has(500))
// console.log(b.size)


// key,value,entries question-

// var a = [10,20,30,40,50,60,10,20,40,50,60]
// var b = new Set(a)
// console.log(b.keys())
// console.log(b.values())
// console.log(b.entries())


// set()-add in Map

// var emp = new Map([
//   ["Nitin",78900],
//   ["Ankit",88900],
//   ["Mohit",48900],
//   ["Sumit",45900],
//   ["Rohit",12300],
//   ["Naman",23100],
//   ["Aman",32100],
//   ["Naman",78500]
// ])
// console.log(emp)
// emp.set("Mukul",48580)
// console.log(emp)

// find Date

// var a = new Date()
//  console.log(a)
//  console.log(a.toString())


// second style= to find -new date(year, month,day,hour,minute,second,milisecond)

//  var a = new Date(2022,7,20,17,18,120,3000)
// var b = new Date(2022,7,20,17,18,25)
// var c = new Date(2022,7,20,17,18)
// var d = new Date(2022,7,20,17)
// var e = new Date(2022,7,20)
// var f = new Date(2022,7)
// var g = new Date(2022)
// console.log(a.toString())
//  console.log(b.toString())
//  console.log(c.toString())
// console.log(d.toString())
// console.log(e.toString())
// console.log(f.toString())
// console.log(g.toString())

// var a = new Date(12222222222220)
//  console.log(a)

// 4th style to find date 


//  var a = new Date("2022 8 20 17:35:30")
// var b = new Date("17:35:30 2022 8 20")
// console.log(a.toString())
// console.log(b.toString())


// var a=new Date()
// console.log(a.getFullYear());
// console.log(a.getMonth());
// console.log(a.getDate());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getUTCDate());
// console.log(a.getTime());//miliseconds since 1 jan 1970
// console.log(a.getDay()); //week day
// console.log(Date.now());//miliseconds since 1 jsn 1970
// console.log(`${a.getDate()}/${a.getMonth()}/${a.getFullYear()}`)
 

//OOPS Concept=Class 

// class Sample{
//       display(){
//           console.log("In display() of Sample Class")
//       }
//       show(){
//           console.log("In show() of Sample Class")
//       }
//   }
//   var x = new Sample()
//   var y = new Sample()
//   x.display()
//   y.display()
//   x.show()
//   y.show()
  
//   class without constructor=>


// class Add{
//       get(a,b){
//           this.a=a
//           this.b=b
//           this.sum=this.a+this.b
//       }
//       display(){
//           console.log(`${this.a} + ${this.b} = ${this.sum}`)
//       }
//   }
//   var x = new Add()
//   var y = new Add()
//   x.get(10,20)
//   y.get(100,200)
//   x.display()
//   y.display()


//class with constructor=>

// class Add{
//   constructor(a,b){
//       this.a=a
//       this.b=b
//       this.sum=this.a+this.b
//   }
//   display(){
//       console.log(`${this.a} + ${this.b} = ${this.sum}`)
//   }
// }
// var x = new Add(10,20)
// var y = new Add(100,200)
// x.display()
// y.display()


// var a = parseInt(prompt("Enter the first number "))
// var b = parseInt(prompt("Enter the second number "))

// var sum = a + b


// document.write(`The sum of ${a} and ${b} is ${sum}`)


// class Sample{
//       display(){
//           console.log("In display() of Sample Class")
//       }
//       show1(){
//           console.log("In show1() of Sample Class")
//       }
//   }
//   class Example extends Sample{
//       display(){
//           console.log("In display() of Example Class")
//       }
//       show2(){
//           console.log("In show2() of Example Class")
//       }
//   }
//   var x = new Example()
//   x.display()
//   x.show1()
//   x.show2()

// class Sample{
//       constructor(){
//           console.log("Constructing Sample Class")
//       }
//       show1(){
//           console.log("In show1() of Sample Class")
//       }
//   }
//   class Example extends Sample{
//       display(){
//           console.log("In display() of Example Class")
//       }
//       show2(){
//           console.log("In show2() of Example Class")
//       }
//   }
//   var x = new Example()
//   x.display()
//   x.show1()
//   x.show2()
  

// class Sample{
//       show1(){
//           console.log("In show1() of Sample Class")
//       }
//   }
//   class Example extends Sample{
//       constructor(){
//           super()
//           console.log("Constructing Example Class")
//       }
//       display(){
//           console.log("In display() of Example Class")
//       }
//       show2(){
//           console.log("In show2() of Example Class")
//       }
//   }
//   var x = new Example()
//   x.display()
//   x.show1()
//   x.show2()

//Single Inheritance

// class Base{
//       constructor(a,b){
//           this.a=a
//           this.b=b
//       }
//   }
//   class Derived extends Base{
//       display(){
//           this.sum = this.a+this.b
//           console.log(`${this.a} + ${this.b} = ${this.sum}`);
//       }
//   }
//   var x = new Derived(100,200)
//   x.display()


//Multilevel Inheritance

// class Parent{
//       constructor(){
//           this.a = [10,20,30,40,50,60,70,80,90,100]
//       }
//   }
//   class Child1 extends Parent{
//       display(){
//           console.log(this.a)
//       }
//   }
//   class Child2 extends Child1{
//       reverse(){
//           this.a.reverse()
//       }
//   }
//   var x = new Child2()
//   console.log("Original Array is")
//   x.display()
//   x.reverse()
//   console.log("Reversed Array is")
//   x.display()
  


// Hierarchical Inheritance


// class Sample{
//   constructor(a,b){
//       this.a=a
//       this.b=b
//   }
// }
// class Add extends Sample{
//   display(){
//       console.log(`${this.a} + ${this.b} = ${this.a+this.b}`)
//   }
// }
// class Sub extends Sample{
//   display(){
//       console.log(`${this.a} - ${this.b} = ${this.a-this.b}`)
//   }
// }
// class Mul extends Sample{
//   display(){
//       console.log(`${this.a} * ${this.b} = ${this.a*this.b}`)
//   }
// }
// class Div extends Sample{
//   display(){
//       console.log(`${this.a} / ${this.b} = ${this.a/this.b}`)
//   }
// }
// class Mod extends Sample{
//   display(){
//       console.log(`${this.a} % ${this.b} = ${this.a%this.b}`)
//   }
// }
// class Pow extends Sample{
//   display(){
//       console.log(`${this.a} ** ${this.b} = ${this.a**this.b}`)
//   }
// }

// var obj1 = new Add(15,6)
// var obj2 = new Sub(15,6)
// var obj3 = new Mul(15,6)
// var obj4 = new Div(15,6)
// var obj5 = new Mod(15,6)
// var obj6 = new Pow(15,6)
// obj1.display()
// obj2.display()
// obj3.display()
// obj4.display()
// obj5.display()
// obj6.display()



// for(let i=1;i<=20;i++)
// if(i%2==0)
// console.log
// let a=10
// console.log(a);

// console.log(a)
//  var a=10
// console.log(a)


// var a
// console.log(a)
// a=10
// console.log(a)


// console.log(a)
// let a = 10
// console.log(a)



// "use strict"


// a = 10
// console.log(a)


// var a = 10
// console.log(a);
// delete a
// console.log(a);
  
//Scope chain and lexical scoping

// var a = 10
// function outer(){
//     var b = 20
//     function inner(){
//         var c = 30
//         console.log(`Inside Inner function a = ${a} b = ${b} and c = ${c}`)
//     }
//     inner()
//     console.log(`Inside Outer function a = ${a} b = ${b}`)
// }
// outer()
// console.log(`Outside Outer function a = ${a}`)



// var a = 10
// function outer() {
//     var b = 20
//     function inner() {
//         var c = 30
//         console.log(`Inside Inner function a = ${a} b = ${b} and c = ${c}`)
//     }
//     return inner
// }
// var c  = outer()
// c()
// c()


// function fun1(){
//         console.log("Hello World1")
//     }
//     function fun2(){
//         console.log("Hello World2")
//     }
//     function fun3(){
//         console.log("Hello World3")
//     }
//     function fun4(){
//         console.log("Hello World4")
//     }
//     function fun5(){
//         console.log("Hello World5")
//     }
//     fun1()
//     fun2()
//     fun3()
//     fun4()
//     fun5()


// function fun1(){
//     setTimeout(()=>{
//         console.log("Hello World1")
//     },5000)
// }
// function fun2(){
//     setTimeout(()=>{
//         console.log("Hello World2")
//     },4000)
// }
// function fun3(){
//     setTimeout(()=>{
//         console.log("Hello World3")
//     },3000)
// }
// function fun4(){
//     setTimeout(()=>{
//         console.log("Hello World4")
//     },2000)
// }
// function fun5(){
//     setTimeout(()=>{
//         console.log("Hello World5")
//     },1000)
// }
// fun1()
// fun2()
// fun3()
// fun4()
// fun5()

// WAP to Reverse Number

// var num=parseInt(prompt("enter the number"))
// var rev=0
// while(num!=0){
//   let r=num%10
//   rev=rev*10+r
//   num=parseInt(num/10)
// }
// console.log(`reverse=${rev}`)


// function f(a,b,c) {
//   m=["1","2","3"];
//   a=3;
//   b[0]="x"
//   c.first=false;
// }
// var x=4;
// var y=["A","B","C"];
// var z={first:true};
// f(x,y,z);
// console.log(x,y,z);

// let obj=[{"animal":"dog"},{"animal":"tiger"}]
// obj.unshift({"pet":"cat"})
// const output=JSON.stringify(obj)
// console.log(obj);


// const array = [{"name": "john"}, {"role": "developer"}];
// console.log(array[1].role); // Output: developer


// const arr = [3, 2, 17, 8, 4, 5];
// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] !== largest) {
//     secondLargest = arr[i];
//   }
// }

// console.log("The second largest number is: " + secondLargest);


// WAP to check counting vowel 


// const word = "this is a boy ";
// const vowels = ["a", "e", "i", "o", "u"];
// let count = 0;

// for (let i = 0; i < word.length; i++) {
//   const char = word[i].toLowerCase();
//   if (vowels.includes(char)) {
//     count++;
//   }
// }
// console.log("The number of vowels in the word is: " + count);


// console.log(word.toUpperCase());

// let arr=[1,2,3,4,5];
// let  obj= {...arr}
// console.log(obj);


// find the max/min element in an Array.

// var arr=[10,20,30,40,50,60,70,80,90]
// console.log(Math.max(...arr));

// var arr=[10,20,30,40,50,60,70,80,90]
// console.log(Math.min(...arr));

// var num =5n
// var f=1n
// for(let i=num;i>=1;i--)
// {
// f=f*i;
// }
// console.log(f);

// var num=parseInt(prompt("enter the number"))
// debugger;
// var rev=0
// while (num!=0) {
//   let r=num%10
//   rev = rev*10+r
//   num= parseInt(num/10)  
// }
// document.write(`${rev}`)    
  
// var n=2;
// function square(num) {
//   var ans =num*num;
//   return ans;
  
// }
// var square2=square(n);
// var square4=square(4);

// var c=7;
// function gitname(){
//   console.log("namaste  javascript");
  
// }
// getname();
// console.log(x);


//print Star pattern

// for (let i = 1; i<= 5; i++) {
//   let row = '';
//   for (let j = 1; j<= i; j++) {
//     row += '*';
//   }
//   console.log(row);
// }


