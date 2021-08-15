document.querySelector('#email').focus()

// switch button variables
let myLoginActive = document.querySelector("#login");
let mySignupActive = document.querySelector("#signup");
// form variables
let myForm = document.querySelector(".form");
let myNewForm = document.querySelector('#newForm')


















// ----------------  failure messages  --------------------

const logFailureMSG = document.querySelector('.log-fail-msg');
const loginBtn = document.querySelector('#btn');
loginBtn.addEventListener("click", function () {
    logFailureMSG.style.opacity = "1";
    logFailureMSG.style.height = "auto";
    logFailureMSG.style.padding = "15px";

    signFailureMSG.style.opacity = "0";
    signFailureMSG.style.height = "0";
    signFailureMSG.style.padding = "0";
})


const signFailureMSG = document.querySelector('.sign-fail-msg');
const signBtn = document.querySelector('#new-btn');
signBtn.addEventListener("click", function () {
    signFailureMSG.style.opacity = "1";
    signFailureMSG.style.height = "auto";
    signFailureMSG.style.padding = "15px";

    logFailureMSG.style.opacity = "0";
    logFailureMSG.style.height = "0";
    logFailureMSG.style.padding = "0";
})

// -------------------------------------















// ------------ login -----------

myLoginActive.addEventListener('click', () => {
    myLoginActive.classList.add("active");
    mySignupActive.classList.remove("active");
    document.querySelector('#email').focus()


    if (mySignupActive.className != 'active') {

        myNewForm.style.display = "none";
        myForm.style.display = "block";








        // ---- login switch animation ----

        // myNewForm.style.opacity = "0";
        // myForm.style.display = "block";

        // setTimeout(function () {
        //     myNewForm.style.display = "none";


        //     setTimeout(function () {
        //         myForm.style.opacity = "5";
        //     }, 1)


        // }, 1)
    }



})













// ------------ Signup -----------
mySignupActive.addEventListener('click', () => {
    mySignupActive.classList.add("active");
    myLoginActive.classList.remove("active");



    myNewForm.style.display = "block";
    myForm.style.display = "none";
    // ------- Sign Up switch animation -------




    // myForm.style.opacity = '0';
    // myNewForm.style.display = "block";

    // setTimeout(function () {
    //     myNewForm.style.opacity = "5";
    //     myForm.style.display = "none";




    // }, 1)



})














// ------------ Password visiablity ------------
function showPassword() {
    let show1 = document.querySelector('#log-pass');
    let show2 = document.querySelector('#pass');
    let show3 = document.querySelector('#pass-confirm');

    if (show1.type | show2.type | show3.type === "password") {
        show1.type = "text";
        show2.type = "text";
        show3.type = "text";

    } else {
        show1.type = "password";
        show2.type = "password";
        show3.type = "password";

    }
}










// -------------- Password validation ----------------

function matchPassword() {
    let pw1 = document.getElementById("pass");
    let pw2 = document.getElementById("pass-confirm");
    if (pw1.value === pw2.value) {
        // alert("Password created successfully");
        pw2.setCustomValidity('');

    } else {
        // alert("Passwords did not match");
        pw2.setCustomValidity('Passwords do not match');

    }
}

// ------------------


