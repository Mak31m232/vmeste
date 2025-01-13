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
    let storythis = document.getElementById("vmeste-this")
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
    let storythis = document.getElementById("vmeste-this")
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

function choicePlus() {
    let choice = document.getElementById("choice")
    let shadow = document.getElementById("shadow-choice")
    shadow.style.display = "block"
    choice.style.display = "block"
}

function choice() {
    let choice = document.getElementById("choice")
    let shadow = document.getElementById("shadow-choice")
    shadow.style.display = "none"
    choice.style.display = "none"
}

function profile() {
    let profile = document.getElementById("profile")
    let shadow = document.getElementById("profile-div")
    shadow.style.display = "none"
    profile.style.display = "none"
}

function profilePlus() {
    let profile = document.getElementById("profile")
    let shadow = document.getElementById("profile-div")
    shadow.style.display = "block"
    profile.style.display = "block"
}

function settingsPlus() {
    let profile = document.getElementById("main-settings")
    let shadow = document.getElementById("settings-shadow")
    shadow.style.display = "block"
    profile.style.display = "block"
}

function settings() {
    let profile = document.getElementById("main-settings")
    let shadow = document.getElementById("settings-shadow")
    shadow.style.display = "none"
    profile.style.display = "none"
}