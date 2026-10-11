const allIframeCards = [];
var useImage;


class IframCard {
  constructor(object, image, iframe) {
    this.object = object;
    this.image = image;
    this.iframe = iframe;
  }
}

window.onload = function () {
  var allTest = document.querySelectorAll("*[id = iframe-img]");
  const menu_btn = document.querySelector('.hamburger');
  const mobile_nav = document.querySelector('.mobile-nav');

  allTest.forEach(item => {
    allIframeCards.push(new IframCard(item, item.querySelector("#img"), item.querySelector("#iframe")));
  });

  SetIframeContent();

  menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
  })
}

addEventListener("resize", (event) => {
  SetIframeContent();
})

function SetIframeContent()
{
  var tmp = window.innerWidth <= 1350;

  if (useImage == tmp) {
    return;
  }
  useImage = tmp;

  if (useImage) {

    allIframeCards.forEach(element => {
      console.log(element);
      element.object.innerHTML = "";
      element.object.appendChild(element.image);
    });
  }
  else {
    allIframeCards.forEach(element => {
      console.log(element.iframe);
      element.object.innerHTML = "";
      element.object.appendChild(element.iframe)
    });
  }  
}

function ToggleContent(itemId) {
  var element = document.getElementById(itemId);
  var img = document.getElementById("img-" + itemId);
  if (element.style.display === "none") {
    element.style.display = "block";
    img.style.transform = "rotate(0)"; 
  } else {
    element.style.display = "none";
    img.style.transform = "rotate(-90deg)"; 
  }
}
