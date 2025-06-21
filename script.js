window.onload = () => {
    generatePassword();
};

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUpper = document.getElementById('uppercase').checked;
    const includeLower = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{};:,.<>?';

    let allowedChars = '';
    if (includeUpper) allowedChars += upper;
    if (includeLower) allowedChars += lower;
    if (includeNumbers) allowedChars += numbers;
    if (includeSymbols) allowedChars += symbols;

    if (allowedChars === '') {
        alert('Select at least one option!');
        return;
    }
    let password = '';
    for(let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[index];
    }

    document.getElementById('password').value = password;
    checkStrength(password);
}

function copyPassword() {
    const passFeild = document.getElementById('password');
    passFeild.ariaSelected();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

function checkStrength (password) {
    const strengthMeter = document.getElementById('strength');
    let strength = 0;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W]/.test(password)) strength++;

    if (password.length >+ 12 && strength >= 3) {
        strengthMeter.textContent = 'Strength: Strong 💪';
        strengthMeter.style.color = 'lime';
    } else if (password.length >=8 && strength >=2) {
        strengthMeter.textContent = 'Strength: Medium⚖️';
        strengthMeter.style.color = 'orange';
    } else {
        strengthMeter.textContent = 'Strength: Weak⚠️';
        strengthMeter.style.color = 'red';
    }
}
