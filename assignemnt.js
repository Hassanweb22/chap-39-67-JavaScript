
// CHapter#38-42

// const { func } = require("prop-types")

// const { func } = require("prop-types")


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


// Remeber at the  top there is self created function which disturb very much:
var min = 0

function stop1() {
    clearInterval(set1)
    clearInterval(set2)
}

function increase() {
    set1 = setInterval(() => {
        min++
        document.getElementById("watch").innerHTML = min
    }, 1000);
    console.log(document.getElementById("watch").innerHTML)
}
function decrease() {
    // --min
    // document.getElementById("watch").innerHTML = min
    set2 = setInterval(() => {
        min--
        document.getElementById("watch").innerHTML = min
    }, 1000);
    console.log(document.getElementById("watch").innerHTML)
}

var ruko = document.getElementById("stop").addEventListener("click", stop1)
var upp = document.getElementById("up").addEventListener('click', increase)
var down = document.getElementById("down").addEventListener("click", decrease)
var no = 0

function addition() {
    // console.log(++no)
    console.log(min)
    document.getElementById("tbody1").innerHTML += `
    <tr>
    <th scope="row">${++no}</th>
    <td class="second-td">${min}</td>
    <td><img class="dustbin" src="images/remove_icon.png" onclick='deleted(event)'></td>
    <td onclick='edited(this)'>Edit</td>
    </tr>
    `
}

// var id=document.getElementById(x).addEventListener("click", function(event) {
//     console.log(event.target.parentNode)
// })
function deleted(event) {
    console.log(event.target.parentNode.parentNode)
    event.target.parentNode.parentNode.innerHTML = ''
    flag = true
}

var elmnt = document.getElementsByClassName("on")
var para = document.createElement("input")
var divv = document.createElement('div')
var image = document.createElement('img')
var flag = true
divv.setAttribute("class", "main-div")
function edited(e) {
    // appending input tag and image tag in div
    if (flag) {
        divv.appendChild(para)
        divv.appendChild(image)
        // image setting attributes
        image.setAttribute("src", "images/edited.png")
        image.setAttribute("class", "edit-image")
        image.setAttribute("onclick", "change()")
        console.log(image)
        // setting attributes of input tag in created div
        para.setAttribute('class', "para")
        para.setAttribute('size', "8")
        para.setAttribute('maxlength', "10")
        // para.setAttribute('onblur', 'change()')
        // targetting input to take its value and to replce with old one
        input = event.target.parentNode.childNodes[3]
        input.setAttribute("class", "second-td")
        console.log("asli wala input: ", input)
        before = input.textContent
        console.log("value of input before applying input tag: ", before)
        input.textContent = ""
        console.log("input ka andar wala metruial change krne k baad: ", input.innerHTML)
        input.appendChild(divv)
        para.value = before
        // console.log(input.innerHTML)
    }
    flag = false
}

function change() {
    console.log("Para before ", para.value)
    console.log("input.innerHTML Before ", input.innerHTML)
    if (para.value !== 'NaN') {
        input.innerHTML = para.value
        para.value = ''
    }
    else {
        input.innerHTML = input.innerHTML
        console.log("else ", input.innerHTML)
    }
    // console.log(input.innerHTM)
    console.log("Para After ", para.value)
    flag = true
}

var note = document.getElementById("note").addEventListener('click', addition)

// Chapter#43-48

