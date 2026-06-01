const button = document.getElementById('find');
const username = document.getElementById('profile-name');
const img = document.getElementById('profile-img');

button.addEventListener('click', () => {
    const input = document.getElementById('search');
    let userinput = input.value;
    
    const requestUrl = `https://api.github.com/users/${userinput}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const data = JSON.parse(this.responseText);
            img.src = data.avatar_url;
            username.textContent = data.name;
            img.style.display = "block";
        }
    }
    xhr.send();
    input.value = "";
});