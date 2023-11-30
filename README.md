# Fallen-London-Sell-All
A (Chrome) extension for Fallen London that adds a button to selling items at the bazaar for all items owned at once.

## How to currently use it
- clone the repo ( `git clone https://github.com/Algoprazolam/Fallen-London-Sell-All` )
- Go to chrome extensions ( [chrome://extensions/](chrome://extensions/) )
- enable developer mode ( there should be a slider in the top right of the extensions page)
- Click the **Load Unpacked** button in the top left of the page.
- select the folder you obtained by cloning the repo in step 1 and confirm.
- Make sure it's enabled and done.

## Stuff I want to be part of this extension

- A button next to sell that just auto sells the entire stack.

- or maybe just a bunch of checkboxes and then sell all of the checked items

- Auto check all items of a certain value. And maybe also below that value of option is checked

### resources i used to help me out
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
https://www.w3schools.com/js/js_htmldom_nodes.asp

```
var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
nativeInputValueSetter.call(input, 'react 16 value');

var ev2 = new Event('input', { bubbles: true});
input.dispatchEvent(ev2);


// orrrrr

function setReactvalue(inputElement, newValue) {
  // These two lines do the difficult version of input.value = newValue; 
  let hiddenInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
  hiddenInputValueSetter.call(inputElement, newValue);

  // These two lines just run the inputelement.onInput event listener
  let fakeEvent = new Event('input', { bubbles: true });
  inputElement.dispatchEvent(fakeEvent );
}

// Example usage
setReactValue(document.getQuerySelector("input[type='number']", 20);

```