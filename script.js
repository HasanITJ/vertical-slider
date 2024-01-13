const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length

activeSLideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`


upBtn.addEventListener(`click`, () => {
    changeSlide('up')
})

downBtn.addEventListener(`click`, () => {
    changeSlide('down')
})
 
function changeSlide(direction){
    if(direction === 'up'){
        activeSLideIndex++
        if(activeSLideIndex === slidesCount){
            activeSLideIndex = 0
        }
    }else if(direction === 'down'){
        activeSLideIndex--
        if(activeSLideIndex < 0){
            activeSLideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight

    sidebar.style.transform =`translateY(${activeSLideIndex * height}px)`
    mainSlide.style.transform =`translateY(-${activeSLideIndex * height}px)`

}