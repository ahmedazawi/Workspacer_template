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


// ------------  sidebar account sign out popup ----------

const signOutPopUp = document.getElementById('signout-modal');
const signOutClose = document.querySelector('#signout-modal .close');

const deletePopup = document.querySelector('#delete-popup')
const closeDeletePopup = document.querySelector('#delete-popup .close')


//  sign out popup
function signOut() {
    signOutPopUp.style.display = "flex";
}
// close 
signOutClose.onclick = () => {
    signOutPopUp.style.display = "none";

}



// --------- sidebar items active --------------
let elem = document.querySelectorAll(".sidebar-items span , .sidebar-items svg");
for (let i = 0; i < elem.length; i++) {
    elem[i].onclick = function () {
        let current = document.querySelector(".sidebar-items a.active");
        if (current) current.classList.remove("active");
        this.parentNode.classList.add('active');
    };
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





// ------------- Notifications popup ---------
let notify = document.querySelector(".notify-modal");
const smNotification = document.querySelector('#notifications-sm-icon svg');
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
            smNotification.setAttribute("fill", "#abb4d4")

        }
        else {
            notify.style.left = "10px"
            smNotification.setAttribute("fill", "rgb(26, 189, 196)")
        }
    }


}
// notification close
let myNotifications = document.getElementById('notifications');
let mySetting = document.getElementById('settings');
myNotifications.addEventListener('click', () => {
    if (notify.style.top === "30px" || notify.style.right === "20px") {
        myNotifications.classList.add('active');

    }
    else {

        myNotifications.classList.remove('active');
        mySetting.classList.add('active');

    }
})
// close notification popup when click out
var ignoreClickOnMeElement = document.getElementById('notification-container');
let myCont = document.querySelector('.content')
myCont.addEventListener('click', function (event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
        if (window.innerWidth >= 1101) {
            if (notify.style.top === "30px") {
                notify.style.top = "-700px";
                myNotifications.classList.remove('active');
                mySetting.classList.add('active');
            }
        }
        else if (window.innerWidth >= 721 & window.innerWidth <= 1100) {
            if (notify.style.right === "20px") {
                notify.style.right = "-400px";
                myNotifications.classList.remove('active');
                mySetting.classList.add('active');
            }
        }
    }


});

