console.log('hello from JS');

const saveContactButton = document.getElementById('save-contact');
saveContactButton.addEventListener('click', async () => {
    const titleValue = document.getElementById('titleInput').value;
    const imageUrlValue = document.getElementById('imageUrlInput').value;

    const requestBody = {
        title: titleValue,
        imageUrl: imageUrlValue,
    };
    console.log('requestBody', requestBody);
    try {
        const response = await fetch('http://localhost:5000/contacts', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await response.json()

        console.log('responseBody', body);
    } catch (error) {
        console.log('error', error);
    }

});

const contactTable = document.getElementById('contactTable');
