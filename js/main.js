// Validation Messageon
const form = document.getElementById('form');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const product = document.getElementById('product');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const validateInputs = () => {
    const name = name.value.trim();
    const phone = phone.value.trim();
    const product = product.value.trim();

    if(nameValue === '') {
        setError(name, 'name is required');
    } else {
        setSuccess(name);
    }

    if(phoneValue === '') {
        setError(phone, 'phone is required');
    } else {
        setSuccess(phone);
    }

    if(productValue === '') {
        setError(product, 'product is required');
    } else {
        setSuccess(product);
    }
};

