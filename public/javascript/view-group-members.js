let modal_body = document.getElementById("modal-body");
let viewMemberModalLabel = document.getElementById("viewMemberModalLabel");

document.addEventListener("click", async (e) => {
  let clicked_ele = e.target;

  if (clicked_ele.id === "view-group-member-btn") {
    console.log("working", clicked_ele.getAttribute("data-uid"));

    let event_id = clicked_ele.getAttribute("data-group-id");

    try {
      let response = await fetch(`/prayer-groups/${event_id}`);
      let result = await response.json();

      if (result.status === "success" && result.code === 0) {
        console.log(result);

        viewMemberModalLabel.innerText = `${result.data.name} Members`;

        if (result.data.members.length > 0) {
          let members = result.data.members;
          let members_table;

          modal_body.insertAdjacentHTML(
            "beforeend",
            `<table class="table table-dark">
          <thead>
            <tr>
              <th scope="col" class="text-success">#</th>
              <th scope="col" class="text-success">NAMES</th>
              <th scope="col" class="text-success">CONTACTS</th>
            </tr>
          </thead>
          <tbody id="table-body">
           

          </tbody>
          </table>`
          );

          members.forEach((member, index) => {
            members_table = `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${member.first_name} ${member.last_name}</td>
              <td>${member.phone_number}</td>
            </tr>`;

            document
              .getElementById("table-body")
              .insertAdjacentHTML("beforeend", members_table);
          });
        } else {
          modal_body.insertAdjacentHTML(
            "beforeend",
            `<div class="text-center"> <div><i class="bi bi-emoji-frown-fill text-muted" style="font-size: 15em;"></i></div> <p>No member</p></div>`
          );
        }

        // show modal
        $("#viewMemberModal").modal("show");

        // clear modal body when modal is closed
        $("#viewMemberModal").on("hidden.bs.modal", function (e) {
          if (modal_body.children) {
            modal_body.innerHTML = "";
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
});
