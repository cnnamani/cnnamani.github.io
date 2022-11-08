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
    