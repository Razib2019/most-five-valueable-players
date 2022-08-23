const playerList = [];

function display(selectedPlayers) {
    const playerNameList = document.getElementById('selceted-player');

    if (playerList.length <= 5) {
        playerNameList.innerHTML = '';

        let count = 0;
        for (i = 0; i < playerList.length; i++) {
            const name = playerList[i].playerName;

            count++;

            const tr = document.createElement("tr");
            tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${name}</td>
            `;

            playerNameList.appendChild(tr)
        }
    }
}

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
