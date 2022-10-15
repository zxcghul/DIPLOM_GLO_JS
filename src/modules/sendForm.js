import { validateTrue } from "./validateTrue" 

const sendForm = ({
    formId
}) => {
    const form = document.querySelector(`form[name=${formId}]`);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка..';
    const successText = 'Спасибо!  Наш менеджер с вами свяжется!';
    

    statusBlock.style.color = 'black';
    
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        console.log(formElements);
        const formData = new FormData(form);
        const formBody = {};
        console.log(formData);
        console.log(form);
        if (validateTrue(formElements)) {
            statusBlock.textContent = loadText;
        }
        
        form.append(statusBlock);
        formData.forEach((val, key) => {
            if (key === 'user_message') {
                if (val === '') {
                    return
                }
            }
            formBody[key] = val;
        })
        if (validateTrue(formElements)) {
            sendData(formBody).then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = '';
                        input.classList.remove('success')
                        
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        }
        setTimeout(() => {
            statusBlock.textContent = '';
        }, 3000);
    }

    try {
        if (!form) {
            throw new Error('Верните форму')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default sendForm