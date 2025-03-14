
// Customer Contact
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
  
  var countquote = 0;

    function changequote() {
        countquote = countquote + 1;
        if (countquote % 4 == 0) {
            var bqh = document.getElementById("bqhead");
            bqh.innerHTML = "<q> Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light.</q>"
            var bqf = document.getElementById("bqfoot");
            bqf.innerHTML = "Dylan Thomas 1914-1953";
        } else if (countquote % 4 == 1) {
            var bqh = document.getElementById("bqhead");
            bqh.innerHTML = "<q>Change is the end result of all true learning.</q>"
            var bqf = document.getElementById("bqfoot");
            bqf.innerHTML = "Dr. Leo Buscaglia PROFESSOR, AUTHOR";
        } else if (countquote % 4 == 2) {
            var bqh = document.getElementById("bqhead");
            bqh.innerHTML = "<q>প্রথমে যেটি একটি উদ্দেশ্যের উপায় মাত্র থাকে, মানুষে ক্রমে সেই উপায়টিকে উদ্দেশ্য করিয়া তুলে।</q>"
            var bqf = document.getElementById("bqfoot");
            bqf.innerHTML = "রবীন্দ্রনাথ ঠাকুর";
        } else {
            var bqh = document.getElementById("bqhead");
            bqh.innerHTML = "وَلَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ <br> <q>If you are greatful, I will surely increase you [in favor]</q>"
            var bqf = document.getElementById("bqfoot");
            bqf.innerHTML = "Surah Ibrahim 14:7";
        }
    }
    
    // resume download notification
    document.querySelectorAll('.download-link').forEach(function(link) {
        link.addEventListener('click', function() {
            toastr.success("Resume downloaded! <br> For password Text me!", null, {
                positionClass: "toast-bottom-right"
            });
        });
    });
    
    // Calculate age based on birthdate
  function calculateAge(birthDate) {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // Calculate experience (years and months) from a start date
  function calculateExperience(startDate) {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (now.getDate() < startDate.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  }

  // Run calculations once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    const birthDate = new Date("1996-11-18");
    const age = calculateAge(birthDate);

    const expStartDate = new Date("2022-01-01");
    const experience = calculateExperience(expStartDate);

    document.getElementById("age").textContent = age;
    document.getElementById("experience").textContent = `${experience.years} years and ${experience.months} months`;
  });
      
    