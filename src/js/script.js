function findAll() {

    $.ajax({
        type: "GET",
        url: 'http://localhost:8000/users',
        headers:{
            Authorization: 'Bearer ' + accessToken
        },
        success: function (data) {
            display(data);
        }
        ,
        error: function (error) {
            console.log(error);
            alert("không có quyền");
        }

    });
}

function display(data) {
    let show = document.getElementById('list');
    console.log(data);
    let str = "";
    for (let i = 0; i < data.length; i++) {

        str += `<tr>
                    <td>${i + 1}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].password}</td>
                    <td>${data[i].enabled}</td>
                    <td>${data[i].roles.id}</td>
                    <td><button onclick="editForm(${data[i].id})" data-toggle="modal" data-target="#editForm">Edit</button></td>
                    <td><button onclick="deleteStudent(${data[i].id})">Delete</button></td>
                </tr>`
        show.innerHTML = str;
    }

}

function getDataFromFacebook() {
    FB.api(
        '/me',
        'GET',
        {"fields":"email"},
        function(response) {
            console.log(response);
            signUpWithFaceBook(response);

        }
    );
}