const tbody = document.querySelector('#tbody')


function updatetable() {
const computers = JSON.parse(localStorage.getItem('computers'))
computers.forEach(comp => {
    tbody.innerHTML += ` <tr>
        <td>${comp.id}</td>
        <td>${comp.mark}</td>
        <td><img class="w-50" src="${comp.img}" alt=""></td>
        <td>
            <button class="btn btn-danger">delete</button>
            <button class="btn btn-primary">change</button>
        </td>
    </tr>
`
});

}

updatetable()
