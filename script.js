function myFunction() {
    const x = document.getElementById("gradeNum").value;
    const y = document.getElementById("convertOutput");
    const z = isNaN(x);

    if (!z && x <= 100) {
        if (x >= 91 && x <= 100) {
            console.log("A++");
        }
        else if (x >= 85 && x <= 90){
            console.log("A");
        } 
        else if (x >= 80 && x <= 84){
            console.log("B");
        } 
        else if (x >= 75 && x <= 79){
            console.log("C");
        } 
        else if (x >= 70 && x <= 74){
            console.log("D");
        } 
        else if (x >= 65 && x <= 69){
            console.log("E");
        } 
        else {
            console.log("Student has failed.");
        }
    }
    else {
        console.log("Invalid Grade!");
    }
}
