# Dropdown WIP

## Usage

In order to use the dropdown custom element you need to import the element in the document's head:

```html
<link href="tk-dropdown.min.css" rel="stylesheet">
<script src="tk-dropdown.min.js"></script>
```

The simplified version of the custom elements
```html
<tk-dropdown>
	<button>Click</button>
	<div class="tk-dropdown">
		<a class="tk-dropdown-item" href="#">Item 1</a>
		<a class="tk-dropdown-item" href="#">Item 2</a>
		<a class="tk-dropdown-item" href="#">Item 3</a>
		<a class="tk-dropdown-item" href="#">Another item</a>
	</div>
</tk-dropdown>
```

## Dropdown demo

<div class="mermaid">

	<tk-dropdown>
		<button class="tk-btn tk-btn-small">Click</button>
		<div class="tk-dropdown">
			<a class="tk-dropdown-item" href="#">Item 1</a>
			<a class="tk-dropdown-item" href="#">Item 2</a>
			<a class="tk-dropdown-item" href="#">Item 3</a>
			<a class="tk-dropdown-item" href="#">Another item</a>
		</div>
	</tk-dropdown>

	<tk-dropdown mode="hover">
		<button class="tk-btn tk-btn-small">Hover</button>
		<div class="tk-dropdown">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
	</tk-dropdown>

</div>

## Attibutes
Control the design and functionality of the custom element through attributes.


|Attribute		|Description|
|---------------|-----------------------------------------------------------------------------------------------|
|mode			|The dropdown trigger behaviour mode (`click` (default) or `hover`)|
