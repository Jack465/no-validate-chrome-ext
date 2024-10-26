const form_tags = document.getElementsByTagName("form");

if(form_tags) {
    for(var i = 0; i < form_tags.length; i++) {
        form_tags[i].noValidate = true;
    }
}

const number_inputs = document.querySelectorAll("input[type=number]");
if(number_inputs) {
    for(var i = 0; i < number_inputs.length; i++) {
        number_inputs[i].type = "text";
    }
}