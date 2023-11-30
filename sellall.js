const bazaarPage = "https://www.fallenlondon.com/bazaar";
const checkerConfig = { subtree: true, childList: true };
//make the fill all button
const fillAllButton = document.createElement("button");
//give it the classes fallen london uses for style
fillAllButton.className ='button button--primary fillAllButton';
//very important. Add Type Button because without it it will sell your items. (Rat on a string, you fought the good fight.)
fillAllButton.type = 'button';
// go checkin for stuff when on bazaar page only
const sellPopupChecker = new MutationObserver(function () {
    if (window.location.href == bazaarPage) {
        lookForSellPopup()
        console.log('looking for sell popup');
    }
    else {
        return;
    }
    
    
});

function lookForSellPopup () {
    //try and find the sell item popup
    let sellPopup = window.document.querySelector('.modal-dialog--after-open');
    //check if the fillAll button has already been added otherwise it will add an infinit amount of them.
    let lookForFillAllButton = sellPopup.querySelector('.fillAllButton');
    //honestly. tryna fix this error. TODO
    if (sellPopup == null) {
        return;
    }
    //if the button hasnt already been made, find total items owned. add it as text to the FillAll button.
    //add the button to the page.
    else if (lookForFillAllButton == null) {
        let sellPopupControls = sellPopup.querySelector('.exchange-ui__controls');
        let itemTotal = sellPopup.querySelector('.js-item-value.icon__value').innerText;
        const fillAllButtonNode = document.createTextNode(itemTotal);
        fillAllButton.appendChild(fillAllButtonNode);
        sellPopupControls.insertAdjacentElement('beforeend', fillAllButton);
        console.log(itemTotal);
        sellPopup.style.color = 'red';
        console.log(sellPopup);
    } 
};




sellPopupChecker.observe(document, checkerConfig);