function sendMail() {
  var params = {
    name: document.getElementById("name").value,
  };

  const serviceID = "service_jm6gai3";
  const templateID = "template_j0dpnwq";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
