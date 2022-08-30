const img = [

    one = "./images/image-product-1.jpg",
    
    two = "./images/image-product-2.jpg",
    
    three = "./images/image-product-3.jpg",
    
    four = "./images/image-product-4.jpg"
]

const menu = document.querySelector(".hamburger-menu");

const head = document.getElementById("smheader");

const slides = document.querySelectorAll("#slides");

const navItem = document.querySelectorAll(".nav-item");

const lists = document.querySelector("#lists");

const minus = document.querySelectorAll("#minus");

const plus = document.querySelectorAll("#plus");

const carts = document.querySelectorAll("#cart");

const cartBtns = document.querySelectorAll("#addcart");

const cartDisplay = document.querySelectorAll(".cart-display");

const popovers = document.querySelectorAll("#cart-popover");

const alts = document.querySelectorAll(".alt");

let productImg = document.querySelector(".product-img");

let count = document.querySelector(".count");

let smcount = document.querySelector(".smcount");


// hamburger menu
menu.addEventListener("click", () => {
    head.classList.toggle("active");
    
    if (head.classList.contains("active")) {
        menu.innerHTML = `<img src="./images/icon-close.svg">`;
    } else {
        menu.innerHTML = `<img src="./images/icon-menu.svg">`;
    }
});


// slides
slides.forEach((slide) => {
    slide.addEventListener("click", (e) => {
        let current = e.currentTarget;

        slides.forEach((slide) => {
            if (current === slide) {
                slide.classList.add("img-active");
                slide.classList.add("img-thumbnail");

                const one = document.querySelector(".slidesone");
                const two = document.querySelector(".slidestwo");
                const three = document.querySelector(".slidesthree");
                const four = document.querySelector(".slidesfour");
                if (current === one) {
                    productImg.innerHTML = `<img src="${img[0]}" class="img-fluid" id="product-img">`;
                } else if (current === two) {
                    productImg.innerHTML = `<img src="${img[1]}" class="img-fluid" id="product-img">`;
                } else if (current === three) {
                    productImg.innerHTML = `<img src="${img[2]}" class="img-fluid" id="product-img">`;
                } else {
                    productImg.innerHTML = `<img src="${img[3]}" class="img-fluid" id="product-img">`;
                }
            } else {
                slide.classList.remove("img-active");
                slide.classList.remove("img-thumbnail");
            }
        });  
        
    });
});


// nav items
navItem.forEach((item) => {
    item.addEventListener("click", (e) => {
        let currentItem = e.currentTarget;

        navItem.forEach((item) => {
            if (currentItem === item) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
});


// Increment and decrement buttons
let number = 0;

count.textContent = number;
smcount.textContent = number;

minus.forEach((min) => {
    min.addEventListener("click", () => {
        if (number > 0) {
            number--;
        }
        count.textContent = number;
        smcount.textContent = number;

        calculations();
        
        if (header.classList.contains("pop") || head.classList.contains("pop")) {
            header.classList.remove("pop");
            head.classList.remove("pop");
        }
    });
});

plus.forEach((pls) => {
    pls.addEventListener("click", () => {
        number++;
        count.textContent = number;
        smcount.textContent = number;

        calculations();

        if (header.classList.contains("pop") || head.classList.contains("pop")) {
            header.classList.remove("pop");
            head.classList.remove("pop");
        }
    });
});


// Cart 
carts.forEach((cart) => {
    cart.addEventListener("click", () => {
        const header = document.querySelector("#header");
        header.classList.toggle("pop");
        head.classList.toggle("pop");

        if (number === 0) {
            popovers.forEach((popover) => {
                popover.style.visibility = "visible";
            });
            alts.forEach((alt)=> {
                alt.style.visibility = "hidden";
            }); 
        } 
        else {
            popovers.forEach((popover) => {
                popover.style.visibility = "hidden";
            });
            alts.forEach((alt)=> {
                alt.style.visibility = "visible";
            }); 
        } 
    });
});


// cart button
cartBtns.forEach((cartBtn) => {
    cartBtn.addEventListener("click", ()=> {

        cartDisplay.forEach((crtdisplay)=> {
            crtdisplay.style.visibility = "visible";
            crtdisplay.innerHTML = `${number}`;
            
            if (number === 0) {
                crtdisplay.style.visibility = "hidden";

                popovers.forEach((popover) => {
                    popover.style.visibility = "visible";
                });
                alts.forEach((alt)=> {
                    alt.style.visibility = "hidden";
                });   
            } else {
                popovers.forEach((popover) => {
                    popover.style.visibility = "hidden";
                });
                alts.forEach((alt)=> {
                    alt.style.visibility = "visible";
                });  
            }
        });

        if (!header.classList.contains("pop") || !head.classList.contains("pop")) {
            header.classList.add("pop");
            head.classList.add("pop");
        }
    });
});


// calculations
function calculations () {
    const vary = document.querySelectorAll(".vary");

    const result = document.querySelectorAll(".result");

    vary.forEach((vry) => {
        vry.innerHTML = `${number}`;
    });

    result.forEach((rs) => {
        rs.innerHTML = `$${number * 125}.00`;
    });    
}


// delete button 
const deleteBtn = document.querySelectorAll("#delete");

deleteBtn.forEach((dlb)=> {
    dlb.addEventListener("click", ()=> {
        number = 0;
    
        count.textContent = number;
        smcount.textContent = number;
    
        cartDisplay.forEach((crtdisplay)=> {
            crtdisplay.style.visibility = "hidden";
        });
    
        popovers.forEach((popover) => {
            popover.style.visibility = "visible";
        });
        alts.forEach((alt)=> {
            alt.style.visibility = "hidden";
        });  
    });
    
});





