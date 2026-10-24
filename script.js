/* =====================================================
   PRELOADER
===================================================== */
const preloader = document.getElementById("preloader");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        preloader?.classList.add("hide");
    }, 150);
});


/* =====================================================
   YEAR
===================================================== */


const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


navLinks
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
    title: "Telescopic Conveyor",
    category: "LOADING & UNLOADING",
    image: "assets/telescopic-conveyor.jpeg",
    description:
        "Extendable conveyor systems designed to speed up loading and unloading operations in warehouses and logistics facilities.",
    specs: [
        ["Extendable", "Design"],
        ["Faster", "Loading"],
        ["Flexible", "Operation"]
    ]
},

{
    title: "Roller Conveyor",
    category: "ROLLER CONVEYOR",
    image: "assets/roller-conveyor.jpg",
    description:
        "Durable roller conveyor systems designed for smooth, reliable movement of boxes, packages and industrial materials.",
    specs: [
        ["Steel", "Rollers"],
        ["Smooth", "Movement"],
        ["Heavy Duty", "Design"]
    ]
},

{
    title: "Belt Conveyor Systems",
    category: "MATERIAL FLOW",
    image: "assets/product-01.jpg",
    description:
        "Reliable conveyor systems designed for smooth and efficient material movement.",
    specs: [
        ["Variable", "Drive"],
        ["Heavy", "Load"],
        ["PLC", "Control"]
    ]
},

    {
        title: "Inclined Conveyor Systems",
        category: "VERTICAL FLOW",
        image: "assets/product-03.jpg",
        description:
            "Inclined conveyor solutions designed to move products efficiently between different levels.",
        specs: [
            ["Inclined", "Design"],
            ["High", "Efficiency"],
            ["Custom", "Layout"]
        ]
    },

    {
        title: "Heavy Duty Conveyors",
        category: "HEAVY INDUSTRIAL",
        image: "assets/product-04.jpg",
        description:
            "Heavy-duty conveyor systems engineered for demanding industrial applications and continuous operation.",
        specs: [
            ["Heavy Duty", "Frame"],
            ["Continuous", "Operation"],
            ["Industrial", "Load"]
        ]
    },

    {
        title: "Conveyor Installation",
        category: "SYSTEM INSTALLATION",
        image: "assets/product-05.jpg",
        description:
            "Complete conveyor installation solutions designed around your facility and production workflow.",
        specs: [
            ["Complete", "Installation"],
            ["Custom", "Layout"],
            ["Professional", "Setup"]
        ]
    },
    {
    title: "Flat Belt Conveyor",
    category: "FLAT BELT CONVEYOR",
    image: "assets/flat-belt-conveyor.png",
    description:
        "Versatile flat belt conveyor systems for efficient transportation of products across manufacturing, packaging and distribution operations.",
    specs: [
        ["Continuous", "Movement"],
        ["Versatile", "Handling"],
        ["Easy", "Maintenance"]
    ]
},

{
    title: "Working Table Conveyor",
    category: "ASSEMBLY & WORKSTATIONS",
    image: "assets/working-table-conveyor.png",
    description:
        "Conveyor workstations designed to support assembly, inspection, sorting and packaging processes with an efficient working layout.",
    specs: [
        ["Ergonomic", "Workstation"],
        ["Customizable", "Layout"],
        ["Assembly", "Support"]
    ]
},

    {
        title: "Vertical Conveyor Elevators",
        category: "VERTICAL AUTOMATION",
        image: "assets/product-06.jpg",
        description:
            "Vertical conveyor elevator systems for efficient movement of products between different levels.",
        specs: [
            ["Vertical", "Lift"],
            ["Compact", "Design"],
            ["Safe", "Operation"]
        ]
    },

    {
        title: "Material Handling Lifts",
        category: "MATERIAL HANDLING",
        image: "assets/product-07.jpg",
        description:
            "Material handling lift systems designed to improve vertical transportation and reduce manual handling.",
        specs: [
            ["Heavy", "Capacity"],
            ["Guided", "Motion"],
            ["Safety", "System"]
        ]
    },

   
{
    title: "Spiral Conveyor Systems",
    category: "SPIRAL CONVEYOR",
    image: "assets/product-08-finale.jpeg",
    description:
        "Space-efficient spiral conveyor systems designed to transport products vertically between different levels while maintaining a smooth and continuous flow.",
    specs: [
        ["Space-Saving", "Design"],
        ["Vertical", "Transport"],
        ["Continuous", "Flow"]
    ]
},

