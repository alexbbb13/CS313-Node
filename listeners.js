function start(){
      document.getElementById("activitySelector").addEventListener("change", addActivityItem, false);
      }

function addActivityItem(){
      //option is selected
      alert("yeah");
}

window.addEventListener("load", start, false);