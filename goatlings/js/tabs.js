function openGoatTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabbed");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
