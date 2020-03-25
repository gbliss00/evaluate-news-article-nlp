import {
    checkForUrl
} from "./urlCheck";

async function handleSubmit(event) {
    event.preventDefault();
    const articleUrl = document.getElementById("url").value;

    const result = document.getElementById("results");

    if (!checkForUrl(articleUrl)) {
        result.textContent = "Sorry, not a valid URL";
        return
    }

    const someData = {
        url: articleUrl
    };
    console.log(someData);
    const res = await postData("http://localhost:8082/save", someData);
    result.textContent = `The article polarity and polarity confident are: ${res.msg1} and ${res.msg2}`;
}

//Post data server

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}

export {
    handleSubmit
};