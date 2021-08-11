

// Sidebar animation
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".sidebar-menu").style.padding = "30px 0";
        // document.querySelector(".sidebar .sidebar-menu ").style.fontSize = "25px";
        document.querySelector(".sidebar").style.padding = "30px 0";

    } else {
        document.querySelector(".sidebar-menu").style.padding = "80px 0";
        document.querySelector(".sidebar").style.padding = "80px 0";

        // document.querySelector(".sidebar .sidebar-menu ").style.fontSize = "15px";
    }
}