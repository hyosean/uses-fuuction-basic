const form = document.querySelector('#join');
const btnSend = form.querySelector('input[type=submit]');

btnSend.onclick = function (e) {
    if (!userid.value) {
        userid.parentNode.classList.add('error');
        e.preventDefault();
    }

    if (!pwd.value) {
        pwd.parentNode.classList.add('error');
        e.preventDefault();
    }

    if (!email.value) {
        email.parentNode.classList.add('error');
        e.preventDefault();
    }

    let items = form['hobby'];

    let isChecked = false;
    items.forEach(function (item) {
        if (item.checked) isChecked = true;
    });

    let items2 = form['gender'];
    let isChecked2 = false;
    items2.forEach(function (item) {
        if (item.checked) isChecked2 = true;
    });

    console.log(isChecked2);
}