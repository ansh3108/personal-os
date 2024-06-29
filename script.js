// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

// Function to make an element draggable
function dragElement(element) {
    var initialX = 0, initialY = 0, currentX = 0, currentY = 0;

    element.onmousedown = startDragging;

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

var welcomeScreen = document.querySelector("#welcome")

function closeWindow(element) {
    element.style.display = "none"
  }

  function openWindow(element) {
    element.style.display = "flex"
  }
var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
  });
  
  welcomeScreenOpen.addEventListener("click", function() {
    openWindow(welcomeScreen);
  });
