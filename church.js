   /* creat a new class called 'active' that toggles eachtime
    menuToggle is clicked*/
     /* creat a new class called 'active' that toggles eachtime
    menuToggle is clicked*/
    let menuToggle = document.querySelector('.menuToggle');
    let navigation= document.querySelector('.navigation');
    menuToggle.onclick= function(){
        navigation.classList.toggle('active')
    }
 
 
    const quotes = {
     love1:'"We love because he first loved us."',
     love2:'"Jesus loves you"',
     love3:'"Give thanks to the Lord for He is good"',
     love4:'"Hatred stirs up strife,But love covers all sin"'
 }
     
 
 
 
 // function that displays the quotes object every five seconds
 setInterval(() => {
      document.querySelector('.quotes').innerHTML= (quotes[Object.keys(quotes)[Math.floor(Math.random()*Object.keys(quotes).length)]]) 
     
 },5000);

 const email = document.querySelector('#email')
const name = document.querySelector('#name')
const userList = document.querySelector('#users')
const myform = document.querySelector('#my-form')
const msg = document.querySelector('.msg')

myform.addEventListener('submit', onSubmit)
function onSubmit(e){
    e.preventDefault();

    if(name.value===''|| email.value===''){
        msg.classList.add('error');
        msg.innerHTML='please fill the form'


    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(` Name:${name.value} Email:${email.value}`))
        userList.appendChild(li)
        msg.style.background = "pink"
        msg.innerHTML='Thank you'
        setTimeout(()=>{
            msg.remove()
        },2000)
    }

    name.value = '';
    email.value = "";

}
    