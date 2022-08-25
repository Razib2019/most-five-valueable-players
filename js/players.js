const playerList = [];

// Function For Set Element To The Right Side Selected Player Section 
function display(selectedPlayers) {

    const playerNameList = document.getElementById('selceted-player');

    playerNameList.innerHTML = '';

    for (let i = 0; i < selectedPlayers.length; i++) {
        const name = playerList[i].playerName;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${name}</td>
            `;
        playerNameList.appendChild(tr)
    }
}

// Function For get Element from card
function addToSelectedPlayers(element) {
    const playerName = element.parentNode.children[1].innerText;

    const playerObj = {
        playerName: playerName
    }

    if (playerList.length < 5) {
        playerList.push(playerObj);
        element.disabled = true;
    }

    else {
        alert('Do not add more than 5 players!!');
    }

    document.getElementById('total-added-player').innerText = playerList.length;

    display(playerList);
}
