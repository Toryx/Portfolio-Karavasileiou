$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up').addClass("show");
        }else{
            $('.scroll-up').removeClass("show");
        }
    });
    
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop : 0})
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.info').click(function(){
        $('.navbar .menu').toggleClass("active");
        
    });
    $('.start').click(function(){
        $('.navbar .menu').toggleClass("active");
        
    });
    $('.epik').click(function(){
        $('.navbar .menu').toggleClass("active");
        
    });
    $('.gnwsi').click(function(){
        $('.navbar .menu').toggleClass("active");
        
    });

    //animation name 
    var typed = new Typed(".typing-1", {
        strings: ["Programer","Android Developer","Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });   
    var typed = new Typed(".typing-2", {
        strings: ["Programer","Android Developer","Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });   
});


let contactInfo = firebase.database().ref("emails");

document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();
    let name = document.querySelector(".nameform").value;
    let email = document.querySelector(".emailform").value;
    let message = document.querySelector(".messageform").value;
    let thema = document.querySelector(".themaform").value;

    console.log(name);
    SaveMessages(name,email,thema,message)
    window.alert("Ευχαριστώ πολύ : " + name +". Θα επικοινωνήσω το συντομότερο δυνατόν");
    document.querySelector(".contact-form").reset();
}

function SaveMessages(name,email,thema,message){
 let newContactInfo = contactInfo.push();
 newContactInfo.set({
    Name : name,
    Email : email,
    Thema : thema,
    Message : message,
  });
}