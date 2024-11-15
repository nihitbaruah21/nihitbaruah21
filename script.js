const users = [];

function registerUser() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const message = document.getElementById('regMessage');

    if (username && password) {
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            message.innerText = 'User already exists!';
        } else {
            users.push({ username, password });
            message.innerText = 'Registration successful!';
            document.getElementById('regUsername').value = '';
            document.getElementById('regPassword').value = '';
        }
    } else {
        message.innerText = 'Please fill all fields!';
    }
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    if (username && password) {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            message.innerText = 'Login successful!';
        } else {
            message.innerText = 'Invalid username or password!';
        }
    } else {
        message.innerText = 'Please fill all fields!';
    }
}

function toggleForms() {
    const regForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const formSwitchText = document.getElementById('formSwitchText');

    regForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
    formSwitchText.innerText = formSwitchText.innerText === 'Login' ? 'Register' : 'Login';
}
