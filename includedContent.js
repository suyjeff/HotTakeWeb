// Make buttons for each team's chat
let teams = ["Minnesota Vikings", "New York Giants", "New England Patriots", "New York Jets"
            , "Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills",
            "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns",
            "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers",
            "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs",
            "Las Vegas Raiders", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins",
            "New Orleans Saints", "Philadelphia Eagles", "Pittsburgh Steelers", "San Francisco 49ers",
            "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington"];

let teamColors = {
    ARI: ["#97233F", "#FFB612"],
    ATL: ["#A71930", "#000000"],
    BAL: ["#241773", "#9E7C0C"],
    BUF: ["#00338D", "#C60C30"],
    CAR: ["#0085CA", "#101820"],
    CHI: ["#0B162A", "#C83803"],
    CIN: ["#FB4F14", "#000000"],
    CLE: ["#311D00", "#FF3C00"],
    DAL: ["#003594", "FFFFFF"],
    DEN: ["#FB4F14", "#002244"],
    DET: ["#0076B6", "#B0B7BC"],
    GB: ["#203731", "#FFB612"],
    HOU: ["#03202F", "#A71930"],
    IND: ["#002C5F", "#A2AAAD"],
    JAX: ["#006778", "#D7A22A"],
    KC: ["#E31837", "#FFB81C"],
    LAC: ["#FFC20E", "#0080C6"],
    LA: ["#003594", "#FFA300"],
    MIA: ["#008E97", "#FC4C02"],
    MIN: ["#4F2683", "#FFC62F"],
    NE: ["#002244", "#C60C30"],
    NO: ["#D3BC8D", "#101820"],
    NYG: ["#0B2265", "#A71930"],
    NYJ: ["#125740", "#FFFFFF"],
    LV: ["#000000", "#A5ACAF"],
    PHI: ["#004C54", "#A5ACAF"],
    PIT: ["#FFB612", "#101820"],
    SF: ["#AA0000", "#B3995D"],
    SEA: ["#002244", "#69BE28"],
    TB: ["#D50A0A", "#0A0A08"],
    TEN: ["#0C2340", "#4B92DB"],
    WAS: ["#773141", "#FFB612"]
};

var teamsAbbreviated = ["MIN", "NYG", "NE", "NYJ", "ARI", "ATL", "BAL", "BUF", "CAR", "CHI", "CIN", "CLE", 
                        "DAL", "DEN", "DET", "GB", "HOU", "IND", "JAX", "KC", "LV", "LAC", "LA", "MIA", "NO",
                        "PHI", "PIT", "SF", "SEA", "TB", "TEN", "WAS"];

class ChatTeamButton {
    constructor(index) {
        this.index = index;
        const btn = teamButtons[index];
        btn.addEventListener('click', this);
        this.teamName = btn.firstChild.firstChild.innerHTML;
    }
    handleEvent(event) {
        goToChat(this.teamName);
    }
}

class JoinTeamButton {
    constructor(index) {
        this.index = index;
        const btn = teamButtons[index];
        btn.addEventListener('click', this);
        this.teamName = btn.firstChild.firstChild.innerHTML;
    }
    handleEvent(event) {
        addTeam(this.teamName, this.index);
    }
}

class FriendRequestButton {
    constructor(index) {
        this.index = index;
        const btn = requests[index];
        btn.addEventListener('click', this);
        this.acceptedFriend = btn.innerHTML;
    }
    handleEvent(event) {
        acceptFriend(this.acceptedFriend);
    }
}

class ChatWithFriendsButton {
    constructor(index) {
        this.index = index;
        const btn = chatsWithFriendsButtons[index];
        btn.addEventListener('click', this);
        this.chatId = btn.firstChild.firstChild.innerHTML;
    }
    handleEvent(event) {
        goToChat(this.chatId);
    }
}
                    
// Get live game information from the NFL
function getScore() {
    $.ajax({
        type: "GET",
        url: "https://static.nfl.com/liveupdate/scorestrip/ss.xml",
        success: function(results) {
            console.log("Success");
            displayScore(results)
        },
        error: function(error) {
            console.log(error);
        }
    });
}

// Go to chat if user is signed in
function goToChat(team) {
    var user = firebase.auth().currentUser;
    console.log(user.email);
    console.log(team);
    if (user) {
        setTimeout(() => { location.href= "chatspage.html?frie=" + team.replace(" ", "_"); }, 500);
    }
}