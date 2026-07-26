const gallery = document.querySelector(".service_gallery");

const data = 



function scrollleft(){
    gallery.scrollBy({
        left: -100,
        behavior: "smooth"
    });
}

function scrollRight(){
    gallery.scrollBy({
        left: 350,
        behavior: "smooth"
    });
}



