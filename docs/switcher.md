# Switcher

In order to use the switcher custom element you need to import the element in the document's head:
```html
<link href="tk-switcher.min.css" rel="stylesheet">
<script src="tk-switcher.min.js"></script>
```

The simplified version of the custom element
```html
<tk-switcher offText="No" onText="Yes">
	<input name="switcher" id="sw1" value="0" type="radio" class="active" checked>
	<input name="switcher" id="sw2" value="1" type="radio">
</tk-switcher>

```

### Switcher demo:
<tk-switcher type="success" offText="Off" onText="On">
	<input name="switcher1" id="sw1" value="0" type="radio">
	<input name="switcher1" id="sw2" value="1" type="radio" class="active" checked>
</tk-switcher>

<tk-switcher type="primary" offText="No" onText="Yes">
	<input name="switcher2" id="sw3" value="0" type="radio" class="active" checked>
	<input name="switcher2" id="sw4" value="1" type="radio">
</tk-switcher>

<tk-switcher type="danger" offText="Stable" onText="Alpha">
	<input name="switcher3" id="sw5" value="0" type="radio" class="active" checked>
	<input name="switcher3" id="sw6" value="1" type="radio">
</tk-switcher>


## Attibutes
Control the design and functionality of the custom element through attributes.

|Attribute				|Description								     												|
|-----------------------|-----------------------------------------------------------------------------------------------|
|type		|This attribute is responsible for the looks.																|
|offText	|The text that's displayed when the switcher is toggled off													|
|onText		|The text that's displayed when the switcher is toggled on													|

## Methods
The custom element exposes a method to switch its state.


|Event						|Description																	|
|---------------------------|-------------------------------------------------------------------------------|
|switcherElement.toggle()	|This method will flip the state of the switcher								|



## Events
The custom element exposes a few events for hooking into switcher functionality.


|Event					|Description								     												|
|-----------------------|-----------------------------------------------------------------------------------------------|
|tk.switcher.toggle	|This event fires when the switcher has been switched "on" or "off"								|
|tk.switcher.on		|This event fires when the switcher has been switched "on"										|
|tk.switcher.off	|This event fires when the switcher has been switched "off"										|


Example:
Add some functonality when the switcher has been toggled
```js
element.addEventListener('tk.switcher.toggle', function() {alert('Toggled!')} )
```

Add some functonality when the switcher has been switched "on"
```js
element.addEventListener('tk.switcher.on', function() {alert('Switched on!')} )
```

Add some functonality when the switcher has been switched "off"
```js
element.addEventListener('tk.switcher.off', function() {alert('Switched off!')} )
```
