const images = document.querySelectorAll('.anim')

const options = { 
    threshold: 1,
    rootMargin: "1000px 1000px 1000px 1000px"
};

    
observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
        if(entry.target.dataset.delay == "0s"){
            entry.target.style.animation = `anim1 1s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else if(entry.target.dataset.delay == "1.5s"){
            entry.target.style.animation = `anim2 1s ${entry.target.dataset.delay} forwards ease-out`;
                        
        }
    }
    else{} }, options)
})

images.forEach(image=> {
    observer.observe(image);
})