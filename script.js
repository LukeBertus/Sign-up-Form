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
        logo = document.createElement('img');
        logo.classList.add("logo");
        imageContainer.appendChild(logo);
        
        credit = document.createElement('p');
        credit.classList.add("credit");
        credit.textContent = "Photo by J Lee on Unsplash"
        imageContainer.appendChild(credit);
        logo.setAttribute('src', 'images/logo.png')
    }
})
const onLoad = new Event("resize");
window.dispatchEvent(onLoad);
//#endregion

