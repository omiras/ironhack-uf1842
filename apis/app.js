//Get elements from DOM

const gitHubUsername = document.getElementById("username");
const getInfoBtn = document.querySelector("button");
const tdArray = document.querySelectorAll("td");
const profileImg = document.querySelector("img");
const linkGitHub = document.createElement("a");
const div = document.querySelector("div");
const errorMessage = document.createElement("p");
//Function to fetch infor from API
const fetchUserData = async (user) => {
  try {
    errorMessage.textContent = "";
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok) {
      //Reset table
      tdArray[0].textContent = "";
      tdArray[1].textContent = "";
      profileImg.src = "";
      linkGitHub.textContent = "";
      //Show error message
      div.appendChild(errorMessage);
      errorMessage.textContent = "An error occurred while processing the user search. Probably nonexistent user.";
      errorMessage.style.color = "red";
      throw new Error("Network response not ok");
    }
    const data = await response.json();
    console.log("data: ", data);

    console.log(tdArray);
    tdArray[0].textContent = data.name;
    tdArray[1].textContent = data.bio;
    profileImg.src = data.avatar_url;
    //Making sure to remove link element before populating it again
    if (linkGitHub.textContent.length > 0) {
      linkGitHub.remove();
    }
    tdArray[3].appendChild(linkGitHub);
    linkGitHub.href = data.html_url;
    linkGitHub.textContent = data.html_url;
    linkGitHub.target = "_blank";
  } catch (error) {
    console.log("Fetch error: ", error);
  }
};

//Add eventListener to button
getInfoBtn.addEventListener("click", () => fetchUserData(gitHubUsername.value));
