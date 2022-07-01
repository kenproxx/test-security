function signUp() {
    let formData = new FormData(document.getElementById('formSignup'));



    let account = {
        username: formData.get('username'),
        password: formData.get('password'),
        confirmPassword: formData.get('password')
    }
    console.log(account);
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: 'http://localhost:8000/register',
        data: JSON.stringify(account),
        success: function () {
            console.log("success");
           alert("Register success");

        }
        ,
        error: function (error) {
            console.log(error);
            alert(error.responseText);
        }

    });
}