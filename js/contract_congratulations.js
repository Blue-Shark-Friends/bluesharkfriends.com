function LoadContractCongratulationsPage() {
	
  const params = new URLSearchParams(window.location.search);

  const numOfStep = params.get("numOfStep");
  const urlOfStep = params.get("urlOfStep");
  
  document.getElementById("numOfStep").innerHTML = numOfStep;
  document.getElementById("numOfNextStep").innerHTML = parseInt(numOfStep) + 1;
  
  if (!urlOfStep) {
	document.getElementById("nextSection").style.display = 'none';
	document.getElementById("finishedSection").style.display = 'block';
  }
  else {
	  console.log('at least we got here');
	
	document.getElementById("finishedSection").style.display = 'none';
  }
}

urlp=[];s=location.toString().split('?');s=s[1].split('&');for(i=0;i<s.length;i++){u=s[i].split('=');urlp[u[0]]=u[1];}

function TakeUserToNextStep(url) {
		  console.log(url);
		window.open(url, '_blank');
	  };