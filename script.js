// task1
let factory ={
    facName: `Volkswagen Wolfsburg Plant`,
    calculateWorkload : function () {
        let getUser = print.bind(worklaodData)();
        console.log(factory.calculateWorkload);
    },
    formatArray: function (name) {
        let timeLeft=4;
        let timeSpent=5;
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
            {name:`Sam`, workload: 25},
            {name:`Maria`, workload: 28},
            {name:`Dan`, workload: 30},
            {name:`Loreali`, workload: 31}
    ],
    print : function (){
        return this.employeeWeeklyWorkload.workload
    }
}

// task2
    let sumOfNumbers = (x,y,z) => {
        return x+y+z
    }
    console.log(sumOfNumbers.call(null,10,20,30));

// task3
let checkIfEven = n => {
    if (n % 2 === 0 ){
        return `Even`
    }
    else return `Odd`
}
console.log(checkIfEven(11));



// task4
color=[`Blue`,`Green`,`Red`,`Orange`,`Violet`,`Indigo`,`Yellow`];
o=[`th`,`st`,`nd`,`rd`];
let combaind = (color,o) =>{
    // for (let n of color)
       if (o==1)
       return `st`
       if (o==2)
       return `nd`
       if (o==3)
       return `rd`
       else return `nd`
}
let result = `${o[1]} Choice is ${color[0]}`
console.log(result,combaind(o[2]));



// task5
arr=[NaN,0,15,false,-22,``,undefined,47,null];
let valid = arr.filter(Boolean);
console.log(valid);

// task6
function mergeArr(arr1,arr2) {
    for (let n of arr3)
       if(arr3.filter((n)=>n !==))
    return (arr1,arr2).filter((number)=>number !== )
}
arr1=[1,2,3];
arr2=[2,1,30];
arr3=`[${arr1},${arr2}]`;
arr4=[...arr3];
console.log(arr3);
console.log(mergeArr(arr1,arr2));



// task7
let array1 = [1,10,12,13];
let array2 = [4,5];
let array3 = (array1,array2).map(i => {
    let userLaw={};
    userLaw=array1[0]+array2[0];
    return userLaw;
})
console.log(userLaw);