function expandLoris() {
    var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which
    make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
    distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
    adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
    Slow lorises have a toxic bite, a rare trait among mammals. <a href="javascript:void(0);" onclick="compressLoris()"><em>Read Less.</em></a>`;
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function compressLoris() {
    var compressParagraph = `Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus. 
    <a href="javascript:void(0);" onclick="expandLoris()"><em> Click for more.</em></a>`
    document.getElementById("slowLoris").innerHTML = compressParagraph;
}


var tbody2 = document.getElementById("tbodysignup")
var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")
var contact = document.getElementById("contact")
var serial = 1

function perform(e) {
    tbody2 = document.getElementById("tbodysignup")
    e.preventDefault()
    if (tbody2.innerHTML != "") {
        tbody2.innerHTML += `
    <tr>
    <th scope="row">${serial++}</th>
    <td ondblclick="edit2(this)">${fname.value}</td>
    <td ondblclick="edit2(this)">${lname.value}</td>
    <td>${email.value}</td>
    <td>${contact.value}</td>
    <td><img class="dustbin" src="images/remove_icon.png" onclick='deleted(event)'></td>
    </tr>  `
    }
    else {
        serial = 1
    }
}

function deleted(event) {
    console.log(event.target.parentNode.parentNode)
    event.target.parentNode.parentNode.innerHTML = ""
    flag1 = true
}



// function edit2(e) {

//     console.log(e)
// }

var flag1 = true
var add = `
<div class="main-div">
<input id="newinput" class="para" size="4" maxlength="10" autocomplete='off'>
<img onclick='change2()' src="images/edited.png" class="edit-image">
</div>
`
var run
var input_target
function edit2(e) {
    before = e.textContent
    if (flag1) {
        console.log("value of input before applying input tag: ", before)
        input = e
        input.textContent = ""
        console.log("value of input after inserting input tag: ", input.innerHTML)
        input.innerHTML = add
        // input ki value m orignal td waali value serrt kr rhe hn
        input_target = input.childNodes[1].childNodes[1]
        input_target.value = before
        console.log("real input ", input_target)
    }
    flag1 = false
}

function change2() {
    console.log("input.innerHTML Before ", input_target.value)

    if (input_target.value !== 'NaN') {
        input.innerHTML = input_target.value
        input_target.value = ''
    }
    else {
        input.innerHTML = input.innerHTML
        console.log("else ", input.innerHTML)
    }

    flag1 = true
    console.log(flag1)
}

// var latest="hello"
// function show7() {
//     console.log(latest)
// }

var main_contents = document.getElementById("maincontent")
function show1() {
    document.getElementById("maincontent").childNodes.forEach(function (i) {
        console.log(i)
    })

}


function show2() {
    // main_contents = document.getElementById("main-content")
    render = document.getElementsByClassName('render')
    console.log(render)
    for (i = 0; i < render.length; i++) {
        console.log(render[i].innerHTML)
    }
    // render.forEach(function (i) {
    //     console.log(i)
    // })
}

function show3() {
    // var fname=document.getElementById("first-name")
    // var lname=document.getElementById("last-name")
    // var email=document.getElementById("email")
    // fname.value="Faraz"
    // lname.value="Ahmed"
    // email.value="faju123ahmed@gmail.com"
    // console.log('Done dana done done')
    console.log(document.getElementById("maincontent").nodeType)
    console.log(document.getElementById("last-name").nodeType)
    all = document.getElementById("maincontent").childNodes
    output = "";
    all.forEach(function (j) {
        output += j.nodeType + " "
    })
    console.log(output)
    console.log(all)
    /* it will return 1 bcz its an element if it was text than it will return 3 and for attribbute it will return 2 */
}

function show4() {
    main_contents = document.getElementById("main-content")
    console.log(main_contents.childNodes)
    console.log(main_contents.firstChild)
    console.log(main_contents.lastChild)

}

function clean(node) {
    // node = document.getElementById("main-content")
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if
            (
            child.nodeType === 8
            ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        }
        else if (child.nodeType === 1) {
            clean(child);
        }
    }
    console.log(node.childNodes)
}

function show5() {
    mains = document.querySelector("#main-content")
    clean(mains)
    // console.log(mains)
    for (i = 0; i < document.getElementById("main-content").childNodes.length; i++) {
        console.log(document.getElementById("main-content").childNodes[i].innerHTML
        )
    }
}

function show6() {
    mains = document.querySelector("#main-content")
    lname = document.querySelector("#last-name")
    // clean(mains)
    console.log(mains.childNodes)
    console.log(lname.nextSibling)
    console.log(lname.previousSibling)
    // console.log(mains)
    // for (i = 0; i < document.getElementById("main-content").childNodes.length; i++) {
    //     console.log(document.getElementById("main-content").childNodes[i].innerHTML
    //     )
}

function show7() {
    email = document.querySelector("#email")
    console.log(email)
    console.log(email.parentNode)
    console.log("Node Type: " + email.nodeType + " means element")
    // console.log(lname.nextSibling)
    // console.log(lname.previousSibling)
}













