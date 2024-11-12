let members = [];

const memberForm = document.getElementById('memberForm');
const memberList = document.getElementById('memberList');

function renderMembers() {
    memberList.innerHTML = '';
    members.forEach((member, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.age}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>${member.address}</td>
            <td>${member.joiningDate}</td>
            <td>${member.feesStatus}</td>
            <td><button class="delete-btn" onclick="deleteMember(${index})">Delete</button></td>
        `;
        memberList.appendChild(row);
    });
}

function addMember(name, age, email, phone, address, joiningDate, feesStatus) {
    members.push({ name, age, email, phone, address, joiningDate, feesStatus });
    renderMembers();
}

function deleteMember(index) {
    members.splice(index, 1);
    renderMembers();
}

memberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('memberName').value;
    const age = document.getElementById('memberAge').value;
    const email = document.getElementById('memberEmail').value;
    const phone = document.getElementById('memberPhone').value;
    const address = document.getElementById('memberAddress').value;
    const joiningDate = document.getElementById('joiningDate').value;
    const feesStatus = document.getElementById('feesStatus').value;

    addMember(name, age, email, phone, address, joiningDate, feesStatus);
    memberForm.reset();
});
