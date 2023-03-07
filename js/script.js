const ipnutname = document.getElementById('inputName')
const inputnum = document.getElementById('inputCardNumber')
const cardNum = document.getElementById('cardnumber')
const cardName = document.getElementById('cardname')
const cardExpire = document.getElementById('cardexpire')
const submit = document.getElementById('submit')
const success = document.getElementById('success')
const expireMonth = document.getElementById('ExpireMonth')
const expireYear = document.getElementById('ExpireYear')
const cvc = document.getElementById('cvc')
const form = document.querySelector('form')
const cardexpireMonth = document.getElementById('cardexpireMonth')
const cardexpireYear = document.getElementById('cardexpireYear')
const cardcvc = document.querySelector('.cardcvc')

ipnutname.addEventListener('change',(e)=>{
    cardName.innerText = e.target.value
})

inputnum.addEventListener('change',(e)=>{
    cardNum.innerText = e.target.value
})

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('submit');
    if(ipnutname.value !== '' && inputnum.value !== '' && expireYear.value !== '' && expireMonth.value !== '' && cvc.value !== ''){
        success.style.display = 'block'
        form.style.display = 'none'
    }  
})

expireMonth.addEventListener('change',(e)=>{
    cardexpireMonth.innerText = e.target.value
})

expireYear.addEventListener('change',(e)=>{
    cardexpireYear.innerText = e.target.value
})

cvc.addEventListener('change',(e)=>{
    cardcvc.innerText = e.target.value
})