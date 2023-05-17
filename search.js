document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");
    const form = document.getElementById("sform");
    console.log("Form element:", form);
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("Form submitted");
      
      const checkin = document.getElementById("checkin").value;
      const checkout = document.getElementById("checkout").value;
      const adult = parseInt(document.getElementById("adults").value);
      const child = parseInt(document.getElementById("children").value);
      console.log("Form data:", checkin, checkout, adult, child);
  
      const total = adult + child;
  
      if (total <= 4) {
        window.location.href = "h1.html";
      }
      else if(total >=5 && total <6){
        window.location.href = "h2.html";
      }
      else if(total >=7 && total < 8){
        window.location.href = "h3.html";
      }
      else{
        window.location.href = "h4.html";
      }

    });
  });
  