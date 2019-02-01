---
title: JS30 (09) - Update CSS Variables with JS
date: 2019-01-29
tags:
  - post
  - JavaScript
  - JS30 Challenge
---

Today I learned about the array method: sort().



### The bones (HTML structure)
Here is the final result of our markup: 

```html/6,12,18
<h1>Update CSS Variables with <span class="highlight">JS</span></h1>

<div class="controls">
  <div class="input-control">
    <label for="spacing">Spacing</label>
    <!-- name, value and data-sizing for JavaScript work. -->
    <input type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" />
  </div>

  <div class="input-control">
    <label for="blur">Blur:</label>
    <!-- name, value and data-sizing for JavaScript work. -->
    <input type="range" name="blur" min="0" max="25" value="3" data-sizing="px" />
  </div>

  <div class="input-control">
    <label for="base">Base Color:</label>
    <!-- name, value for JavaScript work. -->
    <input type="color" name="base" value="#FFD700" />
  </div>
</div>

<div class="image-wrapper">
  <img src="img.jpg" alt="Cool" />
</div>
```

### The flesh (Adding Styles)

```css/0-3
:root {
  --base: #ffd700;
  --spacing: 10px;
  --blur: 3px;
}

img {
  background: var(--base);
  padding: var(--spacing);
  filter: blur(var(--blur));
}

.highlight, label {
  color: var(--base);
}
```

We need to declare some attributes and initialize a default values to these attributes in order to handle the update process. `name` attribute for printing the name of the css variable into the markup by JavaScript. `value` attribute for printing the current value of the input into the markup on `change` and `mousemove` events. `data-sizing` attribute is in order to concat it's value with the current value of the input, because in css syntax some values (padding, margins, font-size...)  require a suffix like `px`, `em`, `rem` or any different unit.
 
### JavaScript events handling

``` javascript/4
const inputs = document.querySelectorAll(".input-control input");

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; // Returns the value of data-sizing or "" empty string.
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
```
We need to listen for every singe change (Clicking, Drag & Drop...) using `change` event, and also to every single change when the user move the mouse over the input trigger, using `mousemove` event, in order to watch for any update accurs, in live mode way.

Inside `style` attribute of `html` tag (pairs to css `:root` selector), we're going to inject the value of `name` attribute of the corresponding input `--${this.name}` which is going to be `"--spcing"` css variable property for example, with it's current live value `this.value + suffix` which is going to be `"10px"` or another different value. 

If the value of any css property we choose dose not require a suffix, we do not have to set a `data` attribute to the corresponding input in the markup. When scenarios like this happen, `suffix` variable will return `""` an empty string as a fallback instead of returning `undefined`, just in case of `data-sizing` attribute dose not exist.

CodePen: