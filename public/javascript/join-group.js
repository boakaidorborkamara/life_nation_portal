document.addEventListener("click", async (e) => {
  let clicked_ele = e.target;

  if (clicked_ele.id === "join-group-btn") {
    let group_id = window.location.pathname.split("/")[2];
    let user_id = "990kkl-0kkjk0-lkl7";
    console.log(group_id);

    let result = await makePostRequest(`/prayer-groups/${group_id}}/join`, {
      group_id,
      user_id,
    });

    console.log("result", result);
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
