

function navigationButton(){
    $('.button-wrapper').click(function(){
        $(".nav-list-items-wrapper").slideToggle();
    });
}

function hideMenu(){
    $(".about-link").click(function(){
        $(".navigation-list-outer-wrapper").hide();
    })
}

function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let section = document.getElementsByClassName("hero-bg-image");
        let mask = document.getElementsByClassName("hero-mask");
        let wsection = document.getElementsByClassName("working-bg-image");
        let wmask = document.getElementsByClassName("working-mask");
        wsection[0].style.height = "90vh";
        wmask[0].style.height = "90vh";
        mask[0].style.height = "100vh";
        section[0].style.height ="100vh";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}

navigationButton();
styling();
//cardButtons();