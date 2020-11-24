const bearer_token = "";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var storylines = JSON.parse(this.responseText);
        console.log(storylines);

        for (var i=0; i<storylines.length; i++) {
            createStoryline(storylines[i]);
        }

    }
};

xhttp.open("GET", "https://api.twitter.com/2/tweets/search/recent?query=", true);
xhttp.setRequestHeader("authorization", "Bearer ${bearer_token}");
xhttp.send();

function createStoryline(storyline) {
    var story_item = document.createElement("div");
    story_item.setAttribute("class", "storyline-item");
    story_item.setAttribute("id", storyline.id);
    var story_text = document.createElement("span");
    story_text.innerText = storylines.text;
    console.log(storyline.text);
    story_item.append(story_text);
    document.getElementById("storyline-list").append(story_item);
}

