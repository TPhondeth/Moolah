async function newFormHandler(event) {
    event.preventDefault();

    const currency = document.querySelector('input[name="currency"]').value;
    const currency_name = document.querySelector('input[name="currency_name"]').value;

    const response = await fetch(`/api/currencies`, {
        method: 'POST',
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

document.querySelector('.new-currency-form').addEventListener('submit', newFormHandler);