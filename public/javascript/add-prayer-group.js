let add_prayer_group_form = document.getElementById("prayer-group-form");

console.log(add_prayer_group_form);

add_prayer_group_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let prayer_group_info = extractFormData(add_prayer_group_form);

  console.log(prayer_group_info);

  //   send data to backend
  let response = fetch("/add-prayer-group", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(prayer_group_info),
  });
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
