var reservations = [];

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        register();
    });
});

function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var model = document.getElementById("model").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    if (!isValidName(name)) {
        showError("name", "Please enter a valid name (letters only)");
    } else if (!isValidEmail(email)) {
        showError("email", "Please enter a valid email address (must contain @)");
    } else if (!isValidPhone(phone)) {
        showError("phone", "Please enter a valid phone number (digits only)");
    } else if (model === "") {
        showError("model", "Please select a model");
    } else if (date === "") {
        showError("date", "Please select a date");
    } else if (time === "") {
        showError("time", "Please select a time");
    } else {
        alert("All data is correct!");
        reservations.push({
            "name": name,
            "email": email,
            "phone": phone,
            "model": model,
            "date": date,
            "time": time
        });
        obtainData();
        clean();
    }
}

function isValidName(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

function isValidEmail(email) {
    return email.includes('@');
}

function isValidPhone(phone) {
    return /^\d+$/.test(phone);
}

function showError(inputId, message) {
    alert(message);
    document.getElementById(inputId).focus();
    document.getElementById(inputId).value = "";
}

function clean() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("model").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("name").focus();
}

function obtainData() {
    var table = document.getElementById("reservationTable");
    
    table.innerHTML = "<tr><th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Model</th><th>Date</th><th>Time</th><th>Action</th></tr>";

    for (var i = 0; i < reservations.length; i++) {
        var row = table.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = i + 1;
        cell2.innerHTML = reservations[i].name;
        cell3.innerHTML = reservations[i].email;
        cell4.innerHTML = reservations[i].phone;
        cell5.innerHTML = reservations[i].model;
        cell6.innerHTML = reservations[i].date;
        cell7.innerHTML = reservations[i].time;
        cell8.innerHTML = "<button onclick='selection(" + i + ")'>Edit</button>";
    }
}

function selection(i) {
    document.getElementById("name").value = reservations[i].name;
    document.getElementById("email").value = reservations[i].email;
    document.getElementById("phone").value = reservations[i].phone;
    document.getElementById("model").value = reservations[i].model;
    document.getElementById("date").value = reservations[i].date;
    document.getElementById("time").value = reservations[i].time;

    document.getElementById("submit").style.display = "none";
    document.getElementById("save").style.display = "inline-block";
    document.getElementById("cancel").style.display = "inline-block";
    document.getElementById("selectedIndex").value = i;
}

function cancelButton() {
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("save").style.display = "none";
    document.getElementById("cancel").style.display = "none";
    clean();
}

function saveButton() {
    var i = document.getElementById("selectedIndex").value;
    reservations[i] = {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "phone": document.getElementById("phone").value,
        "model": document.getElementById("model").value,
        "date": document.getElementById("date").value,
        "time": document.getElementById("time").value
    };
    obtainData();
    cancelButton();
}