document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    const successMsg = document.getElementById('success-message');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.style.display = 'none';
        successMsg.style.display = 'block';
    });
}); 