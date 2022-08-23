const playerlist = [];

function display(players) {
    const listContainer = document.getElementById('selceted-player');
    listContainer.innerText = '';
    for (i = 0; i < players.length; i++) {
        /* 
                if (playerArray.length < 5) {
                playerArray.push(playerObj);
                element.disabled = true;
            }
        
            else {
                alert('Please dont add more than 5 players!!')
            }
                */
        if (i === 5) {
            alert('You Can not add more than 5 player');
            return;
        }
        const name = playerlist[i];

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}.</th>
        <td>${name}</td>
        `;
        listContainer.appendChild(tr);
    }
}

function addToSelectedPlayers(element) {
    const playerName = element.parentNode.children[1].innerText;
    playerlist.push(playerName);
    document.getElementById('total-added-player').innerText = playerlist.length;
    display(playerlist);
}