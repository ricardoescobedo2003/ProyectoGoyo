function addFriend(button) {
    button.textContent = 'Amigo agregado';
    button.disabled = true;
    button.style.backgroundColor = '#555';
}

function removeFriend(button) {
    const card = button.parentElement;
    card.remove();
}
