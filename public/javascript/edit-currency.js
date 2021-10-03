async function editFormHandler(event) {
    event.preventDefault();

    const currency = document.querySelector('input[name="currency"]').value.trim();
    const currency_name = document.querySelector('input[name="currency_name"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/currencies/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            currency,
            currency_name,
            price
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/portfolio');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-currency-form').addEventListener('submit', editFormHandler);