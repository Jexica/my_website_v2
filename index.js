// This file must be loaded after jQuery, as it depends on it

// Configure the LightBox widget
lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    wrapAround: true,
    fadeDuration: 300,
    resizeDuration: 500
});

// Listener for the "Show more" button (portfolio)
jQuery('#show-more-button').on('click', function showMoreListener() {
    jQuery('#show-more-container').hide();
    jQuery('.portfolio-extra-row').fadeIn();
});

// Set listener for the contact form's submit button
jQuery('#form-submit-button').on('click', submitForm);

/**
 * Called after the form was successfully submitted
 */
function onSubmitSuccess() {
    alert("Thank you for your message,\nI will get back to you as soon as possible!");
    document.contact.reset();
}

/**
 * Called when the form failed to load
 *
 * @param promise Promise object that contains the server response
 */
function onSubmitFailure(promise) {
    var response = JSON.parse(promise.responseText);
    alert(response['msg']);
}

/**
 * Submits the contents of the contact form
 */
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

/**
 * Capture all the navbar links to animate scrolling into the section.
 * Adapted from https://gist.github.com/omurphy27/3b56f49f5054a250dbb2
 */
$(".navbar-nav li a[href^='#']").on('click', function onNavbarItemClick(e) {
    // If no hash name is specified we scroll to the top
    var scrollTo = this.hash ? $(this.hash).offset().top : 0;

    // Prevent default anchor click behavior, we will control it
    e.preventDefault();

    // Store the hash for later use
    var hash = this.hash;

    // Scroll the element into view, animated
    $('html, body').animate({
        scrollTop: scrollTo
    }, 300, function () {
        // Animation finished, add the hash to the URL as normal
        window.location.hash = hash;
    });
});
