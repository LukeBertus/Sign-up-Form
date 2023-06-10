//#region querySelectors
const page = document.querySelector(".page")
const mainContainer = document.querySelector('.mainContainer')
//#endregion

//#region layout
let tracker = 0;
let imageContainer = null;
window.addEventListener('resize', e => {
    
    let pageWidth = page.offsetWidth
    console.log(tracker)
    
    if (pageWidth < 1200 && tracker === 1) {
        if (imageContainer) {
        imageContainer.remove();
        imageContainer = null;
        }
        tracker = 0;
    } 
    if (pageWidth>=1200 && tracker === 0) {
        tracker = 1;
        imageContainer = document.createElement('div');
        imageContainer.classList.add("imageContainer");
        page.insertBefore(imageContainer, mainContainer);
        image = document.createElement('img');
        image.classList.add("image");
        imageContainer.appendChild(image);
    }
})
const onLoad = new Event("resize");
window.dispatchEvent(onLoad);
//#endregion
