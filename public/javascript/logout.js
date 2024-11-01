document.addEventListener("click", async (e) => {
  let clicked_ele = e.target;

  if (clicked_ele.id === "logout-btn") {
    let result = await makePostRequest("/logout", { msg: "logout" });
    console.log("resu", result);

    return;
    if (result.status === "OK" && result.code === 0) {
      window.location.replace("/");
    }
  }
});

// make an http post request using fetch
async function makePostRequest(url, data) {
  let response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  let response_data;
  if (response.ok) {
    response_data = await response.json();
  }

  return response_data;
}
