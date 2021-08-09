function posY(elm) {
  var test = elm,
    top = 0;

  while (!!test && test.tagName.toLowerCase() !== "body") {
    top += test.offsetTop;
    test = test.offsetParent;
  }

  return top;
}

function viewPortHeight() {
  var de = document.documentElement;

  if (!!window.innerWidth) {
    return window.innerHeight;
  } else if (de && !isNaN(de.clientHeight)) {
    return de.clientHeight;
  }

  return 0;
}

function scrollY() {
  if (window.pageYOffset) {
    return window.pageYOffset;
  }
  return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkvisible(elm) {
  var vpH = viewPortHeight(), // Viewport Height
    st = scrollY(), // Scroll Top
    y = posY(elm);

  return y > vpH + st;
}

const topImages = [
  "unnamed-reduced.jpg",
  "xaviera-simmons-convene.jpg",
  "group2/reduced/salut-Tijuana.jpg",
  "group2/reduced/sisters-sm.jpg",
  "jacob-lawrence-migration-series-2.jpg",
  "Xaviera-Simmons_On-Sculpture-2_living-with-water.jpg",
  "group2/reduced/The-School-Box-project-.jpg",
  "578866.story_x_large.jpg",
  "group2/reduced/Nuns-working-to-help-migrants-on-waters-edge-in-thought-think-i-sent.jpg",
  "jacob-lawrence-migration-series-1.jpg",
  "group2/reduced/two-new-best-friends.jpg",
  "group3/tish-lampert-one-last-touch.jpg",
  "group3/tish-lampert-women-gathering-the-childen-for-community-hope.jpg",
];

const bottomImages = [
  "group3/tish-lampert-sunset-in-tijuana.jpg",
  "xaviera-simmons-convene.jpg",
  "group2/reduced/salut-Tijuana.jpg",
  "group2/reduced/sisters-sm.jpg",
  "jacob-lawrence-migration-series-2.jpg",
  "Xaviera-Simmons_On-Sculpture-2_living-with-water.jpg",
  "group2/reduced/The-School-Box-project-.jpg",
  "578866.story_x_large.jpg",
  "group2/reduced/Nuns-working-to-help-migrants-on-waters-edge-in-thought-think-i-sent.jpg",
  "jacob-lawrence-migration-series-1.jpg",
  "group2/reduced/two-new-best-friends.jpg",
  "group3/tish-lampert-one-last-touch.jpg",
  "group3/tish-lampert-women-gathering-the-childen-for-community-hope.jpg",
];

document.addEventListener("DOMContentLoaded", function () {
  const DURATION = 8;
  const slideshow = document.getElementById("slideshow");
  const images = slideshow.getElementsByClassName("slideshow__image");
  let i = -1;

  const rotateImages = () => {
    if (images[i]) {
      images[i].className = "slideshow__image";
    }
    i++;
    i = i % images.length;
    if (images[i]) {
      images[i].className = "slideshow__image out";
    }
    const next = (i + 1) % images.length;
    images[next].className = `slideshow__image active`;
  };

  setInterval(rotateImages, DURATION * 1000);
});
