function novaSenha(){
    window.location.href = "novaSenha.html"
}

function verificar() {
    const inputText = document.getElementById('email').value.trim();
    const modal = document.getElementById('modal');
    const emailInput = document.getElementById('email');

    if (inputText !== '') {
        modal.style.display = 'flex';
        emailInput.setCustomValidity('');
        return true
    } else {
        document.getElementById('email').setCustomValidity('Preencha este campo');
                return false; 
    }
}
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
});