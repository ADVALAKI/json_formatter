function beautifyJson() {
    var jsonInput = document.getElementById('jsonInput').value;
    try {
        var parsedJson = JSON.parse(jsonInput);
        var beautifiedJson = JSON.stringify(parsedJson, null, 4);
        document.getElementById('jsonInput').value = beautifiedJson;
    } catch (error) {
        // Ignore invalid JSON input
    }
}

function zoomIn() {
    fontSize += 2; // Increase font size by 2px
    updateFontSize();
}

function zoomOut() {
    fontSize = Math.max(10, fontSize - 2); // Decrease font size by 2px, but keep it above 10px
    updateFontSize();
}

function removeWhiteSpace() {
    var jsonInput = document.getElementById('jsonInput').value;
    var compactJson = jsonInput.replace(/\s/g, '');
    document.getElementById('jsonInput').value = compactJson;
}

function updateFontSize() {
    document.getElementById('jsonInput').style.fontSize = fontSize + 'px';
}
