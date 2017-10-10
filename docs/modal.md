# Modal WIP

In order to use the modal custom element you need to import the element in the document's head:
```html
<link href="tk-modal.min.css" rel="stylesheet">
<script src="tk-modal.min.js"></script>
```

The simplified version of the custom elements
```html
<button type="button" class="tk-btn tk-btn-small" data-href="#exampleModal">Launch demo modal</button>

<tk-modal id="exampleModal" title="Modal title" close-button-title="Close" width="100%" height="400px" iframe="https://www.google.com">
	<section>
		<h4>I'm a Modal</h4>
	</section>
	<footer>
		<button class="tk-btn tk-btn-small" data-dismiss>Close</button>
		<button class="tk-btn tk-btn-small">Save changes</button>
	</footer>
</tk-modal>
```

### Modal demo:

<div class="mermaid">

	<button type="button" class="tk-btn tk-btn-small" data-href="#exampleModal1">Launch demo modal</button>
	<tk-modal id="exampleModal1" title="Modal title" close-button-title="Close" width="100%" height="400px">
		<section>
			<h4>I'm a Modal</h4>
		</section>
		<footer>
			<button class="tk-btn tk-btn-small" data-dismiss>Close</button>
			<button class="tk-btn tk-btn-small">Save changes</button>
		</footer>
	</tk-modal>

	<hr>

	<button type="button" class="tk-btn tk-btn-small" data-href="#exampleModal2">Modal with iframe</button>
	<tk-modal id="exampleModal2" title="Modal title" close-button-title="Close" width="100%" height="400px" iframe="https://www.google.com">
		<section>
			<h4>I'm a Modal</h4>
		</section>
		<footer>
			<button class="tk-btn tk-btn-small" data-dismiss>Close</button>
			<button class="tk-btn tk-btn-small">Save changes</button>
		</footer>
	</tk-modal>

</div>
