// Highlight_sec: certifications
function moreCert() {
    var fh = document.getElementById("more-cert");
    if (fh.innerHTML == "<b>(+3) More</b>") {
        fh.innerHTML = "<b> Collapse <b>";
    } else {
        fh.innerHTML = "<b>(+3) More</b>";
    }
}

// Project_sec: proj-data-destroyed EpicToast
var option = {
    animation: true,
    delay: 3000
};

function Toasty() {
    var toastHTMLElement = document.getElementById("EpicToast");
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}

// Proj_sec: more proj 
function changeProj() {
    var fh = document.getElementById("switchProj");
    if (fh.innerHTML == "<b>(+5) More</b>") {
        fh.innerHTML = "<b> Collapse <b>";
    } else {
        fh.innerHTML = "<b>(+5) More</b>";
    }
}

// Myblog_sec: more blog
function change() {
    var fh = document.getElementById("OpenBlog");
    if (fh.innerHTML == "<b>(+5) More</b>") {
        fh.innerHTML = "<b> Collapse <b>";
    } else {
        fh.innerHTML = "<b>(+5) More</b>";
    }
}

// Contact_sec:  more social points 
function minus() {
    if (document.getElementById("SocialPlus").className == "fas fa-plus-circle") {
        document.getElementById("SocialPlus").className = "fas fa-minus-circle";
    } else if (document.getElementById("SocialPlus").className == "fas fa-minus-circle") {
        document.getElementById("SocialPlus").className = "fas fa-plus-circle";
    }

}

//Contact_sec: blockquote
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

//Contact_sec: PostMail: mail form website 
// var form_id_js = "javascript_form";

// var data_js = {
//     "access_token": "rv100l8ny1nnhxkp8z8lte1z"
// };

// function js_onSuccess() {
//     window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
// }

// function js_onError(error) {
//     window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
// }

// var sendButton = document.getElementById("js_send");

// function js_send() {
//     sendButton.value = 'Whispering…';
//     sendButton.disabled = true;
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if (request.readyState == 4 && request.status == 200) {
//             js_onSuccess();
//         } else
//         if (request.readyState == 4) {
//             js_onError(request.response);
//         }
//     };

//     var subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
//     var message = document.querySelector("#" + form_id_js + " [name='text']").value + " \n\n Name: " + document.querySelector("#" + form_id_js + " [name='client']").value + "\n Email: " + document.querySelector("#" + form_id_js + " [name='reply_to']").value;
//     data_js['subject'] = subject;
//     data_js['text'] = message;
//     var params = toParams(data_js);

//     request.open("POST", "https://postmail.invotes.com/send", true);
//     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//     request.send(params);

//     return false;
// }

// sendButton.onclick = js_send;

// function toParams(data_js) {
//     var form_data = [];
//     for (var key in data_js) {
//         form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
//     }

//     return form_data.join("&");
// }

// var js_form = document.getElementById(form_id_js);
// js_form.addEventListener("submit", function(e) {
//     e.preventDefault();
// });


// //Contact_sec: send anonymous mail 
// var nm;
// var temp1;
// var em;

// function hidename() {
//     nm = document.getElementById('urname');
//     em = document.getElementById('uremail');
//     if (nm.value != null || em.value != null) {
//         nm.value = '';
//         em.value = '';
//     }
// }