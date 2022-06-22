let marriage = prompt("Enter the marriage eligibilty Age")
function marriageEligible(){
    if(marriage > 21){
        return 'hurray!! You Eligible for marriage';
    }
    else{
        return 'oops!! You not Eligible for the marriage'
    }
}

var margeeligible = marriageEligible(marriage);
console.log(margeeligible)