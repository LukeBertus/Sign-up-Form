//#region querySelectors
const page = document.querySelector(".page")
const mainContainer = document.querySelector('.mainContainer')
const pass2 = document.querySelector('#passwordConf')
//#endregion

//#region layout
let tracker = 0;
let imageContainer = null;
window.addEventListener('resize', e => {
    
    let pageWidth = page.offsetWidth
    console.log(tracker)
    
    if (pageWidth < 1150 && tracker === 1) {
        if (imageContainer) {
        imageContainer.remove();
        imageContainer = null;
        }
        tracker = 0;
    } 
    if (pageWidth>=1150 && tracker === 0) {
        tracker = 1;
        imageContainer = document.createElement('div');
        imageContainer.classList.add("imageContainer");
        page.insertBefore(imageContainer, mainContainer);
        logo = document.createElement('img');
        logo.classList.add("logo");
        imageContainer.appendChild(logo);
        
        credit = document.createElement('p');
        credit.classList.add("credit");
        imageContainer.appendChild(credit);

        photoBy = document.createElement('span');
        photoBy.textContent = "Photo by ";
        photoBy.classList.add("creditText")
        credit.appendChild(photoBy);

        userCredit = document.createElement('a')
        userCredit.setAttribute('href', 'https://unsplash.com/@babybluecat')
        userCredit.textContent = "J Lee"
        userCredit.classList.add("creditLink")
        credit.appendChild(userCredit)
        
        on = document.createElement('span');
        on.textContent = " on ";
        on.classList.add("creditText")
        credit.appendChild(on);

        siteCredit = document.createElement('a')
        siteCredit.setAttribute('href', 'https://unsplash.com')
        siteCredit.textContent = "Unsplash"
        siteCredit.classList.add("creditLink")
        credit.appendChild(siteCredit)


        
        logo.setAttribute('src', 'images/logo3.png')
    }
})
const onLoad = new Event("resize");
window.dispatchEvent(onLoad);
//#endregion

// #region password comparison
pass2.addEventListener('change', e => {
let pass1Value = document.getElementById('password').value ;
let pass2Value = pass2.value;
    if (pass1Value !== pass2Value) pass2.setCustomValidity("The passwords do not match")
    else pass2.setCustomValidity("")
}); 
// #endregion
