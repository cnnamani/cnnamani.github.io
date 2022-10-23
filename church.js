const quotes = {
    love1:'"We love because he first loved us."',
    love2:'"Jesus loves you"',
    love3:'"Give thanks to the Lord for He is good"',
    love4:'"Hatred stirs up strife,But love covers all sin"'
}
    




setInterval(() => {
     document.querySelector('.demo').innerHTML= (quotes[Object.keys(quotes)[Math.floor(Math.random()*Object.keys(quotes).length)]]) 
    
},5000);
   
   
   

    

   


   