import { validateTrue } from "./validateTrue" 

const validation = () => {
    const inputsEmail = document.querySelectorAll('input[name=fio]');
    const inputsTel = document.querySelectorAll('input[name=tel]');
    const inputsArea = document.querySelectorAll('input[name=message]');
    const validationTel = () => {
        inputsTel.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9+]+/,"");
                if (item.classList.contains('error') || item.classList.contains('success')) { //после первого ввода чтобы переключало, если пользователь вводит неправильно
                    const transformMassive = [item];
                    validateTrue(transformMassive)
                }
            });
        });
    };

    const validationEmail = () => {
        inputsEmail.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я]+/,"");
                if (item.classList.contains('error')) {
                    const transformMassive = [item];
                    validateTrue(transformMassive)
                }
            });
        });
    };

    const validationArea = () => {
        inputsArea.forEach((item) => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[a-zA-Z0-9]+/, "");
                if (item.classList.contains('error') || item.classList.contains('success')) {
                    const transformMassive = [item];
                    validateTrue(transformMassive)
                }
            });
        });
    };

    validationTel();
    validationEmail();
}
export default validation