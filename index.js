let submitBtn = document.getElementById('submit');
let combinedList = new Set();

let object1 = [ 
'Matt Johnson',
'Bart Paden',
'Ryan Doss',
'Jared Malcolm'
];

let object2 = [
'Matt Johnson',
'Bart Paden',
'Jordan Heigle',
'Tyler Viles',
];



submitBtn.onclick = (event) => {
    let errors = false;
    for (field of ['email', 'subject', 'message']) {
        let ele = document.getElementById(field);
        if (field == 'email') {
            let mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!ele.value.match(mailRegex)) {
                document.getElementById(`error-${field}`).style.visibility = 'visible';
                errors = true;
            }
            else {
                document.getElementById(`error-${field}`).style.visibility = 'hidden';
            }
        }
        else {
            if (ele.value == '') {
                document.getElementById(`error-${field}`).style.visibility = 'visible';
                errors = true;
            }
            else {
                document.getElementById(`error-${field}`).style.visibility = 'hidden';
            }
        }
    }
    if (!errors)
        submitForm();
}

function submitForm() {
    alert("Form successfully submitted");
    clearForm();
}

function clearForm() {
    for (field of ['email', 'subject', 'message']) {
        document.getElementById(field).value = '';
    }
}

function performMock() {
    if (combinedList.size)
        alert("Lists already combined");
    else {
        alert("Combining lists...");
        for (let name of object1) combinedList.add(name);
        for (let name of object2) combinedList.add(name);
        let msg = "";
        for (let entry of combinedList.entries()) msg += entry[0] + '\n';
        alert([...combinedList].join('\n'));
    }
}