{
    title: "Plastic Modular Belt Conveyor Systems",
    category: "MODULAR BELT CONVEYOR",
    image: "assets/product-09-finale.jpeg",
    description:
        "Durable plastic modular belt conveyor systems designed for reliable product handling, easy maintenance, and efficient movement across industrial production lines.",
    specs: [
        ["Modular", "Belt"],
        ["Easy", "Maintenance"],
        ["Durable", "Design"]
    ]
},


    {
        title: "Complete Conveyor Automation",
        category: "SYSTEM INTEGRATION",
        image: "assets/product-10..png",
        description:
            "Complete integrated conveyor and automation systems designed to connect multiple stages of your operation.",
        specs: [
            ["Complete", "Integration"],
            ["High", "Throughput"],
            ["Scalable", "Design"]
        ]
    }

];


/* =====================================================
   CREATE PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const card =
        document.createElement("article");

    card.className =
        "product-card";

    card.innerHTML = `

        <div class="product-card-image">

            <img
                src="${product.image}"
                alt="${product.title}"
                loading="lazy"
            >

        </div>


        <div class="product-card-content">

            <span>
                ${product.category}
            </span>

            <h3>
                ${product.title}
            </h3>

            <p>
                ${product.description}
            </p>

            <button>
                View specifications ↗
            </button>

        </div>

    `;


   card.querySelector("button").addEventListener("click", (event) => {
    console.log("SPECIFICATIONS BUTTON CLICKED");
    event.preventDefault();
    event.stopPropagation();

    try {
        openProductModal(product);
    } catch (error) {
        console.error("Unable to open product modal:", error);
    }
});


    return card;

}


/* =====================================================
   CREATE TWO ROWS
===================================================== */

const rowOne =
    document.getElementById("rowOne");

const rowTwo =
    document.getElementById("rowTwo");


/*
   FIRST ROW
   First 5 products
*/
const firstFive = products.slice(0, 6);
const secondFive = products.slice(6, 13);


/* =====================================================
   DUPLICATE EACH ROW
   REQUIRED FOR INFINITE LOOP
===================================================== */

function populateRow(row, productsList) {

    const allProducts =
        [
            ...productsList,
            ...productsList
        ];


    allProducts.forEach(product => {

        row.appendChild(
            createProductCard(product)
        );

    });

}


populateRow(
    rowOne,
    firstFive
);


populateRow(
    rowTwo,
    secondFive
);

/* =====================================================
   MANUAL DRAG + SWIPE FOR PRODUCT CONVEYOR ROWS
   Preserves the existing automatic animations
===================================================== */

[rowOne, rowTwo].forEach((row) => {
    if (!row) return;

    let startX = 0;
    let startTime = 0;
    let animation = null;
    let isDragging = false;
    let hasMoved = false;
    let pointerId = null;

    const wrapper = row.closest(".product-row-wrapper");

    if (!wrapper) return;

    row.addEventListener("pointerdown", (event) => {
        // Only use the primary mouse button; allow touch and pen.
        if (event.pointerType === "mouse" && event.button !== 0) {
            return;
        }

        animation = row.getAnimations().find(
            (item) => item.effect && item.playState !== "finished"
        );

        if (!animation) return;

        startX = event.clientX;
        startTime = Number(animation.currentTime) || 0;
        isDragging = true;
        hasMoved = false;
        pointerId = event.pointerId;

        animation.pause();
        row.classList.add("is-dragging");

        row.setPointerCapture(pointerId);
    });

    row.addEventListener("pointermove", (event) => {
        if (!isDragging || event.pointerId !== pointerId) return;

        const deltaX = event.clientX - startX;

        if (Math.abs(deltaX) > 5) {
            hasMoved = true;
        }

        if (!hasMoved || !animation) return;

        const duration = Number(
            animation.effect.getTiming().duration
        );

        // Match the distance used by the existing 50% conveyor loop.
        const distance = row.scrollWidth / 2 + 10;

        if (!Number.isFinite(duration) || duration <= 0 || distance <= 0) {
            return;
        }

        // Row 1 moves right as time advances; row 2 moves left.
        const direction = row.classList.contains("row-one") ? 1 : -1;

        let nextTime =
            startTime + (deltaX / distance) * duration * direction;

        // Keep animation time inside its loop.
        nextTime = ((nextTime % duration) + duration) % duration;

        animation.currentTime = nextTime;
    });

    function finishDrag(event) {
        if (!isDragging) return;
        if (event && event.pointerId !== pointerId) return;

        isDragging = false;
        row.classList.remove("is-dragging");

        if (animation) {
            animation.play();
        }

        // Suppress the card click only if the user actually dragged.
        if (hasMoved) {
            row.dataset.dragged = "true";
        }

        animation = null;
        pointerId = null;
    }

    row.addEventListener("pointerup", finishDrag);
    row.addEventListener("pointercancel", finishDrag);
    row.addEventListener("lostpointercapture", finishDrag);

    row.addEventListener("click", (event) => {
        if (row.dataset.dragged === "true") {
            event.preventDefault();
            event.stopImmediatePropagation();
            delete row.dataset.dragged;
        }
    }, true);
});


