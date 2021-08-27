
setTimeout(() => {
    // window reload on rotate
    if (window.DeviceOrientationEvent) {
        window.addEventListener('orientationchange', function () { location.reload(); }, false);
    }
}, 1000)


// ------------  sidebar account sign out popup ----------
const signDeletePopUp = document.getElementById('sign-delete-popup');
const signOutPopUp = document.getElementById('signout-modal');
const signOutClose = document.querySelector('#signout-modal .close');
const deletePopup = document.querySelector('.dropdown-content #delete-task')
const popUpParagraph = document.querySelector('.modal-warning p');
const warnFirstBtn = document.querySelector('.warn-pop-btn #red-btn');

function signoutaAndDeletePopUp(paragraph, redBtn, url) {
    popUpParagraph.innerHTML = ` Are you sure you want to ${paragraph}?`
    warnFirstBtn.innerHTML = `${redBtn}`
}
// 3 dots delete task popup
deletePopup.onclick = function () {
    signoutaAndDeletePopUp("delete this workspace", "Delete")
    signOutPopUp.style.display = "flex";
}


//  sign out popup
function signOut() {
    signoutaAndDeletePopUp("Sign Out", "Sign Out")
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








// tasks tabs 
let taskTabItems = document.querySelectorAll(".task-tab span");
for (let i = 0; i < taskTabItems.length; i++) {
    taskTabItems[i].onclick = function () {
        let currentTab = document.querySelector(".task-tab div.task-tab-active");
        if (currentTab) currentTab.classList.remove("task-tab-active");
        this.parentNode.classList.add('task-tab-active');


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


// ---------- card 3 dots -----------
document.querySelector(".dots").addEventListener('click', () => {
    const dropDownList = document.querySelector(".dot-dropdown");
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





//  ------------ 3 dots popup & Create new workspace ------------

let editModal = document.getElementById('edit-modal');
let editClose = document.querySelector('#edit-modal .close');
let addMemberModal = document.getElementById('add-member-modal');
let addMemberClose = document.querySelector('#add-member-modal .close');


function createEditPopUp(title, greenBtn, url) {
    document.querySelector('.modal-title').innerHTML = `${title} Workspacer`;
    document.querySelector('.pop-btn .save').innerHTML = `${greenBtn}`;
}


// create popUp
function createPopUp() {
    createEditPopUp("Add New", "Create")
    editModal.style.display = "flex";
}
// edit popup
function editPopUp() {
    createEditPopUp("Edit", "Update")
    editModal.style.display = "flex";
}
// edit close
editClose.onclick = () => {
    editModal.style.display = "none";
}

// add member popup
function addMemberPopUp() {
    addMemberModal.style.display = "flex";
}
// add member close
addMemberClose.onclick = () => {
    addMemberModal.style.display = "none";
}





// ------------- Notifications popup ---------
let notify = document.querySelector(".notify-modal");
const smNotification = document.querySelector('#notifications-sm-icon svg path');
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
let myDash = document.getElementById('dashboard');
myNotifications.addEventListener('click', () => {
    if (notify.style.top === "30px" || notify.style.right === "20px") {
        myNotifications.classList.add('active');

    }
    else {

        myNotifications.classList.remove('active');
        myDash.classList.add('active');

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
                myDash.classList.add('active');
            }
        }
        else if (window.innerWidth >= 721 & window.innerWidth <= 1100) {
            if (notify.style.right === "20px") {
                notify.style.right = "-400px";
                myNotifications.classList.remove('active');
                myDash.classList.add('active');
            }
        }
    }


});

