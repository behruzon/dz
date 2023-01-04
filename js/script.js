//////первый ссылка


let mn = document.querySelector('.sil1')
let nm = document.querySelector('.sec2')

let sec1 = nm.offsetTop

function scrol1(event){
    event.preventDefault()
    window.scroll({
        top:sec1,
        behavior:"smooth",
    })
}

mn.addEventListener('click', scrol1)



// 2
let lnk2 = document.querySelector('.sil2')
let cont = document.querySelector('.sec4')

let sec2_pos = cont.offsetTop




function scrool_js1(event) {
    event.preventDefault()
    cont.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk2.addEventListener('click', scrool_js1)

//////////////////////////



//////////////////////////
let lnk3 = document.querySelector('.sil3')
let sec = document.querySelector('.sec5')

let sec3_pos = sec.offsetTop




function scrool_js3(event) {
    event.preventDefault()
    sec.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk3.addEventListener('click', scrool_js3)



/////////////////////



//////////////////////////
let lnk4 = document.querySelector('.sil4')
let secv = document.querySelector('.sec7')

let sec4_pos = secv.offsetTop




function scrool_js4(event) {
    event.preventDefault()
    sec.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk4.addEventListener('click', scrool_js4)



/////////////////////



