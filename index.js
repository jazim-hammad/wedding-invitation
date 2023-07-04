function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    people: document.getElementById("people").value,
  };

  const serviceID = "service_jm6gai3";
  const templateID = "template_j0dpnwq";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("people").value = "";
      console.log(res);
      alert(
        "Your Response is Recorded! \n Looking forward to see you at our wedding ~ Aziz & Aleeza"
      );
    })
    .catch((err) => console.log(err));
}
