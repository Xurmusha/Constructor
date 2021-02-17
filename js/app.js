function drawBorder() {
    document.getElementById('borderdraw').style.border='2px solid #E25725';
    document.getElementById('borderdraw').style.backgroundColor='white';
    document.getElementById('borderdraw').style.borderRadius='12px';
}

function drawBorderForUnique() {
    document.getElementById('uniqueBorder').style.border='2px solid #E25725';
    document.getElementById('uniqueBorder').style.backgroundColor='white';
    document.getElementById('uniqueBorder').style.borderRadius='12px';
}

function goPage(element, location) {
    let isDisabled = false;

    element.classList.forEach((className, index) => {
        if (className.includes("disabled")){
        isDisabled = true;

        // document.getElementById(id).classList.add("next-grey");
    }
});

    if (!isDisabled){
        window.location.href=location;
    }
}

function drawBorderUz() {
    document.getElementById('uzbek').style.borderColor="#E25725";
    document.getElementById('uzbek').style.backgroundColor="#ffffff";

}
function drawBorderEn() {
    document.getElementById('english').style.borderColor="#E25725";
    document.getElementById('english').style.backgroundColor="#ffffff";

}
function drawBorderRu() {
    document.getElementById('ru').style.borderColor="#E25725";
    document.getElementById('ru').style.backgroundColor="#ffffff";
}