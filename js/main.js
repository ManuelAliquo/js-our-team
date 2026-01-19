const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

//* DOM Elements
const membersContainer = document.getElementById("members-row");
const newMemberForm = document.getElementById("new-member");
const nameInput = document.getElementById("new-name");
const roleInput = document.getElementById("new-role");
const emailInput = document.getElementById("new-email");
const imgInput = document.getElementById("new-img");

// Per ogni membro nell'array inserisco in pagina la card completa
for (const member of teamMembers) {
  // Destructuring
  const { name, role, email, img } = member;
  membersHtml(name, role, email, img);
}

// Listener per form con prevent refresh
newMemberForm.addEventListener("submit", function (event) {
  event.preventDefault();

  teamMembers.push({
    name: nameInput.value,
    role: roleInput.value,
    email: emailInput.value,
    img: imgInput.value,
  });

  membersHtml(nameInput.value, roleInput.value, emailInput.value, imgInput.value);
});

function membersHtml(memberName, memberRole, memberEmail, memberImg) {
  membersContainer.innerHTML += `
<div class="col">
    <div class="member-card text-white d-flex">
        <img src="./${memberImg}" alt="Crew Member" />
        <div class="infos ps-3 d-flex flex-column justify-content-evenly">
            <h6 class="mb-0 fw-bold">${memberName.toUpperCase()}</h6>
            <div>${memberRole}</div>
            <a class="text-decoration-none" href="mailto:${memberEmail}">${memberEmail}</a>
        </div>
    </div>
</div>`;
}
