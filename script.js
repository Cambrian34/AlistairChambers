function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => (tab.style.display = 'none'));

    const tabToShow = document.getElementById(tabId);
    if (tabToShow) {
        tabToShow.style.display = 'block';
    }
}
function initPage() {
    showTab('about');
}

window.onload = initPage;


function gettext() {
    // Fetch the text from the file located on the server
    fetch('data/verilog.txt') // Assuming the text file is in a 'data' folder within your website directory
    .then(response => response.text())
    .then(text => {
        // Display the text in the div with id="text"
        document.getElementById("text").textContent = text;
    });

    var button = document.getElementById("copy");
    button.onclick = function() {
        var copyText = document.getElementById("text").textContent; // Get the text content

        // Create a temporary textarea element to hold the text
        var tempInput = document.createElement("textarea");
        tempInput.value = copyText;
        document.body.appendChild(tempInput);

        // Select the text and copy it to the clipboard
        tempInput.select();
        document.execCommand("copy");

        // Remove the temporary textarea
        document.body.removeChild(tempInput);

        // Alert the user
        alert("Copied the text: " + copyText);
    }
}

