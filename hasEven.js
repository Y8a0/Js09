function hasEven(tableau){

    for(let i = 0; i <= tableau.length; i++){
        if(tableau[i]%2 === 0){
            return true;
        }
        else{
            return false;
        }        
    }
}
console.log(hasEven([2]));


module.exports = hasEven;