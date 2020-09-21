
var open_menu = true;
function openMenuMobile(){
    if(open_menu == true){
        document.querySelectorAll('.first-screen__menu')[0].style.transform = 'translateY(0vh)';
        document.querySelectorAll('.mob_menu')[0].style.background = '#79797900';
        document.querySelectorAll('.mob_menu')[0].innerHTML = '<i class="fas fa-times"></i>';
        open_menu = false;
    }else{
        document.querySelectorAll('.first-screen__menu')[0].style.transform = 'translateY(-100vh)';
        document.querySelectorAll('.mob_menu')[0].style.background = '#79797980';
        document.querySelectorAll('.mob_menu')[0].innerHTML = '<i class="fas fa-bars"></i>';
        open_menu = true;
        
    }
}