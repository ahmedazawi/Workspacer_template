
setTimeout(() => {
    // // window reload on resized
    // window.addEventListener('resize', function () {
    //     "use strict";
    //     window.location.reload();
    // });

    // window reload on rotate
    if (window.DeviceOrientationEvent) {
        window.addEventListener('orientationchange', function () { location.reload(); }, false);
    }
}, 1000)

// sidebar items active 
let elem = document.querySelectorAll(".sidebar-items span , .sidebar-items svg");
for (let i = 0; i < elem.length; i++) {
    elem[i].onclick = function () {
        let current = document.querySelector(".sidebar-items a.active");
        if (current) current.classList.remove("active");
        this.parentNode.classList.add('active');
        console.log(this.parentNode);
    };
}

let myNotifications = document.getElementById('notifications');
let myDash = document.getElementById('dashboard');
document.addEventListener('click', () => {
    if (notify.style.top === "30px" || notify.style.right === "20px") {
        myNotifications.classList.add('active');

    }
    else {
        myDash.classList.add('active');
        myNotifications.classList.remove('active');
    }
})

// notification blur
function notificationsBlur() {
    myNotifications.classList.remove('active');
}





// ---------- card 3 dots -----------
document.querySelector(".dots").addEventListener('click', () => {
    let dropDownList = document.querySelector(".dot-dropdown");
    if (dropDownList.style.display === "block") {
        dropDownList.style.display = "none";
    }
    else {
        dropDownList.style.display = "block";

    }

})
window.onclick = function (event) {


    // close dropdown list when click out
    let dropdowns = document.querySelectorAll(".dot-dropdown");
    if (!event.target.matches('.dots') && !event.target.matches('.dot')) {
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }

}






// ---------------- favorite star active ------------
function favorite() {
    document.querySelector('.fav-star').classList.toggle('star-active');
}





// ------------ burger nav bar " for small screens under 720px " ----------------

function showBurgerIcon() {
    let myBurgerItems = document.querySelector("#myLinks");
    let myBurgerIcon = document.querySelector(".icon");
    if (myBurgerItems.style.maxHeight === "200px") {

        myBurgerItems.style.maxHeight = "0";
        myBurgerIcon.style.transform = "rotate(0deg)";
        myBurgerItems.style.transition = "max-height 0.5s ease-in";

    } else {
        myBurgerItems.style.maxHeight = "200px";
        myBurgerItems.style.transition = "max-height 0.5s ease-out";
        myBurgerIcon.style.transform = "rotate(-90deg)";

    }
}







//  ------------ 3 dots popup ------------

let modal = document.getElementById('myModal');
let modalContent = document.querySelector('.modal-content p');
let close = document.querySelector('.close');

// edit popup
function editPopUp() {
    modal.style.display = "flex";
}

close.onclick = () => {
    modal.style.display = "none";
}




// ------------- Notifications popup ---------
let notify = document.querySelector(".notify-modal");
function showNotification() {
    if (window.innerWidth > 1100) {
        if (notify.style.top === "30px") {
            notify.style.top = "-700px";
        }
        else {
            notify.style.top = "30px";
        }
    }

    else if (window.innerWidth >= 721 & window.innerWidth <= 1100) {
        if (notify.style.right === "20px") {
            notify.style.right = "-400px"

        }
        else {
            notify.style.right = "20px"


        }
    }
    else if (window.innerWidth <= 720) {
        if (notify.style.left === "10px") {
            notify.style.left = "-550px"
        }
        else {
            notify.style.left = "10px"
        }
    }


}

var ignoreClickOnMeElement = document.getElementById('notification-container');
let myCont = document.querySelector('.content')
myCont.addEventListener('click', function (event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
        if (window.innerWidth >= 1101) {
            if (notify.style.top === "30px") {
                notify.style.top = "-700px"

            }
        }
        else if (window.innerWidth >= 721 & window.innerWidth <= 1100) {
            if (notify.style.right === "20px") {
                notify.style.right = "-400px"

            }
        }
    }


});

