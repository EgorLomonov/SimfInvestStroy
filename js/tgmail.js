"use strict"

const TELEGRAM_BOT_TOKEN = "7332479910:AAHrlZoFLj0C6Japxjcmd9FX1Ly7zH9MgOs";
const TELEGRAM_CHAT_ID = "@RevercePolarity";
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram (event) {
    event.preverntDefault()

    const form = event.target;
    const formBtn = document.querySelector('button button-md button-primary button-winona wow slideInDown')
    const formSendResult = document.querySelector('.form')
    formSendResult.textContent = '';
    
    const {name, tel, kvm} = Object.fromEntries(new FormData (form).entries())
    
    const text = `Заявка от ${name},\n Номер телефона ${tel}, \n , Город Симферополь, ${kvm} квадратных метров `;

    try{
        formBtn.textContent = 'Загрузка...'
        const response = await fetch(API,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        });

        if(response.ok){
            formSendResult.textContent = 'Спасибо за заявку, специалист свяжется с вами в ближайшее время.'
            form.reset()
        }else{
            throw new Error(response.statusText)
        }
    }catch(error){
        console.error(error)
           formSendResult.textContent = 'Упс...Чтото пошло не так. Попробуйте позже'
    }finally{
        formBtn.textContent = 'Отправить заявку'
    }
}