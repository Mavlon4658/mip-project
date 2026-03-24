const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
    accordions.forEach((item) => {
        const accBtn = item.querySelector('.accordion-btn');
        const accBody = item.querySelector('.accordion-body');
    
        accBtn.addEventListener('click', () => {
            item.classList.toggle('active');
            accBtn.classList.toggle('active');
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        });
    });
}

const leaderSwp = document.querySelectorAll('.leader-swp');
if (leaderSwp.length) {
    leaderSwp.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 12,
            freeMode: true,
            breakpoints: {
                1100: {
                    spaceBetween: 40,
                    freeMode: false,
                },
                700: {
                    spaceBetween: 20,
                    freeMode: false,
                }
            },
            scrollbar: {
                el: el.querySelector('.swp-pagination'),
                draggable: true,
            }
        })
    })
}

const leaderFootSwp = new Swiper('.leader-foot .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.leader-foot .swp-pagination',
        clickable: true,
    }
})

const diplomaSwp = new Swiper('.diploma-swp .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
    breakpoints: {
        1100: {
            spaceBetween: 26,
        },
        700: {
            spaceBetween: 20,
        }
    },
    scrollbar: {
        el: ".diploma-swp .swp-pagination",
        draggable: true,
    },
})

const programTabBtn = document.querySelectorAll('.program-career__tab .tab-head li');
const programTabBody = document.querySelectorAll('.program-career__tab .tab-body');

