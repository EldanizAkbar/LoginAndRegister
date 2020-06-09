document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sem").addEventListener('click', e => {
        e.preventDefault();
        checkInputs();
    });
});

function checkInputs() {
    let name = document.getElementById('fname');
    let surname = document.getElementById('lname');
    let email = document.getElementById('email');
    let password = document.getElementById("password");
    let nameValue = document.getElementById('fname').value.trim();
    let SurnameValue = document.getElementById('lname').value.trim();
    let emailValue = document.getElementById('email').value.trim();
    let passwordValue = document.getElementById('password').value.trim();

    if (nameValue == '') {
        setErrorFor(name, 'Name cannot be blank');
    } else if (nameValue.length <= 2) {
        setErrorFor(name, 'Name must be consist of min 3 letters');
    } else if (nameValue.length >= 16) {
        setErrorFor(name, 'Name must be consist of max 16 letters');
    } else {
        setSuccessFor(name);
    }
    if (SurnameValue == '') {
        setErrorFor(surname, 'Surname cannot be blank');
    } else if (SurnameValue.length <= 2) {
        setErrorFor(surname, 'Surmame must be consist of min 3 letters');
    } else if (SurnameValue.length >= 16) {
        setErrorFor(surname, 'Surname must be consist of max 16 letters');
    } else {
        setSuccessFor(surname);
    }

    if (emailValue == '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue == '') {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length <= 2) {
        setErrorFor(password, 'Password must be consist of min 3 letters');
    } else if (SurnameValue.length >= 16) {
        setErrorFor(password, 'Password must be consist of max 16 letters');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-group success';


    
    let name = document.getElementById("fname").value;
    let surname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let person = new Person(name, surname, email, password);
    if ("people" in localStorage) {
        AllPeople = JSON.parse(localStorage.people);
        if ("length" in AllPeople) {
            AllPeople.push(person);
            localStorage.people = JSON.stringify(AllPeople);
        } else {
            mas = [];
            mas.push(AllPeople);
            mas.push(person);
            localStorage.people = JSON.stringify(mas);
        }
    } else {
        localStorage.people = JSON.stringify(person);
    }
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function Person(name, surname, email, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
}