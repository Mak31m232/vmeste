var shetmenu = 0;

function menu() {
    if (shetmenu==0) {
        let menu = document.getElementById("menu") 
        let menuicon = document.getElementById("menu-icon") 
        let registration = document.getElementById("registration")
        let Mobillmenu = document.getElementById("menu-mobill") 
        Mobillmenu.style.marginLeft="0%"
        registration.style.marginTop="-28%"
        menuicon.style.marginLeft="0%"
        menu.style.marginLeft="-25%"
        shetmenu = 1;
    }   
    else if (shetmenu==1){
        let menu = document.getElementById("menu")
        let menuicon = document.getElementById("menu-icon") 
        let registration = document.getElementById("registration")
        let Mobillmenu = document.getElementById("menu-mobill") 
        Mobillmenu.style.marginLeft="-50%"
        registration.style.marginTop="-25%"
        menuicon.style.marginLeft="-20%"
        menu.style.marginLeft="0%"
        shetmenu = 0;
    }
}

function registrationSignup() { 
    let user = document.getElementById("usernameFiel").value
    let user2 = document.getElementById("usernameField").value
    let shadow = document.getElementById("shadow")
    let storythis = document.getElementById("story-this")
    let registration = document.getElementById("registration");
    registration.style.display = "none"
    shadow.style.display = "none"
    console.log("Password: "+user)
    console.log("Name: "+user2)
    storythis.style.display = "none"
    alert("Вы успешно вошли в акаунт")
}

function registrationLogin() {
    let user = document.getElementById("usernameFiel").value
    let user2 = document.getElementById("usernameField").value
    let shadow = document.getElementById("shadow")
    let storythis = document.getElementById("story-this")
    let registration = document.getElementById("registration");
    registration.style.display = "none"
    shadow.style.display = "none"
    console.log("Password: "+user)
    console.log("Name: "+user2)
    acaunt.style.marginLeft = "96.5%"
    storythis.style.display = "none"
    alert("Вы успешно зарегистрировались")
}

let shet = 0;

function menuUser() {
    if (shet==0) {
        let menuUser = document.getElementById("menu-user")
        menuUser.style.display="block"
        shet = 1;
    }   
    else if (shet==1){
        let menuUser = document.getElementById("menu-user")
        menuUser.style.display="none"
        shet = 0;
    }
}

let add = 0;

function addDiv() {
    if (add==0) {
        let addDiv = document.getElementById("add-div")
        addDiv.style.display="block"
        add = 1;
    }   
    else if (add==1){
        let addDiv = document.getElementById("add-div")
        addDiv.style.display="none"
        add = 0;
    }
}