document.addEventListener("click", async (e) => {
  let clicked_ele = e.target;

  if (clicked_ele.id === "join-group-btn") {
    let group_id = window.location.pathname.split("/")[2];

    console.log(group_id);

    let result = await makePostRequest(`/prayer-groups/${group_id}}/join`, {
      group_id,
    });

    console.log("result", result);

    if (result.code === 0 && result.status === "success") {
      // Swal.fire({
      //   title: "Click the Whatsapp Link to complete",
      //   text: `${result.message}`,
      //   icon: "info",
      // });

      Swal.fire({
        icon: "success",
        title: "Join us on WhatsApp",
        text: `${result.message}`,
        footer: `<a href="${result.data.whatsapp_link}" target="blank">${result.data.whatsapp_link}</a>`,
      });
    }
  }
});

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
