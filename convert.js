let urlTextInput = document.getElementById("url-input");
let urlTextOutput = document.getElementById("url-output");
let convertButton = document.getElementById("input-button");
let copyButton = document.getElementById("output-button");
let inputText;
let outputText;

function convertText()
{
    try 
    {
        urlTextInput.select();
        inputText = urlTextInput.value;
    } 
    catch (error) {
        console.log("No input text");
    }
    
    outputText = inputText.replace("Items", "Videos");
    outputText = outputText.replace("Download", "main.m3u8");

    urlTextOutput.select();
    urlTextOutput.value = outputText;
}

function copyText()
{
    navigator.clipboard.writeText(outputText);
}

