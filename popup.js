document.addEventListener('DOMContentLoaded', function() {
    $("#saveBtn").click(function () {
        var bgr = $("#trelloBgr").val();
        var css = $("#trelloCss").val();
        chrome.storage.sync.set({"bgr" : bgr, "css" : css}, excute);

    });

    chrome.storage.sync.get(["bgr", "css"], function(data) {
        console.log("bgr ", data);
        $("#trelloBgr").val(data["bgr"]);
        $("#trelloCss").val(data["css"]);
    });
});

function excute() {
 // chrome.tabs.getCurrent(function (tab){
 chrome.tabs.executeScript(null, {file:"jquery-1.11.3.min.js", runAt:"document_idle"});
 // });
  window.close();
}

