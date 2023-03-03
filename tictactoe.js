function onePlayer(){
    document.querySelector(".sGButtons").style.display = "none";
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "onePlayer.js";
    head.appendChild(script);
}

function twoPlayers(){
    document.querySelector(".sGButtons").style.display = "none";
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "twoPlayer.js";
    head.appendChild(script);
}

/* document.getElementsByTagName("body")[0].innerHTML = `
<table>
    <tr>
        <td class="cell" id="0"></td>
        <td class="cell" id="1"></td>
        <td class="cell" id="2"></td>
    </tr>
    <tr>
        <td class="cell" id="3"></td>
        <td class="cell" id="4"></td>
        <td class="cell" id="5"></td>
    </tr>
    <tr>
        <td class="cell" id="6"></td>
        <td class="cell" id="7"></td>
        <td class="cell" id="8"></td>
    </tr>
</table>
<div class="endgame">
    <div class="text"></div>
</div>
<div class="startGame">
    <div class="sGButtons"><button onclick="onePlayer()">1 Player</button><button onclick="twoPlayers()">2 Players</button></div>
</div>
<button onclick="startGame()">Replay</button>

<script src="onePlayer.js"></script>`;
 */