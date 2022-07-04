let accessToken = "";
let str = "";

function login() {
    let formData = new FormData(document.getElementById('formLogin'));


    let account = {
        username: formData.get('user'),
        password: formData.get('pass'),
    }
    console.log(account);
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: 'http://localhost:8000/login',
        data: JSON.stringify(account),
        success: function (data) {
            console.log("success");
            accessToken = data.accessToken;
            checkLogin();

        }
        ,
        error: function (error) {
            console.log(error);
            alert(error.responseText);
        }

    });
}


function checkLogin() {
    if(accessToken == ""){
        str = `  <div class="nav-item dropdown">
                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4">Login</a>
                <div class="dropdown-menu action-form">
                    <form id="formLogin">
                        <p class="hint-text">Sign in with your social media account</p>
                        <div class="form-group social-btn clearfix">
<!--                            <a  class="btn btn-secondary facebook-btn float-left" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false"><i class="fa fa-facebook"></i>-->
<!--                                Facebook</a>-->
                                <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="false"></div>
                            <a href="#" class="btn btn-secondary twitter-btn float-right"><i class="fa fa-twitter"></i>
                                Twitter</a>
                        </div>
                        <div class="or-seperator"><b>or</b></div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="user" name="user" placeholder="Username"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="pass" name="pass" placeholder="Password"
                                   required="required">
                        </div>

                    </form>
                    <input type="submit" class="btn btn-primary btn-block" onclick="login()" value="Login">

                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" data-toggle="dropdown" class="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
                <div class="dropdown-menu action-form">
                    <form id="formSignup">
                        <p class="hint-text">Fill in this form to create your account!</p>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" id="username" name="username"
                                   required="required">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" id="password"
                                   name="password" required="required">
                        </div>
                        <div class="form-group">
                            <label class="form-check-label"><input type="checkbox" required="required"> I accept the <a
                                    href="#">Terms &amp; Conditions</a></label>
                        </div>
                    </form>
                    <input type="submit" class="btn btn-primary btn-block" onclick="signUp()" value="Sign up">

                </div>
            </div>`
    }
    if(accessToken != ""){
        str = `<div class="nav-item dropdown">
                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4" onclick="logout()">Logout</a>
           
            </div>`;

    }


    document.getElementById("login-logout").innerHTML = str;
}


function logout() {
    accessToken = "";
    checkLogin();
    document.getElementById("list").innerHTML = "";
}
