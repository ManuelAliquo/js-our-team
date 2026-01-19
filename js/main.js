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
  membersContainer.innerHTML += `
<div class="col">
    <div id="member-card" class="text-white d-flex">
        <img src="./${member.img}" alt="Crew Member" />
        <div class="ps-3 d-flex flex-column justify-content-center">
            <h5 class="mb-0 fw-bold">${member.name.toUpperCase()}</h5>
            <div>${member.role}</div>
            <a class="text-decoration-none" href="mailto:${member.email}">${member.email}</a>
        </div>
    </div>      
</div>`;
}
