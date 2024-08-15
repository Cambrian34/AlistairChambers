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
    fetch('data/verilog.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        // Display the text in the div with id="text"
        document.getElementById("text").textContent = text;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        alert('Failed to load text from the file.');
    });

    var button = document.getElementById("copy");
    button.onclick = function() {
        var copyText = document.getElementById("text").textContent;

        if (copyText) {
            // Use the Clipboard API to copy text
            navigator.clipboard.writeText(copyText).then(() => {
                alert('Copied the text: ' + copyText);
            }).catch(err => {
                console.error('Could not copy text: ', err);
                alert('Failed to copy text.');
            });
        } else {
            alert('No text available to copy.');
        }
    }
}
