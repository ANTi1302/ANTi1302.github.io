function kiemtraTen() {
    var re = /^[A-Z]{1}[a-zA-Z]+\s+[a-zA-Z ]/;
    if (re.test(document.getElementById('txtten').value.trim()) == false) {
        ten.innerHTML = "* Không để trống và có mẫu 'Acx dsds'";
        return false;
    }
    else {
        ten.innerHTML = "";
        return true;
    }
}
function kiemtraNS() {
    var date = new Date(document.getElementById("txtns").value);
    var today = new Date();
    if ((today.getFullYear() - date.getFullYear()) < 18) {
        ns.innerHTML = "Chưa đủ tuổi";
        return false;
    }
    else {
        ns.innerHTML = "";
        return true;
    }
}
function kiemtraMail() {
    var re = /^[a-zA-Z]+\w{3,}\@(gmail|mail)(.com)/
    var email = document.getElementById("txtmail").value;
    if (email == "") {
        mail.innerHTML = "Không để trống";
        return false;
    }
    else if (re.test(email) == false) {
        mail.innerHTML = "Không đúng kiểu mail chỉ bao gồm gmail và mail";
        return false;
    }
    else {
        mail.innerHTML = "(*)";
        return true
    }
}
function btnDK() {
    var ten = document.getElementById("txtten").value;
    var date = document.getElementById("txtns").value;
    var email = document.getElementById("txtmail").value;
    var tp = document.getElementById("sel1").value;

    var n = document.getElementById("form1").length;
    var m = document.getElementById("form1");
    var gt;
    for (var i = 0; i < n; i++) {
        if (m.elements[i].type == "radio" && m.elements[i].checked == true)
            gt = m.elements[i].value;
    }
    if (kiemtraTen(ten, "ten") && kiemtraNS(date, "ns") && kiemtraMail(email, "mail")) {
        var s = "<tr>";
        s += "<td>" + ten + "</td>";
        s += "<td>" + date + "</td>";
        s += "<td>" + email + "</td>";
        s+= "<td>" + gt + "</td>";
        s += "<td>" + tp + "</td>";
        s += "</tr>";
        document.getElementById("dulieu").innerHTML += s;
        
    }
}
function thoat() {
    document.getElementById("ex").modal("hide");
}