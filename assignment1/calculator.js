function meanGrade() {
    var myGradeElement = document.getElementsByName("my-grade");
    var baseGradeElement = document.getElementsByName("base-grade");

    var totalGrade = 0;

    var i;
    var count = 0;

    for (i = 0; i < myGradeElement.length; i++) {
        if ((!myGradeElement[i].value && baseGradeElement[i].value) ||
            (myGradeElement[i].value && !baseGradeElement[i].value)) {
            console.error("You need to insert both grades in all activities!");
            continue;
        }

        if (myGradeElement[i].value && baseGradeElement[i].value) {
            totalGrade += (parseInt(myGradeElement[i].value)) / (parseInt(baseGradeElement[i].value));
            count++;
        }

    }

    document.getElementById("result-meanGrade").innerHTML = (totalGrade / count);
}

function weightGrade() {
    var myGradeElement = document.getElementsByName("my-grade");
    var baseGradeElement = document.getElementsByName("base-grade");
    var weightGradeElement = document.getElementsByName("weight");

    var weightedTotalGrade = 0;
    var weightTotal = 0;
    var i;

    for (i = 0; i < myGradeElement.length; i++) {
        if ((!myGradeElement[i].value && baseGradeElement[i].value) ||
            (myGradeElement[i].value && !baseGradeElement[i].value)) {
            console.error("You need to insert both grades in all activities!");
            continue;
        }

        if (myGradeElement[i].value && baseGradeElement[i].value) {
            if (weightGradeElement[i]) {
                weightTotal += parseInt(weightGradeElement[i].value);
                weightedTotalGrade += ((parseInt(myGradeElement[i].value)) / (parseInt(baseGradeElement[i].value)) * weightGradeElement[i].value);
            } else {
                console.error("You need to insert weight value for calculation!");
            }
        }
    }

    document.getElementById("result-meanGrade").innerHTML = (weightedTotalGrade / weightTotal);
}