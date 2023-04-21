		   
		function becomeMember()
		{
		      var name=document.getElementById("full-name");
			  var plan=document.getElementById("membership-type");
			  var message="thanks " + name.value + " for joining us. you chose the " + plan.value + " plan "; 
			  alert(message);
			  
	    }