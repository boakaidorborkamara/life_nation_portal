let add_prayer_group_form = document.getElementById("prayer-group-form");

console.log(add_prayer_group_form);

add_prayer_group_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let prayer_group_info = extractFormData(add_prayer_group_form);

  // if(!prayer_group_info.name && !prayer_group_info.description && !prayer_group_info.region && !prayer_group_info.whatsapp_link){

  // }

  console.log(prayer_group_info);

  //   send data to backend
  let response = await fetch("/add-prayer-group", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prayer_group_info),
  });

  let result = await response.json();

  if (result.status === "success" && result.code === 0) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${"Success"}`,
      text: `${"Group added successfully!"}`,
      showConfirmButton: false,
      timer: 3500,
    });

    setTimeout(() => {
      window.location.href = "/prayer-groups";
    }, 3500);
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: `${"Unexpected Error Occured!"}`,
      text: `${"Please refresh or contact admin if the error persist."}`,
      showConfirmButton: false,
      timer: 3500,
    });
  }
});

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
