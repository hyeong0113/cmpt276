function meanGrade() {
    var myGradeElement = document.getElementsByName("my-grade");
    var baseGradeElement = document.getElementsByName("base-grade");

    var totalGrade = 0;

    var i;
    var count = 0;
    var myGradeArray = [];
    var baseGradeArray = [];

    for (i = 0; i < myGradeElement.length; i++) {
        if ((myGradeElement[i].value !== "" && baseGradeElement[i].value === "") &&
            (myGradeElement[i].value === "" && baseGradeElement[i].value !== "")) {
            console.log("You need to insert both grades in all activities!");
            continue;
        }

        if (myGradeElement[i].value !== "" && baseGradeElement[i].value !== "") {
            console.log(myGradeElement[i].value);
            console.log(baseGradeElement[i].value);

            totalGrade += (parseInt(myGradeElement[i].value)) / (parseInt(baseGradeElement[i].value));
            count++;
        }

    }

    document.getElementById("result-meanGrade").innerHTML = (totalGrade / count);
}