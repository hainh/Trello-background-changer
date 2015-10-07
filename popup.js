document.addEventListener('DOMContentLoaded', function() {
  $("#saveBtn").click(function () {
    var bgr = $("#trelloBgr").val();
    chrome.storage.sync.set({"bgr" : bgr}, excute);
  });

  chrome.storage.sync.get("bgr", function(bgr) {
    console.log("bgr", bgr);
    $("#trelloBgr").val(bgr["bgr"]);
  });
});

function excute() {
 // chrome.tabs.getCurrent(function (tab){
 chrome.tabs.executeScript(null, {file:"jquery-1.11.3.min.js", runAt:"document_idle"});
 // });
  window.close();
}

