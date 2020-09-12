const { post } = require("../../controllers/burgers_controller");

$('.submit').on('click', function(event) {
    event.preventDefault();

    var burger_name = {
        burger_name: $('#burg').val().trim(),
    };

        $.ajax('/burger', {
            type: 'POST',
            data: burger_name
        }).then(function() {
            console.log('Created burger');
            location.reload();
        }
    })
})

$('.eatBurg').on('click', function() {
    let id = $(this).data('id');

    let devoured = {
        devoured: true
    }
    
        $.ajax(`/burgers/${id}`, {
            method: 'PUT',
            data: devoured
        }).then(function(data) {
            location.reload();
        })
})