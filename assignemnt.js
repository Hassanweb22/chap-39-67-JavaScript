
// CHapter#38-42

const { array, func } = require("prop-types");
const { useCallback } = require("react");

function chap1_q1() {
    function power(a, b) {
        alert(`${a} raised to the power ${b} is ${a ** b}`)
    }
    power(2, 3)
}

function chap1_q2() {
    var year = +prompt("Enter any Year To Check its Leap or Not")
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        alert(`${year} is a Leap Year`)
    }
    else {
        alert(`${year} is not a Leap Year`)
    }
}

function chap1_q3() {
    var array = [];
    var s
    var area
    function length() {
        for (i = 0; i <= 2; i++) {
            var length = +prompt("Enter the length of " + (i + 1) + " of traingle")
            array.push(length)
        }
        s = (array[0] + array[1] + array[2]) / 2
    }
    function area_triangle() {
        area = s * (s - array[0]) * (s - array[1]) * (s - array[2])
    }
    length()
    area_triangle()
    document.write(`The length of 3 sides of triangle:<br>`)
    for (i = 0; i < array.length; i++) {
        document.write(`<b>${i + 1}</b>: ${array[i]}<br>`)
    }
    document.write(`The Area of Triangle is: <b>${area}</b>`)
    // alert(s)
    // alert(a)
}

function chap1_q4() {
    function average(sub1, sub2, sub3) {
        avg = (sub1 + sub2 + sub3) / 3
    }
    function percentage() {
        percet = avg / 300 * 100

    }
    average(75, 85, 90)
    percentage()

    document.write(`The average of the marks of 3 subjects is: <b>${avg.toFixed(2)}</b>
    <br>Percentage: <b>${percet.toFixed(2)}%</b> `)
}

function chap1_q5() {
    // making the fucntion tat same work as indexof()
    var array = ["hasso", "faraz", "hussain", "ghazali"]
    // alert(array.indexOf("Faraz"))
    var user = prompt("Which word of index you want to find from the given array").toLowerCase()
    document.write(`<b>Given Array</b>: ${array}<br>
    Index of <b>${user}</b> in given array is <b>${array.indexOf(user)}</b>`)
}

function chap1_q6() {
    var sen = "Atlest should not do this".toLowerCase()
    document.write(`<b>Before</b>: ${sen}<br>`)
    alert(sen.length)
    for (i = 0; i < sen.length; i++) {
        if (sen[i] == "a" || sen[i] == "e" || sen[i] == "i" || sen[i] == "o" || sen[i] == "u") {
            sen = sen.replace(sen[i], "")
        }
    }
    document.write(`<b>After</b>: ${sen}`)
}

function chap1_q7() {
    var sen = "Pleases read this application and give me gratuity".toLowerCase()
    var arr = []
    document.write(`<b>string</b>: ${sen}<br>`)
    for (i = 0; i < sen.length; i++) {

        if (
            (sen[i] == "a" || sen[i] == "e" || sen[i] == "i" || sen[i] == "o" || sen[i] == "u") &&
            (sen[i + 1] == "a" || sen[i + 1] == "e" || sen[i + 1] == "i" || sen[i + 1] == "o" || sen[i + 1] == "u")) {
            arr.push(sen[i] + sen[i + 1])
        }

    }

    document.write(`<b>Such Occurences are</b>: `)
    arr.forEach(function (item) {
        document.write(item, " ")
    })
}

function chap1_q8() {
    kilometer = +prompt("Enter distance between any two cities in Kilometers")
    // Kilometers to Meters
    function km_to_m() {
        document.write(`Ditsnace ${kilometer}km to <b>Meter</b>: ${kilometer * 1000}m<br>`)
    }
    // Kilometers To Feet
    function km_to_feet() {
        document.write(`Ditsnace ${kilometer}km to <b>Feet</b>: ${kilometer * (3281)} feet<br>`)
    }
    // Kilometers To Inches
    function km_to_Inches() {
        document.write(`Ditsnace ${kilometer}km to <b>Inches</b> ${kilometer * 39270} inches<br>`)
    }
    // Kilometers To Centimeters
    function km_to_cm() {
        document.write(`Ditsnace ${kilometer}km to <b>Centimeter</b> ${kilometer * 100000} cm<br>`)
    }

    km_to_m()
    km_to_feet()
    km_to_Inches()
    km_to_cm()

}


function chap1_q9() {

    user = +prompt("Enter how many hours of in overtime you worked")
    // overtime paid at the rate of Rs:12 per hpur after 40 hours 12.00 * 40 = 480
    var above_40_hours = 12.00
    var below_40_hours = 10.00
    document.write("<b>Overtime Hours:</b> ", user, "<br>")

    if (user >= above_40_hours) {
        document.write(`<b>Your Overtime Pay is Rs:</b> ${user * above_40_hours}`)
    }
    else {
        document.write(`<b>Your Overtime Pay is Rs:</b> ${user * below_40_hours}`)
    }

}

function chap1_q10() {

    var user = +prompt("Enter Amount In Rupees: ")
    let count_100 = 0
    let count_50 = 0
    let count_10 = 0
    document.write(`<b>Amount:</b> ${user}<br>`)
    while (user >= 100) {
        user = user - 100
        count_100++
    }
    while (user >= 50) {
        user = user - 50
        count_50++
    }
    while (user >= 10) {
        user = user - 10
        count_10++
    }
    document.write(`You Have <b>${count_100}</b> hundreds notes<br>
    <b>${count_50}</b> fifty notes<br>
    <b>${count_10}</b> ten notes<br>
    Remaing Amount Rs: <b>${user}</b>`)
}

// Chapter#43-48

function remove(e) {
    console.log(e.target.parentNode.parentNode)
    var row = e.target.parentNode.parentNode.innerHTML = ""
}


var min = Number(0);
// function timer() {
// }

function increase() {
    setInterval(function () {

        min += 1
        document.getElementById("watch").innerHTML = min

    }, 10)
    console.log(min)
}

min++
console.log(document.querySelector("#watch").innerHTML=min)











