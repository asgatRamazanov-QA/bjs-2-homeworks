function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter(user=>user.gender===gender).map(user=>user.age).reduce((acc,item,index,arr)=>{
        acc+=item;
        if(index===arr.length-1){
            return acc/arr.length;}
        return acc;
    },0)
    console.log(getUsersNamesInAgeRange(people, "мужской")); 
    console.log(getUsersNamesInAgeRange(people, "женский"));
}