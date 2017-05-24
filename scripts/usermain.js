CB.CloudApp.init(env.CB_app_id,env.CB_client_key);
let user = new CB.CloudUser();
function signUp(form){
  $('.form-error-text').html();
  if ($(form.username).val() === "" || $(form.password).val() === "" || $(form.confirm_pass).val() === ""){
    if ($(form.username).val() === ""){
      $('input[name="username"]').css("border","1.5px solid red");
    };
    if ($(form.password).val() === ""){
      $('input[name="password"]').css("border","1.5px solid red");
    };
    if ($(form.confirm_pass).val() === ""){
      $('input[name="confirm_pass"]').css("border","1.5px solid red");
    };
    $('.form-error-text').html("You must fill in all inputs.")
  } else {
    if (form.password.value === form.confirm_pass.value){
      user.set('username',form.username.value);
      user.set('password',form.password.value);
      if (form.email.value === ""){
        user.set('email',"undefined@zero.null");
      } else {
        user.set('email',form.email.value);
      };
      user.signUp({
        success: function(new_user){
          window.location.replace("main-nav-page.html");
        },
        error: function(error){
          $('.form-error-text').html(error.response.data.error);
        }
      });
    } else {
      $('.form-error-text').html("Your two password inputs do not match.");
    };
  };
};
function logIn(form){
  $('.form-error-text').html();
  if ($(form.username).val() === "" || $(form.password).val() === ""){
    if ($(form.username).val() === ""){
      $('input[name="username"]').css("border","1.5px solid red");
    };
    if ($(form.password).val() === ""){
      $('input[name="password"]').css("border","1.5px solid red");
    };
    $('.form-error-text').html("You must fill in all inputs.");
  } else {
    user.set('username',form.username.value);
    user.set('password',form.password.value);
    user.logIn({
      success: function(new_user){
        window.location.replace("views/main.html");
      },
      error: function(error){
        $('.form-error-text').html(error.response.data.error);
      }
    });
  };
};
function logOut(){
  CB.CloudUser.current.logOut({
    success: function(new_user){
      window.location.replace("../login.html");
    },
    error: function(error){
      console.log(error.response.data.error);
    }
  });
};
if (CB.CloudUser.current !== null){
  logOut();
};
