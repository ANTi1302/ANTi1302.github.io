function ktten() {
    var reg = /[A-Z]/;
    if (reg.test(document.getElementById('txtten').value.trim()) == false) {
            ten.innerHTML = "* bat buoc nhap - Ten sai";
            return false;
        }
        else {
          ten.innerHTML = "";
            return true;
        }
}
function kiemtramail() {
    var re1 = /[a-zA-Z_0-9]+@(gmail|hotmail).com/;
    if (re1.test(document.getElementById('txtmail').value.trim()) == false) {
        mail.innerText = "* phai du la gmail va hotmail";
        return false;
    }
    else {
        mail.innerText = "";
        return true;
    }
}
function kiemtrasdt() {
    var re2 = /\d{10,12}/;
    if (re2.test(document.getElementById('txtsdt').value.trim()) == false) {
        sdt.innerHTML = "* phai la so va tu 11-12";
        return false
    }
    else {
        sdt.innerHTML = "";
        return true;
    }
}
function kiemtradiachi() {
    re = /[\w,.]+/;
    if (re.test(document.getElementById('txtdc').value.trim()) == false) {
        dc.innerHTML = "* bat buoc nhap";
        return false;
    }
    else {
        dc.innerHTML = "";
        return true;
    }
}
function kiemtraNS() {
    var date = new Date(document.getElementById("txtns").value);
    var today = new Date();

    if ((today.getFullYear() - date.getFullYear()) < 18) {
        ns.innerHTML = "* Chua du tuoi";
        return false;
    }
    else {
        ns.innerHTML = "";
        return true;
    }

}
//var count = 1;
//function check() {
//    var ten = document.getElementById("txtten").value;
//    var lop = document.getElementById("dslop").value;
//    var mon = document.getElementById("dsmon").value;
//    var n = document.getElementById("form1").length;
//    var m = document.getElementById("form1");
//    var loaiMH;
//    for (var i = 0; i < n; i++) {
//        if (m.elements[i].type == "radio" && m.elements[i].checked == true)
//            loaiMH = m.elements[i].value;
//    }
//    if (kiemtra(ten, "ten")) {
//        var s = "<tr>";
//        s += "<td>" + (count++) + "</td>";
//        s += "<td>" + ten + "</td>";
//        s += "<td>" + lop + "</td>";
//        s += "<td>" + mon + "</td>";
//        s += "<td>" + loaiMH + "</td>";
//        s += "</tr>";
//        document.getElementById("dulieu").innerHTML += s;
//    }
//}
var count = 1;
function data() {
    var ten = document.getElementById("txtten").value;
    var ns = Date(document.getElementById("txtns").value);
    var mail = document.getElementById("txtmail").value;
    var sdt = document.getElementById("txtsdt").value;
    var dc = document.getElementById("txtdc").value;
    var tp = document.getElementById("sel1").value;

    var n = document.getElementById("form1").length;
    var m = document.getElementById("form1");
    var gt;
    for (var i = 0; i < n; i++) {
        if (m.elements[i].type == "radio" && m.elements[i].checked == true)
            gt = m.elements[i].value;
    }
    if (ktten(ten, "ten") && kiemtraNS(ns,"ns") && kiemtramail(mail,"mail") && kiemtrasdt(sdt,"sdt") && kiemtradiachi(dc,"dc")) {
        var s = "<tr>";
        s += "<td>" + (count++) + "</td>";
        s += "<td>" + ten + "</td>";
        s += "<td>" + ns + "</td>";
        s += "<td>" + mail + "</td>";
        s += "<td>" + sdt + "</td>";
        s += "<td>" + dc + "</td>";
        s += "<td>" + tp + "</td>";
        s += "<td>" + gt + "</td>";
        s += "</tr>";
        document.getElementById("dulieu").innerHTML += s;
    }
}