document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if(username === "user@yahoo.com" && password === "123"){
        console.log("Success!");
        let body = document.querySelector("body");

        let toastElem = document.createElement("div");
        toastElem.innerText = "Login successfully!";
        toastElem.classList.add("toast");

        body.appendChild(toastElem);

        setTimeout(() => {
            window.location.href = "secondpage.html";
        }, 1000);

    } else {
        console.log("Invalid credentials!");

        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";


        let parent = document.querySelector(".container")

        let newElem = document.createElement("p")
        newElem.innerText = "Invalid credentials!";
        newElem.style.color = "red";

        parent.appendChild(newElem);


        setTimeout(() => {
            newElem.remove();
        }, 3000);
    }
})