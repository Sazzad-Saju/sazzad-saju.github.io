

document.getElementById('javascript_form').addEventListener('submit', function(e) {
    e.preventDefault();
    const subject = document.querySelector('input[name="subject"]').value;
    let mail_body = document.getElementById('msg-body').value;
    
    const mail_to = "mahfuzul.mngmt@gmail.com";
    const nameInput = document.querySelector('input[name="name"]');
    
    if (nameInput && nameInput.value.trim() !== "") {
        mail_body += "\n\nfrom,\n" + nameInput.value.trim();
    }
    
    const data = {
        subject: subject,
        mail_body: mail_body,
        mail_to: mail_to
    };
    
    const sendButton = document.getElementById('js_send');
    sendButton.value = "Loading...";
    sendButton.disabled = true;
  
    fetch('https://davidani.com/api/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
            document.getElementById('javascript_form').reset();
            sendButton.outerHTML = '<span>You have sent an anonymous mail to Sazzad Saju</span>';
            console.log('Mail sent successfully!');
        } else {
          console.error('Error sending mail.');
          sendButton.value = "Whisper";
          sendButton.disabled = false;
        }
      })
      .catch(error => {
        console.error('Error sending mail:', error);
        sendButton.value = "Whisper";
        sendButton.disabled = false;
      });
});


//year
const date = new Date();

let year = date.getFullYear();
let currentYear = `${year}`;

document.getElementById('year').innerHTML = currentYear;