if (programTabBtn.length) {
    programTabBtn.forEach((btn, btnID) => {
        btn.onclick = () => {
            programTabBody.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
            programTabBtn.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const programAccordion = document.querySelectorAll('.program-career__accordion');

if (programAccordion.length) {
    programAccordion.forEach((item) => {
        const accBtn = item.querySelector('.program-career__accordion-btn');
        const accBody = item.querySelector('.program-career__accordion-body');
    
        accBtn.addEventListener('click', () => {
            accBtn.classList.toggle('active');
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        });
    });
}

const educationSwp = document.querySelectorAll('.tab-body');

if (educationSwp.length) {
    educationSwp.forEach(el => {
        const swp = new Swiper(el.querySelector('.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 12,
            breakpoints: {
                700: {
                    spaceBetween: 0,
                },
            },
            scrollbar: {
                el: el.querySelector('.swp-pagination'),
                draggable: true,
            },
        })
    })
}

const selects = document.querySelectorAll('.main-select');

if (selects.length) {
    selects.forEach((item) => {
        const btn = item.querySelector('.main-select__btn');
        const content = item.querySelector('.main-select__list');
    
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
}

const educationEL = document.querySelectorAll('.education')
if (educationEL.length) {
    educationEL.forEach(item => {
        const educationBtn = item.querySelectorAll('.tab-head li');
        const educationBody = item.querySelectorAll('.tab-body');
        const educationSelect = item.querySelector('.main-select');
        
        if (educationBtn.length) {
            educationBtn.forEach((btn, btnID) => {
                btn.onclick = () => {
                    educationBody.forEach((el, elID) => {
                        if (elID == btnID) {
                            el.classList.add('active');
                        } else {
                            el.classList.remove('active');
                        }
                    })
                    educationBtn.forEach((el, elID) => {
                        if (elID == btnID) {
                            el.classList.add('active');
                        } else {
                            el.classList.remove('active');
                        }
                    })
                }
            })
            educationSelect.querySelectorAll('.main-select__list li').forEach((btn, btnID) => {
                btn.onclick = () => {
                    educationSelect.querySelector('.main-select__btn span').textContent = btn.textContent;
                    educationSelect.querySelector('.main-select__btn').click();
                    educationBody.forEach((el, elID) => {
                        if (elID == btnID) {
                            el.classList.add('active');
                        } else {
                            el.classList.remove('active');
                        }
                    })
                }
            })
        }
    })
}

const requirementTabBtn = document.querySelectorAll('.requirement-content__left .tab-head li');
const requirementTabBody = document.querySelectorAll('.requirement-content__left .tab-body');

if (requirementTabBtn.length) {
    requirementTabBtn.forEach((btn, btnID) => {
        btn.onclick = () => {
            requirementTabBody.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
            requirementTabBtn.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const formTreaningTabBtn = document.querySelectorAll('.form-treaning__content-left .tab-head li');
const formTreaningTabBody = document.querySelectorAll('.form-treaning__content-left .tab-body');
const formTreaningSelect = document.querySelector('.form-treaning__content-left .main-select');

if (formTreaningTabBtn.length) {
    formTreaningTabBtn.forEach((btn, btnID) => {
        btn.onclick = () => {
            formTreaningTabBody.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active')
                }
            })
            formTreaningTabBtn.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active')
                }
            })
        }
    })
    formTreaningSelect.querySelectorAll('.main-select__list li').forEach((btn, btnID) => {
        btn.onclick = () => {
            formTreaningSelect.querySelector('.main-select__btn span').textContent = btn.textContent;
            formTreaningSelect.querySelector('.main-select__btn').click();
            formTreaningTabBody.forEach((el, elID) => {
                if (elID == btnID) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const aboutText = document.querySelector('.about .about_main_text');
if (aboutText) {
    let text = aboutText.textContent;
    if (text.length < 1400) {
        aboutText.classList.add('scrollbar-hidden');
    } else {
        aboutText.classList.remove('scrollbar-hidden');
    }
}






// ---------- New Script  ----------
const directionAccordion = document.querySelector('.direction-accordion');
const directionAccordionBtn = document.querySelector('.direction-accordion__btn');
const directionAccordionList = document.querySelectorAll('.direction-accordion__list li');

if (directionAccordion) {
    directionAccordionBtn.onclick = () => {
        directionAccordion.classList.toggle('active');
    }

    directionAccordionList.forEach(item => {
        item.onclick = () => {
            directionAccordion.classList.remove('active');
            directionAccordionBtn.querySelector('input').value = item.textContent;
            directionAccordionBtn.querySelector('span').textContent = item.textContent;
            directionAccordionList.forEach(el => {
                if (item == el) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const insideSwp = new Swiper('.inside .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.inside .swp-btn__next',
        prevEl: '.inside .swp-btn__prev',
    },
    pagination: {
        el: '.inside .swp-pagination',
        clickable: true,
    },
});

const directionCard = document.querySelectorAll('.direction-card');
if (directionCard.length) {
    directionCard.forEach(el => {
        let btn = el.querySelector('.direction-card__btn a.icon');
        if (btn) {
            btn.onclick = e => {
                e.preventDefault();
                el.classList.toggle('active');
            }
        }
    })
}

window.addEventListener('click', event => {
    if (directionAccordion && !directionAccordion.contains(event.target)) {
        directionAccordion.classList.remove('active');
    }
})


// -------------- Career js -------------- //

const skillsSwp = new Swiper('.skills .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    breakpoints: {
        1500: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    },
    navigation: {
        nextEl: '.skills .swp-btn__next',
        prevEl: '.skills .swp-btn__prev',
    },
});

const skillsFilterBtn = document.querySelector('.skills .filter-btn');
const skillsNavs = document.querySelector('.skills-navs');

if (skillsNavs) {
    skillsFilterBtn.onclick = () => {
        skillsNavs.classList.toggle('active');
    }
}

const archiveSwp = new Swiper('.archive .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        700: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        }
    },
    navigation: {
        nextEl: '.archive .swp-btn__next',
        prevEl: '.archive .swp-btn__prev',
    },
    scrollbar: {
        el: ".archive .swp-scrollbar",
        draggable: true,
    },
})

const jobTabBtn = document.querySelectorAll('.job .tab-head li');
const jobTabItem = document.querySelectorAll('.job .tab-item');
if (jobTabBtn.length) {
    jobTabBtn.forEach((btn, btnIdx) => {
        btn.onclick = () => {
            jobTabItem.forEach((el, elIdx) => {
                if (elIdx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
            jobTabBtn.forEach((el, elIdx) => {
                if (elIdx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

var materialInit = false;
var materialSwp;
function materialSwpCard() {
    if (window.innerWidth <= 700) {
        if (!materialInit) {
            materialInit = true;
            materialSwp = new Swiper(".material .swiper", {
                slidesPerView: "auto",
                spaceBetween: 15,
                navigation: {
                    nextEl: '.material .swp-btn__next',
                    prevEl: '.material .swp-btn__prev',
                },
                scrollbar: {
                    el: ".material .swp-scrollbar",
                    draggable: true,
                },
            });
        }
    } else if (materialInit) {
        materialSwp.destroy();
        materialInit = false;
    }
}
materialSwpCard();
window.addEventListener("resize", materialSwpCard);

const commetsSwp = new Swiper('.comments .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        1500: {
            spaceBetween: 30,
        },
        1100: {
            spaceBetween: 22,
        }
    },
    scrollbar: {
        el: ".comments .swp-scrollbar",
        draggable: true,
    },
})

const modals = ['.competence-modal', '.association-modal', '.vacancy-modal', '.internship-modal'];
if (modals.length) {
    modals.forEach(modalCls => {
        const modalEl = document.querySelector(modalCls);
        const closeBtn = document.querySelector(`${modalCls} .modal-close`);
        const modalBg = document.querySelector(`${modalCls} .modal-bg`);
        const openBtn = document.querySelectorAll(`${modalCls}__open`);
        openBtn.forEach(btn => {
            btn.onclick = e => {
                e.preventDefault();
                modalEl.classList.add('active');
            }
        })
        closeBtn.onclick = () => {
            modalEl.classList.remove('active')
        }
        modalBg.onclick = () => {
            modalEl.classList.remove('active')
        }
    })
}



// -------------- Dialogue js -------------- //

const dialogueHomeSwp = new Swiper('.dialogue-home .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    scrollbar: {
        el: ".dialogue-home .swp-scrollbar",
        draggable: true,
    },
})




// -------------- Projects js -------------- //

const projectsHome = new Swiper('.projects-home .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        1500: {
            spaceBetween: 30,
        },
        800: {
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.projects-home .swp-navigation .swp-next',
        prevEl: '.projects-home .swp-navigation .swp-prev',
    }
})

const projectsLeaderSwp = new Swiper('.projects-leader__swp .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        1100: {
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: '.leader .swp-navigation .swp-next',
        prevEl: '.leader .swp-navigation .swp-prev'
    }
})

const projectsFeedback = new Swiper('.projects-feedback__swp .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        800: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: '.projects-feedback__swp .swp-navigation .swp-next',
        prevEl: '.projects-feedback__swp .swp-navigation .swp-prev'
    }
})

const textModal = document.querySelector('.text-modal');
const textModalBg = document.querySelector('.text-modal__bg');
const textModalCloseBtn = document.querySelector('.text-modal__head button');

if (textModal) {
    textModalBg.onclick = () => {
        textModal.classList.remove('active');
        bodyVisible();
    }

    textModalCloseBtn.onclick = () => {
        textModal.classList.remove('active');
        bodyVisible();
    }
}

const projectsLeaderCards = document.querySelectorAll('.projects-leader .leader-card');

if (projectsLeaderCards.length) {
    projectsLeaderCards.forEach(card => {
        const btns = card.querySelectorAll('.btn-white');
        
        btns.forEach(btn => {
            btn.onclick = e => {
                e.preventDefault();
                const el = card.querySelector('.leader-card__right-list').cloneNode(true);
                bodyHidden();
                textModal.querySelector('.text-modal__content .demo-text').innerHTML = '';
                textModal.querySelector('.text-modal__content .demo-text').appendChild(el);
                textModal.classList.add('active');
            }
        })
    })
}

const feedbackCard = document.querySelectorAll('.feedback-card');

if (feedbackCard.length) {
    feedbackCard.forEach(card => {
        const btn = card.querySelector('.btn-white');
        
        if (btn) {
            btn.onclick = () => {
                const el = card.cloneNode(true);
                bodyHidden();
                textModal.querySelector('.text-modal__content .demo-text').innerHTML = '';
                textModal.querySelector('.text-modal__content .demo-text').appendChild(el);
                textModal.classList.add('active');
            }
        }
    })
}



// -------------- College js -------------- //

const collegeMbSwp = new Swiper('.college-life .mb-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.college-life .swp-btns__next',
        prevEl: '.college-life .swp-btns__prev',
    }
})

const collegeSwp = new Swiper('.college-life__swp', {
    grabCursor: true,
    effect: "creative",
    spaceBetween: 20,
    creativeEffect: {
        limitProgress: 10,
        prev: {
            translate: [0, 0, 0],
            opacity: 0,
        },
        next: {
            translate: ["calc(100% + 20px)", 0, 0],
            opacity: 0.5,
        },
    },
    navigation: {
        nextEl: '.college-life .swp-btns__next',
        prevEl: '.college-life .swp-btns__prev',
    }
})

let collegeTreaningSwpInit = false;
let collegeTreaningSwp;
function collegeTreaningSwpFunction() {
    if (window.innerWidth <= 700) {
        if (!collegeTreaningSwpInit) {
            collegeTreaningSwpInit = true;
            collegeTreaningSwp = new Swiper(".college-treaning .swiper", {
                slidesPerView: "auto",
                spaceBetween: 10,
                navigation: {
                    nextEl: ".college-treaning .swp-btns__next",
                    prevEl: ".college-treaning .swp-btns__prev",
                }
            });
        }
    } else if (collegeTreaningSwpInit) {
        collegeTreaningSwp.destroy();
        collegeTreaningSwpInit = false;
    }
}
collegeTreaningSwpFunction();
window.addEventListener("resize", collegeTreaningSwpFunction);

const collegeTeacherSwp = new Swiper('.college-teacher__swp', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints: {
        1500: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.college-teacher .swp-btns__next',
        prevEl: '.college-teacher .swp-btns__prev',
    }
})

const collegeCareerswp = new Swiper('.college-career__swp', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loopedSlides: 20,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeModeMomentum: true,
    allowTouchMove: false,
})

const collegeAppealSwp = new Swiper('.college-appeal__swp', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        1500: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.college-appeal .swp-btns__next',
        prevEl: '.college-appeal .swp-btns__prev',
    }
})

const faqAccordions = document.querySelectorAll('.college-faq .faq-accordion');

if (faqAccordions.length) {
    faqAccordions.forEach((item) => {
        const accHeader = item.querySelector('.faq-accordion__btn');
        const accBody = item.querySelector('.faq-accordion__body-wrap');
    
        accHeader.addEventListener('click', () => {
            item.classList.toggle('active');
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        });
    });
}

let collegeEducationSwpInit = false;
let collegeEducationSwp;
function collegeEducationSwpFunction() {
    if (window.innerWidth <= 700) {
        if (!collegeEducationSwpInit) {
            collegeEducationSwpInit = true;
            collegeEducationSwp = new Swiper(".college-education__swp", {
                slidesPerView: "auto",
                spaceBetween: 10,
                navigation: {
                    nextEl: ".college-education .swp-btns__next",
                    prevEl: ".college-education .swp-btns__prev",
                }
            });
        }
    } else if (collegeEducationSwpInit) {
        collegeEducationSwp.destroy();
        collegeEducationSwpInit = false;
    }
}
collegeEducationSwpFunction();
window.addEventListener("resize", collegeEducationSwpFunction);

const workAboutAccordions = document.querySelectorAll('.work-about__accordion');

if (workAboutAccordions.length) {
    workAboutAccordions.forEach((item) => {
        const header = item.querySelector('.work-about__accordion-btn');
        const content = item.querySelector('.work-about__accordion-body');
    
        header.addEventListener('click', () => {
            item.classList.toggle('active')
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
            workAboutAccordions.forEach(el => {
                if (item != el) {
                    el.classList.remove('active');
                    el.querySelector('.work-about__accordion-body').style.maxHeight = null;
                }
            })
        });
    });
}

const contentBlockLeftItem = document.querySelectorAll('.content-block__left-item');
const contentBlockRight = document.querySelectorAll('.content-block__right-head .content-block__body');

if (contentBlockLeftItem.length) {
    contentBlockLeftItem.forEach((el, elIdx) => {
        const btn = el.querySelector('.content-block__btn');
        btn.onclick = () => {
            contentBlockLeftItem.forEach(item => {
                if (el == item) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
            contentBlockRight.forEach((item, idx) => {
                if (idx == elIdx) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }
    })
}

const workLifeBlocks = document.querySelectorAll('.work-life .content-block');
let blockIdx = 0
if (workLifeBlocks.length) {
    workLifeBlocks.forEach(el => {
        const btn = el.querySelector('.btn-red');
        btn.onclick = () => {
            blockIdx += 1;
            if (blockIdx == workLifeBlocks.length) {
                blockIdx = 0;
            }
            workLifeBlocks.forEach((item, idx) => {
                if (blockIdx == idx) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }
    })
}