/* =====================================================
   MODAL
===================================================== */

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalSpecs =
    document.getElementById("modalSpecs");

const modalQuote =
    document.getElementById("modalQuote");


/* =====================================================
   SELECTED PRODUCT
===================================================== */

let selectedProduct = null;


/* =====================================================
   OPEN MODAL
===================================================== */

function openProductModal(product) {

    selectedProduct = product;

    modalImage.src =
        product.image;

    modalImage.alt =
        product.title;

    modalTitle.textContent =
        product.title;

    modalCategory.textContent =
        product.category;

    modalDescription.textContent =
        product.description;


    modalSpecs.innerHTML = "";


    product.specs.forEach(spec => {

        const specBox =
            document.createElement("div");

        specBox.className =
            "modal-spec";


        specBox.innerHTML = `

            <strong>
                ${spec[0]}
            </strong>

            <span>
                ${spec[1]}
            </span>

        `;


        modalSpecs.appendChild(specBox);

    });


    /*
       Native dialog automatically centers
       the modal on the screen.
    */

    productModal.showModal();

}


/* =====================================================
   CLOSE MODAL
===================================================== */

modalClose.addEventListener(
    "click",
    () => {

        productModal.close();

    }
);


/*
   Close when clicking outside
*/

productModal.addEventListener(
    "click",
    event => {

        const rect =
            productModal.getBoundingClientRect();


        const inside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;


        if (!inside) {

            productModal.close();

        }

    }
);


/* =====================================================
   REQUEST THIS SYSTEM
   AUTO-FILL CONTACT FORM
===================================================== */

modalQuote.addEventListener("click", event => {

    event.preventDefault();

    if (!selectedProduct) return;

    const message =
        document.getElementById("message");


    if (message) {

        message.value =
`PRODUCT ENQUIRY

Product: ${selectedProduct.title}
Category: ${selectedProduct.category}

${selectedProduct.description}

Specifications:
${selectedProduct.specs
    .map(spec => `${spec[0]}: ${spec[1]}`)
    .join("\n")}

I would like to know more about this system, including pricing, customization, installation and service.`;

    }


    productModal.close();


    setTimeout(() => {

        const contact =
            document.getElementById("contact");


        if (contact) {

            contact.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }


        if (message) {

            message.focus();

        }

    }, 150);

});


/* =====================================================
   CUSTOMER REVIEW POPUP
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const reviewModal =
    document.getElementById("reviewModal");

const openReview =
    document.getElementById("openReview");

const closeReview =
    document.getElementById("closeReview");

const closeReviewSuccess =
    document.getElementById("closeReviewSuccess");


/* =====================================================
   REVIEW VARIABLES
===================================================== */

let reviewExperienceType = "";

let reviewExperienceRating = "";

let reviewRatings = {

    product: 0,

    service: 0,

    overall: 0

};


/* =====================================================
   OPEN REVIEW
===================================================== */

if (openReview && reviewModal) {

    openReview.addEventListener("click", () => {

        reviewModal.showModal();

        document.body.classList.add(
            "review-open"
        );

    });

}


/* =====================================================
   CLOSE REVIEW
===================================================== */

function closeReviewModal() {

    if (reviewModal) {

        reviewModal.close();

    }

    document.body.classList.remove(
        "review-open"
    );

}


/* CLOSE BUTTON */

if (closeReview) {

    closeReview.addEventListener(
        "click",
        closeReviewModal
    );

}


/* SUCCESS CLOSE */

if (closeReviewSuccess) {

    closeReviewSuccess.addEventListener(
        "click",
        closeReviewModal
    );

}


/* =====================================================
   STEP FUNCTION
===================================================== */

