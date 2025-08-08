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
                // type: "progressbar",
                // clickable: true,
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
    pagination: {
        el: '.diploma-swp .swp-pagination',
        type: "progressbar",
        clickable: true,
    }
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
            pagination: {
                el: el.querySelector('.swp-pagination'),
                type: "progressbar",
                clickable: true,
            }
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

const educationBtn = document.querySelectorAll('.education .tab-head li');
const educationBody = document.querySelectorAll('.education .tab-body');
const educationSelect = document.querySelector('.education .main-select');

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
        btn.onclick = e => {
            e.preventDefault();
            el.classList.toggle('active');
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