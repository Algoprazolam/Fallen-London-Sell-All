# Fallen-London-Sell-All
Adds additonal options to the bazaar sell tab in Fallen London

## Stuff I want to be part of this extension

- Add a button to when you are selling items that fills in the max amount of items you own of that type.

- A button next to sell that just does whats listed above

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