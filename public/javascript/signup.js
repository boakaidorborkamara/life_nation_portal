const dom = {
  signup_form: document.getElementById("signup-form"),
  full_name: document.getElementById("full-name"),
  gender: document.getElementById("gender"),
  phone_number: document.getElementById("password"),
  role: document.querySelectorAll("input[name='role"),
  pin_container: document.getElementById("pin-container"),
  pin: document.getElementById("pin"),
  submit_btn: document.getElementById("submit-btn"),
};

// toggle verification field
toggleVerificationField();

dom.signup_form.addEventListener("change", (e) => {
  let isError = false;
  let form_data = extractFormData(dom.signup_form);

  // info about changed element
  let changed_element = e.target;
  let changed_element_name = changed_element.name;
  let changed_element_value = changed_element.value;
  let changed_element_value_count = changed_element_value.trim().length;
  console.log(changed_element_value_count);

  // validate and display error message as user change values in the form
  if (changed_element_name === "full_name") {
    // amount of words entered in the full name field
    let words_count_in_fullname = changed_element_value
      .trim()
      .split(" ").length;

    switch (words_count_in_fullname) {
      case 1:
        isError = true;

        // create error message
        let error_message = "Please enter your fullname.";
        // display error message
        error.displayFormError(
          changed_element,
          error_message,
          "full-name-error-text"
        );

        break;
      default:
        error.hideFormError("full-name-error-text");
        break;
    }
  } else if (changed_element_name === "gender") {
    let selected_gender = changed_element_value;
    switch (changed_element_value) {
      case "Select Gender":
        error.displayFormError(
          changed_element,
          "Gender is required, choose your gender.",
          "gender-error-text"
        );
        isError = true;
        break;
      default:
        error.hideFormError("gender-error-text");
        break;
    }
  } else if (changed_element_name === "phone_number") {
    console.log("changes ele is phone number");
    switch (changed_element_value_count) {
      case 0:
        error.displayFormError(
          changed_element,
          "Phone number is required",
          "phone-number-error-text"
        );
        break;
      default:
        error.hideFormError("phone-number-error-text");
        break;
    }
  } else if (changed_element_name === "password") {
    switch (changed_element_value.trim().length) {
      case 0:
        error.displayFormError(
          changed_element,
          "Password is required",
          "password-number-error-text"
        );
        break;
      default:
        error.hideFormError("password-error-text");
        break;
    }
  } else if (changed_element_name === "role") {
    console.log("role was clicked", changed_element_value);

    switch (changed_element_value.trim().length) {
      case 0:
        error.displayFormError(
          changed_element,
          "Select a role.",
          "role-error-text"
        );
        break;
      default:
        error.hideFormError("role-error-text");
        break;
    }
  }

  // validate phone number pattern
  if (
    changed_element_name === "phone_number" &&
    changed_element_value_count > 0
  ) {
    console.log("string dey");
    let user_phone_number = changed_element_value;
    const liberianPhoneNumberPattern = /^(?:\0|0)?\s?(77|88|55)\d{7}$/;
    let isValidPhoneNumber = liberianPhoneNumberPattern.test(user_phone_number);

    console.log(isValidPhoneNumber);

    if (!isValidPhoneNumber) {
      error.displayFormError(
        changed_element,
        "Not a valid format, phone number must start with 0",
        "phone-number-error-text"
      );

      return;
    }
  }

  // disabled or enable submit button based on the validation result
  if (
    form_data.full_name !== "" &&
    form_data.gender !== "Select Gender" &&
    form_data.phone_number !== "" &&
    form_data.password !== "" &&
    form_data.role !== ""
  ) {
    // check if user selected admin as their prefer role
    if (form_data.role === "admin") {
      // diable submit btn if active
      dom.submit_btn.setAttribute("disabled", "true");

      // check if pin field value was provided
      if (form_data.pin !== "") {
        // check error
        if (isError === false) {
          dom.submit_btn.removeAttribute("disabled");
        }
      }
    } else if (form_data.role === "member") {
      // check error
      if (isError === false) {
        dom.submit_btn.removeAttribute("disabled");
      }
    }
  } else {
    dom.submit_btn.setAttribute("disabled", "true");
  }
});

dom.signup_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let signup_info = extractFormData(dom.signup_form);

  // format signup info
  // delete admin verification pin when user select member as their prefer role
  if (signup_info.role === "member") {
    delete signup_info.pin;
  }

  // extract first name and last name from full name
  if (signup_info.full_name) {
    let full_name_array = signup_info.full_name.split(" ");

    if (full_name_array.length === 2) {
      // extract first and last names if user didn't provide a middle name
      signup_info["first_name"] = full_name_array[0];
      signup_info["last_name"] = full_name_array[1];
    } else if (full_name_array.length === 3) {
      // extract first and last names if user provided a middle name
      signup_info["first_name"] = full_name_array[0];
      signup_info["last_name"] = full_name_array[2];
    }

    // delete full name field from signup_info
    delete signup_info.full_name;
  }

  console.log("signup_info", signup_info);

  try {
    let result = await makePostRequest("/signup", signup_info);

    // console.log("result", result);

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
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `${result.message}`,
        text: `${"Check & try again or contact Admin"}`,
        showConfirmButton: false,
        timer: 3500,
      });

      setTimeout(() => {
        dom.pin.value = " ";
        dom.submit_btn.setAttribute("disabled", "true");
      }, 3500);
    }
  } catch (err) {
    console.log(err);
  }
});

// METHODS -----------------------------------------
function extractFormData(form) {
  //   create form data instance
  let form_data = new FormData(form);

  //   save extracted details
  let info = {};

  //   extract details from form data
  for (pair of form_data.entries()) {
    info[pair[0]] = pair[1];
  }

  return info;
}

function validateSignupDetails(dom_elements) {
  console.log("dom", dom_elements.full_name.value);
  let error = { status: false, title: "", details: [] };

  let user_input = extractFormData(dom_elements.signup_form);
  console.log("user input", user_input);

  switch (dom_elements) {
    case dom_elements.full_name === "":
      console.log("full name is empty", dom.full_name.value);
      break;
    default:
      console.log("default");
      break;
  }
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

// show field for verificaition pin when admin is selected as a role
function toggleVerificationField() {
  dom.role.forEach((role) => {
    role.addEventListener("change", () => {
      let selected_role = role.value;

      if (selected_role === "admin") {
        dom.pin_container.classList.remove("d-none");
      } else {
        dom.pin_container.classList.add("d-none");
      }
    });
  });
}

let error = (() => {
  // displays error message in form
  function displayFormError(form_element, error_message, error_text_id) {
    // remove any existing error message
    if (document.getElementById(error_text_id)) {
      let existing_error = document.getElementById(error_text_id);
      existing_error.remove();
    }

    // create a new html element
    let error_element = document.createElement("small");

    // error to be displayed in the error element
    let error_text = error_message;

    // add text to content to created  html
    error_element.textContent = error_text;

    // add and id attribute to the created element
    error_element.setAttribute("id", error_text_id);

    // add a class that changes the color of the element
    error_element.classList.add("text-danger");

    // insert the created error element inside the parent of the form element that was changes
    form_element.parentElement.insertAdjacentElement(
      "beforeEnd",
      error_element
    );
  }

  // hide already displayed error
  let hideFormError = (error_text_id) => {
    let error_element = document.getElementById(error_text_id);

    if (error_element) {
      error_element.classList.add("d-none");
    }
  };

  return { displayFormError, hideFormError };
})();
