const login_form = document.getElementById("login-form");

login_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let login_info = extractFormData(login_form);

  console.log("login", login_info);
});

// METHODS -----------------------------------------
function extractFormData(form) {
  //   create form data instance
  let form_data = new FormData(form);

  //   save extracted details
  let prayer_group_info = {};

  //   extract details from form data
  for (pair of form_data.entries()) {
    prayer_group_info[pair[0]] = pair[1];
  }

  return prayer_group_info;
}
