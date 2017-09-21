# Switcher

In order to use the Switcher custom element you need to import the element in the document's head:
```html
<link href="tk-switcher.min.css" rel="stylesheet">
<script src="tk-switcher.min.js"></script>
```

The simplified version of the custom element
```html
<tk-switcher off-text="No" on-text="Yes">
	<input name="switcher" id="sw1" value="0" type="radio" class="active" checked>
	<input name="switcher" id="sw2" value="1" type="radio">
</tk-switcher>

```

### Switcher demo:
<tk-switcher type="success" off-text="Off" on-text="On">
	<input name="switcher1" id="sw1" value="0" type="radio">
	<input name="switcher1" id="sw2" value="1" type="radio" class="active" checked>
</tk-switcher>

<tk-switcher type="primary" off-text="No" on-text="Yes">
	<input name="switcher2" id="sw3" value="0" type="radio" class="active" checked>
	<input name="switcher2" id="sw4" value="1" type="radio">
</tk-switcher>

<tk-switcher type="danger" off-text="Stable" on-text="Alpha">
	<input name="switcher3" id="sw5" value="0" type="radio" class="active" checked>
	<input name="switcher3" id="sw6" value="1" type="radio">
</tk-switcher>


## Attibutes
Control the design and functionality of the custom element through attributes.

|Attribute				|Description								     												|
|-----------------------|-----------------------------------------------------------------------------------------------|
|type		|This attribute is responsible for the looks.																|
|off-text	|The text that's displayed when the switcher is toggled off													|
|on-text		|The text that's displayed when the switcher is toggled on													|

## Methods
The custom element exposes a method to switch its state.


|Event						|Description																	|
|---------------------------|-------------------------------------------------------------------------------|
|switcherElement.toggle()	|This method will flip the state of the switcher								|



## Events
The custom element exposes a few events for hooking into switcher functionality.


|Event					|Description								     												|
|-----------------------|-----------------------------------------------------------------------------------------------|
|tk.switcher.toggle	|This event fires when the Switcher has been switched "on" or "off"								|
|tk.switcher.on		|This event fires when the Switcher has been switched "on"										|
|tk.switcher.off	|This event fires when the Switcher has been switched "off"										|


Example:
Add some functonality when the Switcher has been toggled
```js
el.addEventListener('tk.switcher.toggle', function() {
  alert('Toggled!')
})
```

Add some functonality when the Switcher has been switched "on"
```js
el.addEventListener('tk.switcher.on', function() {
  alert('Switched on!')
})
```

Add some functonality when the Switcher has been switched "off"
```js
el.addEventListener('tk.switcher.off', function() {
  alert('Switched off!')
})
```
