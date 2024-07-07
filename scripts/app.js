// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age 
// and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, 
// so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, 
//     difference between the youngest and oldest age].


// for this we will want to use the methods of Math.min() and Math.max() which will give us the oldest and youngest
// and by subtracting them from each other we will get the difference
function differenceInAges(ages){
return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}