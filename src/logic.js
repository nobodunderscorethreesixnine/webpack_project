// importing image
import './style.css'
import pic from '../image/pic.jpg'

const button = document.querySelector('#btn')

button.addEventListener('click', ()=>{
    console.log('Webpack Webpack')
})

const img = document.querySelector('#img')
img.src = pic;
