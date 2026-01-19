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

console.table(teamMembers);

//* DOM Element
const membersContainer = document.getElementById("members-row");

// Per ogni membro nell'array inserisco in pagina la card completa
for (const member of teamMembers) {
  // Destructuring
  const { name, role, email, img } = member;
  membersContainer.innerHTML += `
<div class="col">
    <div class="member-card text-white d-flex">
        <img src="./${img}" alt="Crew Member" />
        <div class="infos ps-3 d-flex flex-column justify-content-evenly">
            <h6 class="mb-0 fw-bold">${name.toUpperCase()}</h6>
            <div>${role}</div>
            <a class="text-decoration-none" href="mailto:${email}">${email}</a>
        </div>
    </div>
</div>`;
}
