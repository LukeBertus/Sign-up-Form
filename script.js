//#region querySelectors
const mainContainer = document.querySelector('.mainContainer')
const imageContainer = document.querySelector('.imageContainer')

window.addEventListener('resize', e => {
    let imageWidth = imageContainer.offsetWidth;
    console.log(imageWidth)
    if (imageWidth < 200) imageContainer.remove()
})

//#endregion