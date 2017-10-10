# Group Buttons WIP

In order to use the group buttons custom element you need to import the element in the document's head:
```html
<link href="tk-group-buttons.min.css" rel="stylesheet">
<script src="tk-group-buttons.min.js"></script>
```

The simplified version of the custom elements
```html
<tk-group-buttons>
	<label class="tk-btn active" aria-pressed="true">
		<input type="checkbox" checked="" autocomplete="off"> Checkbox 1 (pre-checked)
	</label>
	<label class="tk-btn" aria-pressed="false">
		<input type="checkbox" autocomplete="off"> Checkbox 2
	</label>
	<label class="tk-btn" aria-pressed="false">
		<input type="checkbox" autocomplete="off"> Checkbox 3
	</label>
</tk-group-buttons>

<tk-group-buttons>
	<label class="tk-btn active" aria-pressed="true">
		<input type="radio" name="options" id="option1" autocomplete="off" checked=""> Radio 1 (pre-checked)
	</label>
	<label class="tk-btn" aria-pressed="false">
		<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
	</label>
	<label class="tk-btn" aria-pressed="false">
		<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
	</label>
</tk-group-buttons>
```

### Group Buttons demo:

<div class="mermaid">

	<tk-group-buttons>
		<label class="tk-btn active" aria-pressed="true">
			<input type="checkbox" checked="" autocomplete="off"> Checkbox 1 (pre-checked)
		</label>
		<label class="tk-btn" aria-pressed="false">
			<input type="checkbox" autocomplete="off"> Checkbox 2
		</label>
		<label class="tk-btn" aria-pressed="false">
			<input type="checkbox" autocomplete="off"> Checkbox 3
		</label>
	</tk-group-buttons>

	<hr>

	<tk-group-buttons>
		<label class="tk-btn active" aria-pressed="true">
			<input type="radio" checked="" autocomplete="off"> Radio 1 (pre-checked)
		</label>
		<label class="tk-btn" aria-pressed="false">
			<input type="radio" autocomplete="off"> Radio 2
		</label>
		<label class="tk-btn" aria-pressed="false">
			<input type="radio" autocomplete="off"> Radio 3
		</label>
	</tk-group-buttons>

</div>
