CB.CloudApp.init(env.CB_APPID,env.CB_CLIENTKEY);
let user = new CB.CloudUser();
function signUp(form){
  $('.form-error-text').html("");
  $('input').css("border","1px solid gray");
  if ($(form.username).val() === "" || $(form.password).val() === "" || $(form.confirm_pass).val() === "" || $(form.email).val() === ""){
    if ($(form.username).val() === ""){
      $('input[name="username"]').css("border","1.5px solid red");
    };
    if ($(form.password).val() === ""){
      $('input[name="password"]').css("border","1.5px solid red");
    };
    if ($(form.confirm_pass).val() === ""){
      $('input[name="confirm_pass"]').css("border","1.5px solid red");
    };
    if ($(form.email).val() === ""){
      $('input[name="email"]').css("border","1.5px solid red");
    }
    $('.form-error-text').html("You must fill in all inputs.");
  } else {
    if (form.password.value === form.confirm_pass.value){
      user.set('username',form.username.value);
      user.set('password',form.password.value);
      user.set('email',form.email.value);
      user.signUp({
        success: function(new_user){
          window.location.replace("views/main.html");
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
  $('.form-error-text').html("");
  $('input').css("border","1px solid gray");
  if ($(form.username).val() === "" || $(form.password).val() === ""){
    if ($(form.username).val() === ""){
      $('input[name="username"]').css("border","1.5px solid red");
    };
    if ($(form.password).val() === ""){
      $('input[name="password"]').css("border","1.5px solid red");
    };
    $('.form-error-text').html("You must fill in all inputs.");
  } else {
    user.set('username',$(form.username).val);
    user.set('password',$(form.password).val);
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
function resetPassword(form){
  CB.CloudUser.resetPassword($(form.email).val(),{
    success: function(){
      $('.form-error-text').html("Your email has been sent.");
    },
    error: function(error){
      $('.form-error-text').html(error.response.data.error);
    }
  });
};
if (CB.CloudUser.current !== null){
  logOut();
};
