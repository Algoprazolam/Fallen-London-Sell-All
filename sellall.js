const bazaarPage = "https://www.fallenlondon.com/bazaar";
const checkerConfig = {
    subtree: true,
    childList: true
};
//make the fill all button
const fillAllButton = document.createElement("button");
//give it the classes fallen london uses for style
fillAllButton.className = 'button button--primary fillAllButton';
//very important. Add Type Button because without it it will sell your items. (Rat on a string, you fought the good fight.)
fillAllButton.type = 'button';
// go checkin for stuff when on bazaar page only
const sellPopupChecker = new MutationObserver(function () {
    if (window.location.href == bazaarPage) {
        lookForSellPopup()
    } else {
        return;
    }


});

function lookForSellPopup() {
    //try and find the sell item popup
    let sellPopup = window.document.querySelector('.modal-dialog--after-open');
    //if the sellpopup has been found. do
    if (sellPopup != null) {
        //look for the fillAllButton 
        let lookForFillAllButton = sellPopup.querySelector('.fillAllButton');
        //check if the fillAll button has already been added otherwise it will add an infinit amount of them.
        if (lookForFillAllButton == null) {
            //find the control buttons
            let sellPopupControls = sellPopup.querySelector('.exchange-ui__controls');
            //find total items owned
            let itemTotal = sellPopup.querySelector('.js-item-value.icon__value').innerText;
            //insert the fillall button with itemTotal as its text
            sellPopupControls.insertAdjacentElement('beforeend', fillAllButton);
            fillAllButton.innerText = "+" + itemTotal;
            let numberField = sellPopupControls.querySelector('input[type="number"]');
            fillAllButton.addEventListener("click", function () {  
                let setSellTotal = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                setSellTotal.call(numberField, itemTotal);
                let fakeEvent = new Event('input', {bubbles: true});
                numberField.dispatchEvent(fakeEvent);                
         });
            
            
        }


    }
    //if the button hasnt already been made, find total items owned. add it as text to the FillAll button.

};


sellPopupChecker.observe(document, checkerConfig);