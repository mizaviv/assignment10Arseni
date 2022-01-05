function addUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
        if (this.status == 200) {
            setTimeout(() => {
                alert("User added!");
                var el = document.getElementById("form_add");
                if (el) {
                  el.setAttribute("style", "display:none;");
                }
                window.location.href = "/assignment10";
            }, 0);
        } else {
            alert("Cannot add user!");
        }
    }
  };

  let username = "";
  let email = "";
  let password = "";

  var el = document.getElementsByName('username')[0];
  if (el) {
    username = el.value;
  }
  el = document.getElementsByName('email')[0];
  if (el) {
    email = el.value;
  }
  el = document.getElementsByName('password')[0];
  if (el) {
    password = el.value;
  }

  // ?username=${username}&email=${email}&password=${password}
  xhttp.open("POST", `/assignment10/add_user`, true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  const form_body = {
    "username": username, "email": email, "password": password
  }
  xhttp.send(JSON.stringify(form_body));
}

function updateUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4) {
        if (this.status == 200) {
            setTimeout(() => {
                alert("User updated!");
                // Important: PUT - there is 'PUT' method, which cannot be redirect in server to 'GET'
                //            , so the redirect is called by javascript and not from server.
                //    whenever 'POST'/'GET' can redirect to 'GET' from server.
                window.location.href = "/assignment10";
            }, 0);
         } else {
            alert("Cannot update user!");
        }
    }
  };

  var el = document.getElementsByName('username')[1];
  if (el) {
    username = el.value;
  }
  el = document.getElementsByName('email')[1];
  if (el) {
    email = el.value;
  }
  el = document.getElementsByName('password')[1];
  if (el) {
    password = el.value;
  }
  xhttp.open("PUT", `/assignment10/update_user`, true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  const form_body = {
    "username": username, "email": email, "password": password
  }
  xhttp.send(JSON.stringify(form_body));
}

function deleteUser(username) {

  if (confirm(`Sure you want to delete user:${username}!`)) {
      const xhttp = new XMLHttpRequest();

      // Important: Delete - there is 'DELETE' method, which cannot be redirect in server to 'GET'
      //            , so the redirect is called by javascript and not from server.
      //    whenever 'POST'/'GET' can redirect to 'GET' from server.
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4) {
            if (this.status == 200) {
                setTimeout(() => {
                     alert("User deleted!");
                     window.location.href = "/assignment10";
                }, 0);

            } else {
                alert("Cannot delete user!");
            }
        }
      };

      xhttp.open("DELETE", `/assignment10/delete_user?username=${username}`, true);
      xhttp.send();
  }
}

function showAdd() {
  var el = document.getElementById("form_add");
  if (el) {
    el.setAttribute("style", "display:visible;");
  }
  el = document.getElementById("form_update");
  if (el) {
    el.setAttribute("style", "display:none;");
  }
  el = document.getElementsByName('username')[0];
  if (el) {
    el.value = "";
  }
  el = document.getElementsByName('email')[0];
  if (el) {
    el.value = "";
  }
  el = document.getElementsByName('password')[0];
  if (el) {
    el.value = "";
  }
}

function showUpdate(username, email) {
  var el = document.getElementById("form_update");
  if (el) {
    el.setAttribute("style", "display:visible;");
  }
  el = document.getElementById("form_add");
  if (el) {
    el.setAttribute("style", "display:none;");
  }
    el = document.getElementsByName('username')[1];
  if (el) {
    el.value = username;
  }
  el = document.getElementsByName('email')[1];
  if (el) {
    el.value = email;
  }
  el = document.getElementsByName('password')[1];
  if (el) {
    el.value = "";
  }
}

function closeAdd() {
  var el = document.getElementById("form_add");
  if (el) {
    el.setAttribute("style", "display:none;");
  }
}

function closeUpdate() {
  var el = document.getElementById("form_update");
  if (el) {
    el.setAttribute("style", "display:none;");
  }
}