function showReviewStep(number) {

    const steps = [

        document.getElementById(
            "reviewStep1"
        ),

        document.getElementById(
            "reviewStep2"
        ),

        document.getElementById(
            "reviewStep3"
        )

    ];


    const progress = [

        document.getElementById(
            "reviewProgress1"
        ),

        document.getElementById(
            "reviewProgress2"
        ),

        document.getElementById(
            "reviewProgress3"
        )

    ];


    steps.forEach(
        (step, index) => {

            if (step) {

                step.classList.toggle(
                    "active",
                    index === number
                );

            }

        }
    );


    progress.forEach(
        (item, index) => {

            if (item) {

                item.classList.toggle(
                    "active",
                    index <= number
                );

            }

        }
    );

}


/* =====================================================
   EXPERIENCE OPTIONS
===================================================== */

const reviewExperienceOptions =
    document.querySelectorAll(
        ".experience-option"
    );


reviewExperienceOptions.forEach(
    option => {

        option.addEventListener(
            "click",
            () => {

                reviewExperienceOptions.forEach(
                    item => {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                option.classList.add(
                    "selected"
                );


                reviewExperienceType =
                    option.dataset.value;

            }
        );

    }
);


/* =====================================================
   GOOD / VERY GOOD / EXCELLENT
===================================================== */

const reviewExperienceButtons =
    document.querySelectorAll(
        ".experience-rating button"
    );


reviewExperienceButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                reviewExperienceButtons.forEach(
                    item => {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                button.classList.add(
                    "selected"
                );


                reviewExperienceRating =
                    button.dataset.rating;

            }
        );

    }
);


/* =====================================================
   STEP 1 → STEP 2
===================================================== */

const reviewNext1 =
    document.getElementById(
        "reviewNext1"
    );


if (reviewNext1) {

    reviewNext1.addEventListener(
        "click",
        () => {

            if (!reviewExperienceType) {

                alert(
                    "Please select what you recently purchased or used."
                );

                return;

            }


            if (!reviewExperienceRating) {

                alert(
                    "Please select how your overall experience was."
                );

                return;

            }


            const message =
                document.getElementById(
                    "reviewDynamicMessage"
                );


            const finalMessage =
                document.getElementById(
                    "reviewFinalMessage"
                );


            let text = "";


            if (
                reviewExperienceRating ===
                "Excellent"
            ) {

                text =
                    "We're glad you had an excellent experience. Tell us what you liked most about working with PISHON.";

            }

            else if (
                reviewExperienceRating ===
                "Very Good"
            ) {

                text =
                    "Thank you for your positive feedback. Tell us about your experience with the PISHON team.";

            }

            else {

                text =
                    "Thank you for your feedback. Tell us how we can make your next PISHON experience even better.";

            }


            if (message) {

                message.textContent =
                    text;

            }


            if (finalMessage) {

                finalMessage.textContent =
                    text;

            }


            showReviewStep(1);

        }

    );

}


/* =====================================================
   STAR RATINGS
===================================================== */

const reviewStarGroups =
    document.querySelectorAll(
        ".review-stars"
    );


reviewStarGroups.forEach(
    group => {

        const stars =
            group.querySelectorAll(
                "button"
            );


        stars.forEach(
            star => {

                star.addEventListener(
                    "click",
                    () => {

                        const value =
                            Number(
                                star.dataset.value
                            );


                        const question =
                            group.dataset.question;


                        reviewRatings[
                            question
                        ] = value;


                        stars.forEach(
                            item => {

                                const itemValue =
                                    Number(
                                        item.dataset.value
                                    );


                                item.classList.toggle(
                                    "selected",
                                    itemValue <= value
                                );

                            }
                        );

                    }
                );

            }
        );

    }
);


/* =====================================================
   STEP 2 → STEP 3
===================================================== */

const reviewNext2 =
    document.getElementById(
        "reviewNext2"
    );


if (reviewNext2) {

    reviewNext2.addEventListener(
        "click",
        () => {

            if (
                reviewRatings.product === 0
            ) {

                alert(
                    "Please rate the Product / System."
                );

                return;

            }


            if (
                reviewRatings.service === 0
            ) {

                alert(
                    "Please rate our Service."
                );

                return;

            }


            if (
                reviewRatings.overall === 0
            ) {

                alert(
                    "Please rate your Overall Experience."
                );

                return;

            }


            showReviewStep(2);

        }

    );

}


/* =====================================================
   BACK STEP 2
===================================================== */

const reviewBack2 =
    document.getElementById(
        "reviewBack2"
    );


if (reviewBack2) {

    reviewBack2.addEventListener(
        "click",
        () => {

            showReviewStep(0);

        }
    );

}


/* =====================================================
   BACK STEP 3
===================================================== */

