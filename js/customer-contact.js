document.getElementById('contact_form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const originalSubject = document.querySelector('input[name="subject"]').value;
    const subject = "📩 New Customer Message via Portfolio: " + originalSubject;
    let mail_body = document.getElementById('msg-body').value;
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    
    if (nameInput && nameInput.value.trim() !== "" && emailInput && emailInput.value.trim() !== "") {
        mail_body += "\n\nsincerely,\n" + nameInput.value.trim() + "\n" + emailInput.value.trim();
    }
    
    let signature = "\n\nsincerely,";
    
    if (nameInput && nameInput.value?.trim()) {
        signature += "\n" + nameInput.value.trim();
    }
    
    if (emailInput && emailInput.value?.trim()) {
        signature += "\n" + emailInput.value.trim();
    }
    
    if (signature !== "\n\nsincerely,") {
        mail_body += signature;
    }
    
    const data = {
        subject: subject,
        mail_body: mail_body,
        mail_to: "mahfuzul.mngmt@gmail.com"
    };
    
    const sendButton = document.getElementById('js_send');
    sendButton.value = "Loading...";
    sendButton.disabled = true;
  
    // Send the data via a POST request
    fetch('https://davidani.com/api/api/send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('contact_form').reset();
            toastr.success("You have sent a message to Sazzad Saju");
        } else {
            toastr.error("Error sending mail.");
        }
    })
    .catch(error => {
        toastr.error("Error sending mail: " + error);
    });
  });
  