"use strict";

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

var cssUrl = chrome.extension.getURL('css/style.css');    
$('head').append('<link rel="stylesheet" type="text/css" href="'+cssUrl+'">');

///////// INIT /////////////
$(document).ready(function () {
    var fontUrlEot = chrome.extension.getURL('fonts/redacted-regular.eot');
    var fontUrlWoff = chrome.extension.getURL('fonts/redacted-regular.woff');
    var fontUrlOtf = chrome.extension.getURL('fonts/redacted-regular.otf');
    var fontUrlSvg = chrome.extension.getURL('fonts/redacted-regular.svg');
    addGlobalStyle('@font-face {font-family: "Redacted"; src: url("' + fontUrlEot + '"); src: url("' + fontUrlWoff + '") format("woff"),url("' + fontUrlEot + '")format("opentype"), url("' + fontUrlSvg + '") format("svg");}');
    console.log("done!")
    });

//.nano-player-component videoContainer
