// certifications
function moreCert() {
    var fh = document.getElementById("more-cert");
    if (fh.innerHTML == "<b>(+3) More</b>") {
        fh.innerHTML = "<b> Collapse <b>";
    } else {
        fh.innerHTML = "<b>(+3) More</b>";
    }
}

// proj-data-destroyed EpicToast
var option = {
    animation: true,
    delay: 3000
};

function Toasty() {
    var toastHTMLElement = document.getElementById("EpicToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}

// more proj 
function changeProj() {
    var fh = document.getElementById("switchProj");
    if (fh.innerHTML == "<b>(+5) More</b>") {
        fh.innerHTML = "<b> Collapse <b>";
    } else {
        fh.innerHTML = "<b>(+5) More</b>";
    }
}

// more blog
function change() {
    var fh = document.getElementById("OpenBlog");
    if (fh.innerHTML == "<b>(+5) More</b>") {
        fh.innerHTML = "<b> Collapse <b>";
    } else {
        fh.innerHTML = "<b>(+5) More</b>";
    }
}

// more social points 
function minus() {
    if (document.getElementById("SocialPlus").className == "fas fa-plus-circle") {
        document.getElementById("SocialPlus").className = "fas fa-minus-circle";
    } else if (document.getElementById("SocialPlus").className == "fas fa-minus-circle") {
        document.getElementById("SocialPlus").className = "fas fa-plus-circle";
    }

}

// PostMail: mail form website 
//update this with your js_form selector
var form_id_js = "javascript_form";

var data_js = {
    "access_token": "rv100l8ny1nnhxkp8z8lte1z"
};

function js_onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = document.getElementById("js_send");

function js_send() {
    sendButton.value = 'Whispering…';
    sendButton.disabled = true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if (request.readyState == 4) {
            js_onError(request.response);
        }
    };

    var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    var message = document.querySelector("#" + form_id_js + " [name='text']").value + " \n\n Name: " + document.querySelector("#" + form_id_js + " [name='client']").value + "\n Email: " + document.querySelector("#" + form_id_js + " [name='reply_to']").value;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
    var form_data = [];
    for (var key in data_js) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function(e) {
    e.preventDefault();
});


// send anonymous mail 
var nm;
var temp1;
var em;

function hidename() {
    nm = document.getElementById('urname');
    em = document.getElementById('uremail');
    if (nm.value != null || em.value != null) {
        nm.value = '';
        em.value = '';
    }
}