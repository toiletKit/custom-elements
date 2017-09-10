# Collapse WIP

In order to use the collapse custom element you need to import the element in the document's head:
```html
<link href="tk-collapse.min.css" rel="stylesheet">
<script src="tk-collapse.min.js"></script>
```

The simplified version of the custom elements
```html
<p>
	<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
	Link with href
</a>
	<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"
	aria-controls="collapseExample">
	Button with data-target
</button>
</p>
<tk-collapse id="collapseExample" state="closed">
	<div class="card card-block">
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
		craft beer labore wes anderson cred nesciunt sapiente ea proident.
	</div>
</tk-collapse>
```

### Collapse demo:

<div class="mermaid">
<p>
<a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
Link with href
</a>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"
aria-controls="collapseExample">
Button with data-target
</button>
</p>
<tk-collapse id="collapseExample" state="closed"><div class="card card-block">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div></tk-collapse>
</div>
