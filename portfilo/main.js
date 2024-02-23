
var d = document.getElementById("eduction")
var open = document.getElementById("skills")
function opentab() {
    open.style.display = "block"
    d.style.display = "none"


}

var d = document.getElementById("eduction")
function openeducation() {
    d.style.display = "block"
    open.style.display = "none"

}




function datees() {
    var dat = new Date()
    var d = dat.getFullYear()
    document.getElementById("foo").innerHTML = d
}
datees()