const reviewBack3 =
    document.getElementById(
        "reviewBack3"
    );


if (reviewBack3) {

    reviewBack3.addEventListener(
        "click",
        () => {

            showReviewStep(1);

        }
    );

}


/* =====================================================
   SUBMIT REVIEW
===================================================== */

const submitCustomerReview =
    document.getElementById(
        "submitCustomerReview"
    );


if (submitCustomerReview) {

    submitCustomerReview.addEventListener(
        "click",
        async () => {

            const name =
                document.getElementById(
                    "reviewCustomerName"
                ).value.trim();


            const company =
                document.getElementById(
                    "reviewCompanyName"
                ).value.trim();


            const product =
                document.getElementById(
                    "reviewProductName"
                ).value.trim();


            const review =
                document.getElementById(
                    "reviewCustomerMessage"
                ).value.trim();


            // Validation

            if (!name) {

                alert(
                    "Please enter your name."
                );

                return;

            }


            if (!company) {

                alert(
                    "Please enter your company name."
                );

                return;

            }


            if (!product) {

                alert(
                    "Please enter the product or service."
                );

                return;

            }


            if (!review) {

                alert(
                    "Please write your review."
                );

                return;

            }


            // Prevent multiple clicks

            submitCustomerReview.disabled =
                true;

            submitCustomerReview.innerHTML =
                "Sending...";


            // Review information

            const reviewData = {

                access_key:
                    "d632d4b2-5719-40a6-bf9f-4937ea54e9a3",

                subject:
                    "New Customer Review - ELROY Conveyor Systems",

                from_name:
                    "ELROY Website",

                name:
                    name,

                company:
                    company,

                product:
                    product,

                experience_type:
                    reviewExperienceType,

                overall_experience:
                    reviewExperienceRating,

                product_rating:
                    reviewRatings.product +
                    " / 5",

                service_rating:
                    reviewRatings.service +
                    " / 5",

                overall_rating:
                    reviewRatings.overall +
                    " / 5",

                review:
                    review

            };


            try {

                const response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",

                                "Accept":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    reviewData
                                )
                        }
                    );


                const result =
                    await response.json();


                if (result.success) {

                    // Show success screen

                    document
                        .querySelectorAll(
                            ".review-step"
                        )
                        .forEach(
                            step => {

                                step.classList.remove(
                                    "active"
                                );

                            }
                        );


                    const success =
                        document.getElementById(
                            "reviewSuccess"
                        );


                    if (success) {

                        success.classList.add(
                            "active"
                        );

                    }


                    document
                        .querySelectorAll(
                            ".review-progress-item"
                        )
                        .forEach(
                            item => {

                                item.classList.add(
                                    "active"
                                );

                            }
                        );

                }

                else {

                    alert(
                        result.message ||
                        "Something went wrong. Please try again."
                    );

                }


            }

            catch (error) {

                console.error(
                    "Review submission error:",
                    error
                );


                alert(
                    "Unable to send your review right now. Please try again."
                );

            }


            finally {

                submitCustomerReview.disabled =
                    false;


                submitCustomerReview.innerHTML =
                    'Submit Review <span>→</span>';

            }

        }
    );

}


/* =====================================================
   CLOSE WITH ESC
   Native <dialog> also supports ESC.
===================================================== */

if (reviewModal) {

    reviewModal.addEventListener(
        "close",
        () => {

            document.body.classList.remove(
                "review-open"
            );

        }
    );

}


/* =====================================================
   CONTACT / PRODUCT ENQUIRY FORM
   CLEAR FORM AFTER SUCCESSFUL SUBMISSION
===================================================== */

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector('button[type="submit"]');

        const originalText =
            submitButton.innerHTML;

        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        try {

            const formData =
                new FormData(contactForm);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            const result =
                await response.json();

            if (result.success) {

                // Clear ALL enquiry fields
                contactForm.reset();

                // Show success message
               const successPopup = document.getElementById("successPopup");

if (successPopup) {
    successPopup.classList.add("show");
}

            } else {

                alert(
                    result.message ||
                    "Something went wrong. Please try again."
                );

            }

        } catch (error) {

            console.error(
                "Enquiry submission error:",
                error
            );

            alert(
                "Unable to send your enquiry right now. Please try again."
            );

        } finally {

            submitButton.disabled = false;
            submitButton.innerHTML = originalText;

        }

    });

}
const successPopup = document.getElementById("successPopup");
const successClose = document.getElementById("successClose");
const successOk = document.getElementById("successOk");

