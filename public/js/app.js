const API_KEY = '';
const URL = 'https://emoji-api.com/emojis';
const contentEmojis = document.getElementById('emojis');
const input = document.getElementById('write');

async function getEmojis() {
    return await fetch(`${URL}?access_key=${API_KEY}`)
        .then(response => response.json())
        .then(json => loadEmojis(json))
    ;
}


function loadEmojis(emojis) {
    if (emojis) {
        clearContentEmojis();
        emojis.map(emoji => {
            let a = document.createElement("a")
            a.id = emoji.slug;
            a.href = "#";
            a.onclick = () => input.value += a.textContent;
            a.append(emoji.character)
            contentEmojis.append(a)
        })
    }
}

function showEmojis() {
    if (contentEmojis.style.display === "none") contentEmojis.style.display = ''
    else contentEmojis.style.display = 'none'
}

function typing(data) {
    if (data.value !== "" && data.value.length > 3) {
        searchEmoji(data.value).then(res => {
            clearContentEmojis();
            res.map(emoji => {
                let a = document.createElement("a")
                a.id = emoji.slug;
                a.href = "#";
                a.onclick = () => input.value += a.textContent;
                a.append(emoji.character)
                contentEmojis.append(a)
            });
        });
    }
}

function clearInput() {
    input.value = '';
    document.getElementById('search_emoji').value = '';
    clearContentEmojis();
}

function clearInputAfeterEmoji() {
    input.value = '';
}

function clearContentEmojis() {
    contentEmojis.innerHTML = '';
}

async function getEmojiByName(param) {
    return await fetch(`${URL}/${param}?access_key=${API_KEY}`)
        .then(response => response.json())
        .then(json => loadEmojis(json))
    ;
}

async function searchEmoji(param) {
    return fetch(`${URL}?search=${param}&access_key=${API_KEY}`)
        .then(response => response.json())
        .catch(error => console.error(error))
    ;
}

function showSearchEmoji() {
    if (search_emoji.style.display === "none") search_emoji.style.display = ''
    else search_emoji.style.display = 'none'
}