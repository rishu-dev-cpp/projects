const button = document.getElementById('find');
const username = document.getElementById('profile-name');
const img = document.getElementById('profile-img');
/*

Old method using AJAX

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
*/

// New method
button.addEventListener('click', async () => {
    const input = document.getElementById('search');
    let userinput = input.value;
    
    const requestUrl = `https://api.github.com/users/${userinput}`;

    try {
        const response = await fetch(requestUrl);
        
        if (!response.ok) {
            alert("Sorry! Didn't got the DATA");
            return;
        }

        const data = await response.json();
        
        img.src = data.avatar_url;
        username.textContent = data.name || "No Name Provided";
        img.style.display = "block"; 

    } catch (error) {
        console.error("Error occured:", error);
    }

    input.value = "";
});