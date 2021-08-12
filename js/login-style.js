let myLoginActive = document.querySelector("#login");
let mySignupActive = document.querySelector("#signup");
let myForm = document.querySelector(".form");
// let mySwitch = document.querySelector(".form-switch");
let myFirstName = document.createElement("input");

// ------- new form 'Sign up form'--------

let myDiv = document.querySelector(".main-form")
let myNewForm = document.querySelector('#newForm')


// ------------------------------------------





// ------------ login -----------

myLoginActive.addEventListener('click', function () {
    myLoginActive.classList.add("active");
    mySignupActive.classList.remove("active");


    // ---- login switch animation ----
    if (mySignupActive.className != 'active') {

        myNewForm.style.opacity = "0";
        myForm.style.display = "block";

        setTimeout(function () {
            myNewForm.style.display = "none";


            setTimeout(function () {
                myForm.style.opacity = "1";
            }, 100)


        }, 1)
    }



})




// ------------ Signup -----------
mySignupActive.addEventListener('click', function () {
    mySignupActive.classList.add("active");
    myLoginActive.classList.remove("active");






    // ------- Sign Up switch animation -------
    myForm.style.opacity = '0';
    myNewForm.style.display = "block";

    setTimeout(function () {
        myNewForm.style.opacity = "1";
        myForm.style.display = "none";




    }, 100)





    // ------- adding Sign Up form to HTML -------

    myNewForm.innerHTML = `

        <div class="full-name">

            <input id="f-name" type="text" placeholder="  First name" required> <input id="l-name" type="text" placeholder="  Last name" required> 
        
        </div>

        
        <input type="text" placeholder="  Email Address" required> 
        <input type="password" placeholder="  Password" autocomplete="off" required> 



        <div id="checkbox-div">

            <input id="form-checkbox" type="checkbox" name="checkbox" required>

            <label for="checkbox">By signing up, you agree to our 

                <a href="#">
                Terms
                </a>
                
                and

                <a href="#">
                Privacy Policy
                </a>
                ,
                <br>
                and our default

                <a href="#">
                Notification Settings
                </a>
                .

            </label> 
            
        </div>


        <button id="new-btn" type="submit">Sign Up</button>
        
        `;




})

