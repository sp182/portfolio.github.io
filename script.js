
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}



//dark mode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }
    else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

//contact 

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sanjeevani.pramanik2020@vitstudent.ac.in",
        Password : "epxywq02",
        To : 'sanjeevanip182@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
                + "<br>Email: " + document.getElementById("email").value
                + "<br>Phone no: " + document.getElementById("phone").value
                + "<br>Message: " + document.getElementById("message").value
            }).then(
      message => alert("Message Sent Succesfully")
    );
}