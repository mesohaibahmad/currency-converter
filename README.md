# currency-converter

This is a source code of My Currency Converter App. 
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
This appp take the currency and amount that you want to to convert and then the currency in which you want to convert. And show the result in Result portion.

### The challenge

Users should be able to:

- Enter any currency with amount and then have to select the other currency in which they want the value.

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Solution URL here](https://github.com/mesohaibahmad/currency-converter)
- Live Site URL: [Live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
-Javascript


### What I learned

I learned about adding select option tags on runtime using javascript.
```js
for(let sel of select){
for(let code in currencyCodes){
    let option = document.createElement("option");
    option.innerText= `${code}  - ${currencyCodes[code].name}`;
    option.value= code;
    sel.append(option);
    if(sel.name == "currency" && code== "USD")
    {
        option.selected="select";
    }
    else if(sel.name != "currency" && code== "PKR"){
        option.selected="select";
    }
}
sel.addEventListener("change", ()=>{ sel.parentElement.querySelector("img").setAttribute("src", `https://flagsapi.com/${currencyCodes[sel.value].code}/flat/64.png`) 
})
}
}
```


### Continued development
Moving towards React✈


## Author

- Github - [Sohaib Ahmad](https://github.com/mesohaibahmad)


