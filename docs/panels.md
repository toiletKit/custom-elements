# Panels WIP

## Panels allows for tabbed or accordion like content

In order to use the tab custom element you need to import the element in the document's head:
```html
<link href="tk-panels.min.css" rel="stylesheet">
<script src="tk-panels.min.js"></script>
```

The simplified version of the a simple accordion:

```html
<tk-panels view="accordion">
	<section id="panel-1-1" name="Tab panel 1">
		<h3>Tab panel 1</h3>
		<p>Content for the tab panel</p>
	</section>
	<section id="panel-1-2" name="Tab panel 2">
		<h3>Tab panel 2</h3>
		<p>Content for the tab panel</p>
	</section>
	<section id="panel-1-3" name="Tab panel 3">
		<h3>Tab panel 1</h3>
		<p>Content for the tab panel</p>
	</section>
</tk-panels>
```

The simplified version of the a simple tab:

```html
<tk-panels>
	<section id="panel-2-1" name="Tab panel 1">
		<h3>Tab panel 1</h3>
		<p>Content for the tab panel</p>
	</section>
	<section id="panel-2-2" name="Tab panel 2">
		<h3>Tab panel 2</h3>
		<p>Content for the tab panel</p>
	</section>
	<section id="panel-2-3" name="Tab panel 3">
		<h3>Tab panel 1</h3>
		<p>Content for the tab panel</p>
	</section>
</tk-panels>
```

### Tab demo:

<div class="mermaid">

	<tk-panels view="accordion" recall="false">
		<section id="panel1" name="Tab panel 1">
			<h3>Tab panel 1</h3>
			<p>Content for the tab panel</p>
		</section>
		<section id="panel2" name="Tab panel 2">
			<h3>Tab panel 2</h3>
			<p>Content for the tab panel</p>
		</section>
		<section id="panel3" name="Tab panel 3">
			<h3>Tab panel 1</h3>
			<p>Content for the tab panel</p>
		</section>
	</tk-panels>

	<hr>

	<tk-panels responsive="true" recall="false">
		<section id="panel1" name="Tab panel 1">
			<h3>Tab panel 1</h3>
			<p>Content for the tab panel</p>
		</section>
		<section id="panel2" name="Tab panel 2">
			<h3>Tab panel 2</h3>
			<p>Content for the tab panel</p>
		</section>
		<section id="panel3" name="Tab panel 3">
			<h3>Tab panel 1</h3>
			<p>Content for the tab panel</p>
		</section>
	</tk-panels>

</div>