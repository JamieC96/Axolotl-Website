const form = document.getElementById('form')
const number = document.getElementById('number')


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputConfig = element.parentElement;
    const errorDisplay = inputConfig.querySelector('.error');

    errorDisplay.innerText = message;
    inputConfig.classList.add('error');
    inputConfig.classlist.remove('success')
}


const validateInputs = () => {
    const numberValue = number.value;


    {if(numberValue === ''){
        setError(number, 'Mobile number required');
    } else {
        setSuccess(number);
    }}

    
}
 