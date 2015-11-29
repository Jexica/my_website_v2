// This file must be loaded after jQuery, as it depends on it
jQuery('#form-submit-button').on('click', function() {
    submitForm();
});

function submitForm() {
    var data = {
        'name': document.contact.name.value,
        'email': document.contact.email.value,
        'message': document.contact.message.value
    };

    jQuery
        .post('send-mail.php', data)
        .done(onSubmitSuccess)
        .fail(onSubmitFailure);
}

function onSubmitSuccess() {
    alert("Thank you for your message,\nI will get back to you as soon as possible!");
    document.contact.reset();
}

function onSubmitFailure(promise) {
    var response = JSON.parse(promise.responseText);
    alert(response['msg']);
}
