document.getElementById('contact-button').addEventListener('click', function() {
    var contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
});