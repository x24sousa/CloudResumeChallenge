<script>
fetch('https://jmic5vdez6.execute-api.us-west-2.amazonaws.com/default/VisitorCountFuntion')
    .then(response => response.json())
  	.then(data => {
  	document.getElementById("VisitorCounter").textContent = data["visitorcount"];
  })
</script>