// task1
let factory ={
    facName: `Volkswagen Wolfsburg Plant`,
    calculateWorkload : function () {
     const employeeWorkData=this.employeeWeeklyWorkload;
     const workResData = [];
     if (employeeWorkData && employeeWorkData.length > 0) {
         for( let emp of employeeWorkData ) {
         workResData.push(emp.workload || emp.timeSpent)
     }
         return workResData
    }
         else `Not Valid`
    },
    formatArray: function (name) {
        const employeeData=this.employees;
        if (employeeData && employeeData.length > 0) {
            let emp=employeeData.find((el) => el.name === name);
            return {name : emp.name,  timeLeft : 5 - emp.timeSpent}
        } else return ` Not Valid `
    } 
}
    let factoryEmployees= {
        employees: [
           {name:`John`, timeSpent: 1},
           {name:`Sam`, timeSpent: 3}, 
           {name:`Maria`, timeSpent: 2},
           {name:`Dan`, timeSpent: 4},
           {name:`Lorelai`, timeSpent: 5}
    ],
        employeeNum:this.employees.length
    }    
    let worklaodData= {
        employeeWeeklyWorkload: [
            {name:`John`, workload: 40},
            {name:`Sam`, timeSpent: 25},
            {name:`Maria`, timeSpent: 28},
            {name:`Dan`, timeSpent: 30},
            {name:`Loreali`, timeSpent: 31}
    ],
}
let workArr = factory.calculateWorkload.bind(worklaodData);
let formattedUser=factory.formatArray.bind(factoryEmployees,`John`)()
console.log(formattedUser);


// task2
    function sumOfNumbers (...arr) {
        let sum=0;
        for (let num of arr) {
            sum += num
        }
        return sum
    }
    console.log(sumOfNumbers.apply(null,[10,20,30]))();

// task3
// let checkIfEven = n => {
//     if (n % 2 === 0 ){
//         return `Even`
//     }
//     else return `Odd`
// }
// console.log(checkIfEven(11));

function checkIfEven (n) {
    n=Math.abs(n)
    if (n === 0) return true
    if (n === 1) return false
    return checkIfEven(n-2)
}
console.log(checkIfEven(-51));




// task4
color=[`Blue`,`Green`,`Red`,`Orange`,`Violet`,`Indigo`,`Yellow`];
function normalize (arr){
let result = [];
for (let i = 1; i < arr.length; i++){
    let text =``;
    if (i % 10 === 1 ) { 
        text = `${i}st choice is ${arr[i - 1]}`
}
    else if (i % 10 === 2) {
        text = `${i}nd choice is ${arr[i - 1]}`
    }
    else if (i % 10 === 3) {
        text = `${i}rd  choice is ${arr[i - 1]}`
    }
    else {
        text = `${i}th choice is ${arr[i - 1]}`
    }
    result.push(text);
}
    return result;
}
console.log(normalize(color));
   



// task5
arr=[NaN,0,15,false,-22,``,undefined,47,null];

// პირველი ვარიანტი
// let valid = arr.filter(Boolean);
// console.log(valid);

// მეორე ვარიანტი
function filterArr (arr)  {
    let result=[];
    for (let el of arr ){
        if(el){
        result.push(el)
        }
    }
    return result;
}
console.log(filterArr(arr));


// მესამე ვარიანტი
let filter= arr.filter((el) => el)
console.log(filter);




// task6

arr1=[1,2,3];
arr2=[2,1,30];
function merge (arr1,arr2) {
   let merge=arr1.concat(arr2);
   let result = [];
   for ( let i = 0; i < merge.length; i++) {
        if(result.indexOf(merge[i]) === -1) {
            result.push(merge[i])
   };
   }
   return result
}
console.log(merge(arr1,arr2));


// task7
let array1 = [1,10,12,13];
let array2 = [4,5];
function addIt(array1,array2) {
    let mainArr= array1.length >= array2.length ? array1 : array2;
    return mainArr.map((el,index) => {
        if( index < array2.length) {
            return el + array2[index]
        } else return el;
    })
}
console.log(addIt(array1,array2));


