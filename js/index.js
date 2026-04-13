function calculateGrade() {

    let m1 = document.getElementById("sub1").value;
    let m2 = document.getElementById("sub2").value;
    let m3 = document.getElementById("sub3").value;
    let m4 = document.getElementById("sub4").value;
    let m5 = document.getElementById("sub5").value;

    // Clear errors
    document.getElementById("err1").innerText = "";
    document.getElementById("err2").innerText = "";
    document.getElementById("err3").innerText = "";
    document.getElementById("err4").innerText = "";
    document.getElementById("err5").innerText = "";

    // Check all subject validation

    if (m1 === "") {
        document.getElementById("err1").innerText = "Enter Tamil mark";
        return;
    }

    if (m2 === "") {
        document.getElementById("err2").innerText = "Enter English mark";
        return;
    }

    if (m3 === "") {
        document.getElementById("err3").innerText = "Enter Maths mark";
        return;
    }

    if (m4 === "") {
        document.getElementById("err4").innerText = "Enter Science mark";
        return;
    }

    if (m5 === "") {
        document.getElementById("err5").innerText = "Enter Social Science mark";
        return;
    }

    // Convert to number 
    m1 = Number(m1);
    m2 = Number(m2);
    m3 = Number(m3);
    m4 = Number(m4);
    m5 = Number(m5);

    let total = m1 + m2 + m3 + m4 + m5;
    let avg = total / 5;

    let grade;

    // 🎯 Grade conditions
    if (avg >= 90) {
        grade = "A";
    } else if (avg >= 75) {
        grade = "B";
    } else if (avg >= 60) {
        grade = "C";
    } else if (avg >= 40) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    // Show result
    document.getElementById("result").innerHTML =
        "Total: " + total + "<br>" +
        "Average: " + avg.toFixed(2) + "<br>" +
        "Grade: " + grade;
}