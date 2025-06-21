// Check for payment success status on page load
function parseCookies() {
    const cookies = {};
    document.cookie.split(';').forEach(cookie => {
        const [name, ...rest] = cookie.trim().split('=');
        cookies[name] = rest.join('='); // rejoin in case value has "="
    });
    return cookies;
  }
  
  const logout_button = document.getElementById('logout');
  
  document.addEventListener('DOMContentLoaded', () => {
    const cookies = parseCookies();
  
    if (!cookies.authToken || cookies.authToken.length <= 20) {
      alert("You are not authorized! Please login first");
      window.location.href = "../homepage/homepage.html";
    } 
  });

const details = new URLSearchParams(window.location.search);
const vehicleType = details.get('vehicleType');
const name = details.get('name');
const phone = details.get('mobileNumber');
const complexName = "alpha";



window.addEventListener('load', function() {
    
    fetch('http://localhost:5000/ticket/alpha/slots')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json(); // Assuming the response is JSON
  })
  .then(data => {
    console.log('Data received:', data.data);
    // You can now use the data in your application

            if (data.data) {
                data.data.forEach(buttonId =>{
        
                const responseButton = document.getElementById(buttonId);
                if (responseButton) {
                    responseButton.style.backgroundColor = 'red';
                }
        
            })
            }
        
            const NEV1 = document.getElementsByClassName('spaces');
            const NEV2 = document.getElementsByClassName('spaces2');
            const NEV3 = document.getElementsByClassName('spaces3');
            const NEV4 = document.getElementsByClassName('spaces4');
            const EVC = document.getElementsByClassName('spaces5');
            const EV1 = document.getElementsByClassName('spaces6');
            const EV2 = document.getElementsByClassName('spaces7');
            const B1 = document.getElementsByClassName('spaces8');
            const B2 = document.getElementsByClassName('spaces9');
            const B3 = document.getElementsByClassName('spaces10');
            const B4 = document.getElementsByClassName('spaces11');
        
        if(vehicleType === "Non-Electronic Vehicles"){
        
            
            for (let i = 0; i < 13; i++) {
                
                EVC[i].style.backgroundColor = 'red';
                EV1[i].style.backgroundColor = 'red';
                EV2[i].style.backgroundColor = 'red';
            }
            for (let i = 0; i < 20; i++) {    
                B1[i].style.backgroundColor = 'red';
                B2[i].style.backgroundColor = 'red';
                B3[i].style.backgroundColor = 'red';
                B4[i].style.backgroundColor = 'red';
            }
        
        } else if(vehicleType === 'Electronic Vehicles'){
            
            for (let j = 0; j < 20; j++) { 
                B1[j].style.backgroundColor = 'red';
                B2[j].style.backgroundColor = 'red';
                B3[j].style.backgroundColor = 'red';
                B4[j].style.backgroundColor = 'red';
            }
            for (let i = 0; i < 15; i++) {
                NEV1[i].style.backgroundColor = 'red';
            }
            for (let i = 0; i < 13; i++) {
                NEV2[i].style.backgroundColor = 'red';
                NEV3[i].style.backgroundColor = 'red';
                NEV4[i].style.backgroundColor = 'red';
                EVC[i].style.backgroundColor = 'red';
            }
        
        } else if(vehicleType == "Electronic Vehicles   Charging"){
        
            for (let i = 0; i < 15; i++) {
                NEV1[i].style.backgroundColor = 'red';
            }
            for (let i = 0; i < 13; i++) {
                NEV2[i].style.backgroundColor = 'red';
                NEV3[i].style.backgroundColor = 'red';
                NEV4[i].style.backgroundColor = 'red';
                EV1[i].style.backgroundColor = 'red';
                EV2[i].style.backgroundColor = 'red';
            }
            for (let i = 0; i < 20; i++) { 
                B1[i].style.backgroundColor = 'red';
                B2[i].style.backgroundColor = 'red';
                B3[i].style.backgroundColor = 'red';
                B4[i].style.backgroundColor = 'red';
            }
        
        } else if(vehicleType === 'Two Wheller Vehicles'){
            
            for (let i = 0; i < 15; i++) {
                NEV1[i].style.backgroundColor = 'red';
            }
            for (let i = 0; i < 13; i++) {
            
                NEV2[i].style.backgroundColor = 'red';
                NEV3[i].style.backgroundColor = 'red';
                NEV4[i].style.backgroundColor = 'red';
                EVC[i].style.backgroundColor = 'red';
                EV1[i].style.backgroundColor = 'red';
                EV2[i].style.backgroundColor = 'red';
            }
        
        }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });



});

    window.addEventListener('load', function() {
});

let button;
let buttonId;

function handleButtonClick(event) {
    button = event.target.closest('button');

    if (button) {
        buttonId = button.id;

        const responseButton = document.getElementById(buttonId);

        if(responseButton.style.backgroundColor === 'red'){
            alert('This space is already Booked');
        } else {
            if(vehicleType === null || name === null || phone === null || complexName === null){
                alert("Booking not allowed at this moment")
            } else {
                window.location.href = `../payment/payment.html?buttonId=${buttonId}&vehicleType=${vehicleType}&name=${name}&mobileNumber=${phone}&complexName=${complexName}`;  // Pass button ID to the next page
            }
        }
       
    }
}

const buttonClasses = ['spaces', 'spaces2', 'spaces3', 'spaces4', 'spaces5', 'spaces6', 'spaces7', 'spaces8', 'spaces9', 'spaces10', 'spaces11'];
buttonClasses.forEach(className => {
    const buttons = document.querySelectorAll(`.${className}`);
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});

