const copyBtn = document.querySelector('.copy__icon');
const copyValue = document.querySelector('.output__text');
const output = document.querySelector('.output');
const outputText = document.querySelector('.output__text');
const rangeInput = document.getElementById('range');
const rangeCount = document.querySelector('.main__length-count');
const checkboxes = document.querySelectorAll('.checkbox__input');
const generateBtn = document.querySelector('.generate__btn');

const checkbox1 = document.getElementById('checkbox-1');
const checkbox2 = document.getElementById('checkbox-2');
const checkbox3 = document.getElementById('checkbox-3');
const checkbox4 = document.getElementById('checkbox-4');

const indicator1 = document.querySelector('.indicator-1');
const indicator2 = document.querySelector('.indicator-2');
const indicator3 = document.querySelector('.indicator-3');
const indicator4 = document.querySelector('.indicator-4');


copyBtn.addEventListener('click', (e) => {
    navigator.clipboard.writeText(copyValue.textContent)
        .then( () => {
            output.classList.add('activeOutput');
            setTimeout(() => output.classList.remove('activeOutput'), 1000);
        })
});

checkboxes.forEach(item => {
   item.addEventListener('click', () => {
      item.classList.toggle('activeInput');
   });
});

rangeInput.addEventListener('mousemove', () => {
    console.log(1)
    rangeCount.textContent = rangeInput.value;
});

generateBtn.addEventListener('click', () => {
    if(+rangeCount.textContent >= 6 && (checkbox1.classList.contains('activeInput') ||
                                         checkbox2.classList.contains('activeInput') ||
                                         checkbox3.classList.contains('activeInput') ||
                                         checkbox4.classList.contains('activeInput')))
    {
        outputText.classList.add('activeText');
        outputText.textContent = generatePassword(
            +rangeCount.textContent,
            checkbox1.classList.contains('activeInput'),
            checkbox2.classList.contains('activeInput'),
            checkbox3.classList.contains('activeInput'),
            checkbox4.classList.contains('activeInput')
        );

        let checks = 0;

        checkboxes.forEach(item => {

            if (item.classList.contains('activeInput')) {
                checks++;
            }
        })

        if (checks === 1) {
            indicator1.style.background = '#FF192DFF';
            indicator2.style.background = '';
            indicator3.style.background = '';
            indicator4.style.background = '';
        } else if (checks === 2) {
            indicator1.style.background = '#FFCC2CFF';
            indicator2.style.background = '#FFCC2CFF';
            indicator3.style.background = '';
            indicator4.style.background = '';
        } else if (checks === 3) {
            indicator1.style.background = '#FFCC2CFF';
            indicator2.style.background = '#FFCC2CFF';
            indicator3.style.background = '#FFCC2CFF';
            indicator4.style.background = '';
        } else if (checks === 4) {
            indicator1.style.background = '#a4ffaf';
            indicator2.style.background = '#a4ffaf';
            indicator3.style.background = '#a4ffaf';
            indicator4.style.background = '#a4ffaf';
        }
    }
});

function generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols) {
    let password = "",
        charset = "";

    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersCharset = "0123456789";
    const symbolsCharset = "!@#$%^&*()-_=+[]{}|;:,.<>/?";

    if (useLowercase) {
        charset += lowercaseCharset;
    }
    if (useUppercase) {
        charset += uppercaseCharset;
    }
    if (useNumbers) {
        charset += numbersCharset;
    }
    if (useSymbols) {
        charset += symbolsCharset;
    }

    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}

console.log(generatePassword(
    +rangeCount.textContent,
    document.getElementById('checkbox-1').classList.contains('activeInput'),
    document.getElementById('checkbox-2').classList.contains('activeInput'),
    document.getElementById('checkbox-3').classList.contains('activeInput'),
    document.getElementById('checkbox-4').classList.contains('activeInput')
),+rangeCount.textContent);