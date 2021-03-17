# Simple HTML Personal Website

Now version 2!

Link: http://www.christoscunning.com

Node.js website is still under construction, so I thought I would update this website in the meantime.

Website is a single HTML page that switches the main content using Javascript and AJAX.

repo: personal-website


# Steps to Update resume:
1. Open resume in Word.
2. Save as filtered web page (.htm)
3. Open in Notepad++
4. Convert Text encoding to UTF-8
5. Update text encoding header
6. Add Before and after bootstrap container
7. Add custom style
8. Update link in script-vXX.js

Step 7:
<!-- Style goes here 
		.container {
			width: 100%;
			margin-left: auto;
			margin-right: auto;
		}
		
		body {
			min-height: 50em;
		}
		
		.about-text {
			margin: 5px;
			padding: 5px;
			border: 3px solid grey;
			border-radius: 3px;
			background-color: white;
		}
		
		-->
		
<!-- word styling -->
		

Step 8:

BEFORE::

<body lang=EN-CA>

<div class="container" style="text-align: left">
	<div class="row">
			<div class="col-sm-2"></div>
			<div class="col-sm-8">
					<!-- Content goes here -->
	
				<div class="about-text">
<!-- PRETEND THERE IS A INDENT HERE -->

AFTER::

<!-- PRETEND THERE IS A INDENT ABOVE HERE -->
</div>
				
			</div>
			<div class="col-sm-2"></div>
		</div>	
	</div>


</body>

</html>