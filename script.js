let controle = 0
let controletela = 0

function menuShow(){

    if (controle==0){
        document.querySelector('.mobile-bar').style.left = "0"
        controle = 1
    }

    else{
        document.querySelector('.mobile-bar').style.left = "-100%"
        controle = 0
    }
}

