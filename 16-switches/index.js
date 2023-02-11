
let grade = 12;

switch(grade){
    case "A":
        console.log("You did great");
        break;
    case "B":
        console.log("You did good");
        break;
    case "C":
        console.log("You did okay");
        break;
    case "D":
        console.log("You barely passed");
        break;
    case "F":
        console.log("You failed");
        break;
    default:
        console.log(grade, "is not a letter");
}

switch(true){
    case grade >= 90:
        console.log("You did great");
        break;
    case grade >= 80:
        console.log("You did good");
        break;
    case grade >= 75:
        console.log("You did okay");
        break;
    case grade >= 70:
        console.log("You barely passed");
        break;
    case grade < 70:
        console.log("You failed");
        break;
    default:
        console.log(grade, "is not a letter");
}