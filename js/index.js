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

    // Check one by one (EMPTY only)

    if (m1 === "") {
        document.getElementById("err1").innerText = "Enter Tamil marks";
        return;
    }

    if (m2 === "") {
        document.getElementById("err2").innerText = "Enter English marks";
        return;
    }

    if (m3 === "") {
        document.getElementById("err3").innerText = "Enter Maths marks";
        return;
    }

    if (m4 === "") {
        document.getElementById("err4").innerText = "Enter Science marks";
        return;
    }

    if (m5 === "") {
        document.getElementById("err5").innerText = "Enter Social marks";
        return;
    }

    // Convert to number AFTER validation
    m1 = Number(m1);
    m2 = Number(m2);
    m3 = Number(m3);
    m4 = Number(m4);
    m5 = Number(m5);

    let total = m1 + m2 + m3 + m4 + m5;
    let avg = total / 5;

    document.getElementById("result").innerHTML =
        "Total: " + total + "<br>" +
        "Average: " + avg.toFixed(2);
}