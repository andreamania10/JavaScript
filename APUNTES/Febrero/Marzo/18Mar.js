//INNERHTML en JavaScript
//Mirar información

<div id="pp" style="background-color:yellow; width:200px; height:200px">
	<input type="button" id="btn"/>
</div>

<script>
	const anadeHTML = () =>{
		document.querySelector("#pp").innerHTML="<h1>Casa</h1>";
	}
	document.querySelector('#btn').addEventListener('click', anadeHTML)
</script>
