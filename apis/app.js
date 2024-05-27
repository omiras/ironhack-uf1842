//Get elements from DOM

const gitHubUsername = document.getElementById("username");
const getInfoBtn = document.querySelector("button");
const tdArray = document.querySelectorAll("td");
const profileImg = document.querySelector('img');
const linkGitHub = document.createElement("a");

//Function to fetch infor from API
const fetchUserData = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    console.log('data: ', data);
    console.log(tdArray);
    tdArray[0].textContent = data.name;
    tdArray[1].textContent = data.bio;
    profileImg.src = data.avatar_url;
//Making sure to remove link element before populating it again
    if (linkGitHub.textContent.length > 0) {
        linkGitHub.remove();
    }
    tdArray[3].appendChild(linkGitHub);
    linkGitHub.href = data.html_url
    ;
    linkGitHub.textContent = data.html_url;
    linkGitHub.target = '_blank';
};

//Add eventListener to button
getInfoBtn.addEventListener("click", () => fetchUserData(gitHubUsername.value));
