//  ПЕРВЫЙ ВАРИАНТ 

// const images = document.querySelectorAll(".feed img");

// const options = {
//     rootMargin: "1000px",
// }
// const onEntry = (entries, observer) => {
//     entries.forEach(entry => { 
//         if (entry.isIntersecting) {
//             console.log(entry.target)
//             console.log(entry.target.dataset.lazy)
//             const img = entry.target;
//             const src = img.dataset.lazy;
//             img.src = src;
//             img.classList.add("appear")

//             observer.unobserve(img)
//     }})
// }

// const io = new IntersectionObserver(onEntry, options
// )

// images.forEach(image => io.observe(image))

//  ВТОРОЙ ВАРИАНТ 





const images = document.querySelectorAll(".feed img");

// const options = {
//     rootMargin: "1000px",
// }


const lazyLoad = image => {
    const options = {
        rootMargin: "1000px",
    };
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target)
                console.log(entry.target.dataset.lazy)
                const img = entry.target;
                const src = img.dataset.lazy;
                img.src = src;
                img.classList.add("appear")

                // observer.unobserve(img)
                observer.disconnect();
            }
        });
    }, options);

    io.observe(image);
}
images.forEach(img=> lazyLoad(img))