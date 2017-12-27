// on document ready
// https://stackoverflow.com/questions/3698200/window-onload-vs-document-ready
$(() => {
    $('#create-burger').on('click', (e) => {
        e.preventDefault();

        var newBurger = {
            name: $('#burger-name').val().trim(),
            devoured: 0
        };

        // send the POST request
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log('New burger created!');

            // reload the page to get the udpated list
            location.reload();
        });
    });

    $('#devour').on('click', () => {
        // send the PUT request
        $.ajax('/api/burgers/' + $(this).attr('data-id'), {
            type: 'PUT',
            data: { devoured: 1 }
        }).then(() => {
            console.log('Changed devoured to', true);

            //reload the page to get the updated list
            location.reload();
        });
    });
});