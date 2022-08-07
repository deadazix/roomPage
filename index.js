'use strict'
const c = console.log
let curr = 1
const sliderImages = document.querySelectorAll('.slider__img')
const rightArr = document.querySelectorAll('.buttons__container')
const header = document.querySelector('.heading-primary')
const paragraph = document.querySelector('.paragraph')
const textList = [
    [`Discover innovative ways to decorate`,`We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`],
    ['We are available all across the globe',`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`],
    
    [`Manufactured with the best materials`,`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`]

]


c(paragraph)
const change= function(heading,para){
    header.textContent = heading
    paragraph.textContent = para
}

rightArr[1].addEventListener('click',changePosition.bind(1))
rightArr[0].addEventListener('click',changePosition.bind(-1))
rightArr[3].addEventListener('click',changePosition.bind(1))
rightArr[2].addEventListener('click',changePosition.bind(-1))

function changePosition(){
  
    if(curr==1&&this==-1)return
    if (curr>2&&this==1)return

    curr= curr + this
    
    // change(textList[curr-1][0],textList[curr-1][1])
    let percent = (-curr*100 +100) + '%'

    sliderImages.forEach(img=>{
        img.style.transform = `translate(${percent})`
    })

}
document.querySelector('.hamber').addEventListener('click',e=>{
    const mnav = document.querySelector('.mnav')
    c(mnav)
    mnav.classList.toggle('mnav--initial')
})
document.querySelector('.mnav__img').addEventListener('click',e=>{
    const mnav = document.querySelector('.mnav')
    c(mnav)
    mnav.classList.toggle('mnav--initial')
})