function closeSuccessPopup() {
    successPopup?.classList.remove("show");
}

successClose?.addEventListener("click", closeSuccessPopup);
successOk?.addEventListener("click", closeSuccessPopup);

successPopup?.addEventListener("click", (event) => {
    if (event.target === successPopup) {
        closeSuccessPopup();
    }
});


document.addEventListener("DOMContentLoaded", () => {

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const animatedElements = document.querySelectorAll(
        ".pishon-reveal, " +
        ".pishon-reveal-left, " +
        ".pishon-reveal-right"
    );

    /* ----------------------------------------
       Reduced motion
    ---------------------------------------- */

    if (reduceMotion) {

        animatedElements.forEach(element => {
            element.classList.add("is-visible");
        });

        return;
    }


    /* ----------------------------------------
       Observer
    ---------------------------------------- */

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -70px 0px"
        }
    );


    animatedElements.forEach(element => {
        revealObserver.observe(element);
    });

});
/* ===== ELROY TYPING EFFECT ===== */

document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("elroyTyping");

    if (!title) return;

    const text = "ELROY";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        title.textContent = text;
        title.style.borderRight = "none";
        return;
    }

    title.textContent = "";

    let index = 0;

    const typingTimer = setInterval(() => {
        title.textContent += text.charAt(index);
        index++;

        if (index >= text.length) {
            clearInterval(typingTimer);
        }
    }, 180);
});
/* ===== SECTION SCROLL REVEAL ===== */

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(
        "main > section:not(.hero)"
    );

    if (!("IntersectionObserver" in window)) {
        sections.forEach(section => {
            section.classList.add("scroll-reveal", "is-visible");
        });
        return;
    }

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    sections.forEach(section => {
        section.classList.add("scroll-reveal");

        if (reducedMotion) {
            section.classList.add("is-visible");
        }
    });

    if (reducedMotion) return;

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    sectionObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -35px 0px"
        }
    );

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
/* ===== REUSABLE ELROY NUMBER COUNTERS ===== */

document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(
        ".hero-stats strong, [data-counter]"
    );

    stats.forEach(stat => {
        if (stat.dataset.counterInitialized) return;

        const originalText = stat.textContent.trim();
        const match = originalText.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);

        if (!match) return;

        const prefix = match[1];
        const target = Number(match[2]);
        const suffix = match[3];

        stat.dataset.counterInitialized = "true";

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) return;

        const duration = 1400;
        const startTime = performance.now();

        stat.textContent = `${prefix}0${suffix}`;

        function updateCounter(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);

            stat.textContent = `${prefix}${value}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = originalText;
                stat.classList.add("counter-done");
            }
        }

        requestAnimationFrame(updateCounter);
    });
});

/* =========================================
   STORAGE RACKS SCROLL ANIMATION
========================================= */

(() => {
  const section = document.querySelector("#storage-racks");

  if (!section) return;

  const revealItems = section.querySelectorAll(".rack-reveal");
  const rackImage = section.querySelector(".storage-rack-image");

  const showAll = () => {
    revealItems.forEach((item) => {
      item.classList.add("rack-visible");
    });

    if (rackImage) {
      rackImage.classList.add("visible");
    }
  };

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    showAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("rack-visible");

        if (entry.target.classList.contains("storage-racks-visual")) {
          if (rackImage) {
            rackImage.classList.add("visible");
          }
        }

        currentObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
})();

/* AUTO-FILL STORAGE RACK ENQUIRY */

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;

    // Find the existing enquiry form
    const form = document.querySelector(
      "#contact form, form"
    );

    if (!form) return;

    // Find the product/request selector, if present
    const selector = form.querySelector(
      'select[name="product"], select[name="service"], #product, #service'
    );

    if (selector) {
      const matchingOption = Array.from(selector.options).find(
        (option) =>
          option.text.trim().toLowerCase() ===
          productName.toLowerCase()
      );

      if (matchingOption) {
        selector.value = matchingOption.value;
        selector.dispatchEvent(
          new Event("change", { bubbles: true })
        );
      }
    }

    // Find the description field
    const description = form.querySelector(
      'textarea[name="description"], textarea[name="message"], #description, #message'
    );

    if (description) {
      description.value =
        `Requirement: ${productName}\n\n` +
        "Please share your storage rack requirements, " +
        "warehouse dimensions, approximate load capacity, " +
        "and quantity required.";

      description.dispatchEvent(
        new Event("input", { bubbles: true })
      );

      description.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    }
  });
});
