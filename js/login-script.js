document.querySelector('#email').focus()


let myLoginActive = document.querySelector("#login");
let mySignupActive = document.querySelector("#signup");
let myForm = document.querySelector(".form");
let myFirstName = document.createElement("input");

// ------- new form 'Sign up form'--------

let myDiv = document.querySelector(".main-form")
let myNewForm = document.querySelector('#newForm')


// ------------------------------------------





// ------------ login -----------

myLoginActive.addEventListener('click', () => {
    myLoginActive.classList.add("active");
    mySignupActive.classList.remove("active");
    document.querySelector('#email').focus()


    // ---- login switch animation ----
    if (mySignupActive.className != 'active') {

        myNewForm.style.opacity = "0";
        myForm.style.display = "block";

        setTimeout(function () {
            myNewForm.style.display = "none";


            setTimeout(function () {
                myForm.style.opacity = "1";
            }, 1)


        }, 1)
    }



})




// ------------ Signup -----------
mySignupActive.addEventListener('click', () => {
    mySignupActive.classList.add("active");
    myLoginActive.classList.remove("active");



    // ------- Sign Up switch animation -------
    myForm.style.opacity = '0';
    myNewForm.style.display = "block";

    setTimeout(function () {
        myNewForm.style.opacity = "1";
        myForm.style.display = "none";




    }, 1)



})









// -------------- Password validation ----------------

function matchPassword() {
    let pw1 = document.getElementById("pswd1");
    let pw2 = document.getElementById("pswd2");
    if (pw1 != pw2) {
        // alert("Passwords did not match");
        return false
    } else {
        // alert("Password created successfully");
        return true
    }
}

// ------------------



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