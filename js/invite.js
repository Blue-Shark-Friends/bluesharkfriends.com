function LoadInvitePage() {
	
    const params = new URLSearchParams(window.location.search);
  
    const host = params.get("host");
    const ref = params.get("ref");
    
    document.getElementById("host").innerHTML = host;
  }
  
  //pulls the query parameters in from the url - this needs to be re-evaluated and done more safely but works for now
  urlp=[];s=location.toString().split('?');s=s[1].split('&');for(i=0;i<s.length;i++){u=s[i].split('=');urlp[u[0]]=u[1];}
  
  function TakeUserToCommunity(url) {
            console.log(url);
          window.open(url, '_blank');
        };