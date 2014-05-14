// TODO: refactor common code

$().ready(function() {
    console.log('in ready');
    $('#registerForm').validate({
        rules: {
            username: {
                required: true,
                email: true
            },
            displayname: {
                required: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmpassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: 'Please enter your email',
                email: 'Please enter valid email address'
            },
            displayname: {
                required: 'Please enter your display name'
            },
            password: {
                required: 'Please enter a password',
                minlength: 'Password must be at least 5 characters'
            },
            confirmpassword: {
                required: 'Please confirm password',
                minlength: 'Confirm password must be at least 5 characters',
                equalTo: 'Passwords must match'
            }
        }
    });
    
    $('#loginForm').validate({
        rules: {
            username: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            username: {
                required: 'Please enter your email',
                email: 'Please enter valid email address'
            },
            password: {
                required: 'Please enter a password',
                minlength: 'Password must be at least 5 characters'
            }
        }
    });
});