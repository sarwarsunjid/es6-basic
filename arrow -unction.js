// const square = function(number){
//     return number * number;
// }

//if we have single parameter we can exclude parenthesis
// const square = (number) => {
//     return number * number;
// }

//if we have 0 parameter then have to add empty parenthesis 
// const square = () => {
//     return number * number;
// }

//we can make it more even shorter 

//this line exactly equivalent to the first block
const square = number =>  number * number;

console.log(square(5));


// When  to use this arrow array function

const jobs = [
    { id:1, isActive:true },
    { id:2, isActive:false },
    { id:3, isActive:false },
]

//filter method iterate over the array and for each job object, it pass it the 
//job object to the predicate  predicate function
const activeJobs = jobs.filter(function(job){ return job.isActive; });

//this line is exactly similar to above line
const activeJobs = jobs.filter( job => job.isActive );