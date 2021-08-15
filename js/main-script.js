

// sidebar items active 
let elem = document.querySelectorAll(".sidebar-items span");
for (let i = 0; i < elem.length; i++) {
    elem[i].onclick = function () {
        let current = document.querySelector(".sidebar-items a.active");
        if (current) current.classList.remove("active");
        this.parentNode.classList.add('active');
        console.log(this.parentNode);
    };
}



// Sidebar animation

if (window.innerWidth <= 1100) {

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".sidebar-items").style.padding = "30px 0";
            // document.querySelector(".sidebar .sidebar-menu ").style.fontSize = "25px";
            document.querySelector(".sidebar").style.padding = "30px 0";

        } else {
            document.querySelector(".sidebar-items").style.padding = "80px 0";
            document.querySelector(".sidebar").style.padding = "80px 0";

            // document.querySelector(".sidebar .sidebar-menu ").style.fontSize = "15px";
        }
    }




}
