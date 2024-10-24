const login_form = document.getElementById("login-form");

login_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let login_info = extractFormData(login_form);

  let isInvalid = validateLoginDetails(login_info);

  if (isInvalid.status === true) {
    displayError(isInvalid);
    return;
  }

  return;
  let result = await makePostRequest("/login", login_info);

  if (result.status === "success" && result.code === 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${"Success"}`,
      text: `${"Account created successfully!"}`,
      showConfirmButton: false,
      timer: 3500,
    });

    setTimeout(() => {
      window.location.href = "/login";
    }, 3500);
  }
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

function validateLoginDetails(signup_details) {
  let error = { status: false, title: "", details: [] };

  //   loop through data and check if there are empty strings
  for (key in signup_details) {
    console.log(signup_details[key]);
    if (signup_details[key] === "") {
      error.status = true;
      error.title = "Missing Require Fields!";
      error.details.push(`${key} is required`);
    }
  }

  return error;
}

// display error
function displayError(error) {
  Swal.fire({
    position: "center",
    icon: "error",
    title: `${error.title}`,
    text: `${error.details}`,
    showConfirmButton: false,
    timer: 2500,
  });
}

// make post request to backend
async function makePostRequest(url, data_to_send) {
  let response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data_to_send),
  });

  let data = await response.json();

  return data;
}
