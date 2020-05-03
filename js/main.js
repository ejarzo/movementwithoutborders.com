const drawEllipse = (
  ctx,
  { color, left, top, width, height, centerX, centerY }
) => {
  const radX = width / 2;
  const radY = height / 2;
  const x = centerX || (left + width) / 2;
  const y = centerY || (top + height) / 2;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x, y, radX, radY, Math.PI, 0, 2 * Math.PI);
  ctx.fill();
};

const drawBackground = () => {
  const body = document.body;
  const html = document.documentElement;
  const h = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const canvas = document.getElementById("background");
  const w = window.innerWidth;
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const isMobile = w < 520;
  ctx.globalCompositeOperation = "soft-light";

  // top left
  drawEllipse(ctx, {
    color: "rgb(255, 230, 240)",
    centerX: 1,
    centerY: 1,
    width: Math.max(800, 0.5 * w),
    height: Math.max(800, 0.5 * w),
  });

  // top right
  drawEllipse(ctx, {
    color: "rgb(255, 218, 173)",
    centerX: w,
    centerY: 1,
    width: Math.max(800, 0.5 * w),
    height: Math.max(800, 0.5 * w),
  });

  // pink
  drawEllipse(ctx, {
    color: "rgba(245, 101, 255, 0.8)",
    left: isMobile ? -140 : 0,
    top: 1,
    width: Math.max(400, 0.8 * w),
    height: Math.max(400, 0.4 * h),
  });

  // green
  drawEllipse(ctx, {
    color: "rgb(121, 212, 153)",
    centerX: w - 50,
    top: 0.3 * h,
    width: Math.max(100, 0.7 * w),
    height: Math.max(300, 0.3 * h),
  });

  // blue
  drawEllipse(ctx, {
    color: "rgb(165, 197, 255)",
    left: w - 80,
    top: 0.2 * h,
    width: Math.max(150, 1.5 * w),
    height: Math.max(800, 0.8 * h),
  });

  // orange low
  drawEllipse(ctx, {
    color: "rgb(253, 214, 166)",
    left: 0 - 0.2 * w,
    top: 0.5 * h,
    width: Math.max(400, 0.9 * w),
    height: Math.max(700, 0.9 * h),
  });

  // pink low
  drawEllipse(ctx, {
    color: "rgba(236, 183, 255)",
    centerY: h,
    centerX: w,
    width: Math.max(400, w),
    height: Math.max(800, 0.5 * h),
  });

  boxBlurCanvasRGBA("background", 0, 0, w, h, 100, 1);
};

function rotateBannerImages(bannerId, images) {
  let i = 1;
  const newImg = document.createElement("img");
  const banner = document.getElementById(bannerId);

  newImg.src = `img/${images[0]}`;
  newImg.className = "first";
  banner.appendChild(newImg);

  const rotateTimeout = () => {
    if (i >= images.length) {
      i = 0;
    }

    const newImg = document.createElement("img");

    newImg.src = `img/${images[i]}`;
    banner.appendChild(newImg);

    // remove the node once the fade out animation has finished
    setTimeout(() => {
      newImg.parentNode.removeChild(newImg);
    }, 15 * 1000);

    // do next image
    setTimeout(rotateTimeout, 10 * 1000);
    i++;
  };
  setTimeout(() => {
    newImg.parentNode.removeChild(newImg);
  }, 12 * 1000);
  setTimeout(rotateTimeout, 8 * 1000);
}

const topImages = [
  "unnamed-reduced.jpg",
  "xaviera-simmons-convene.jpg",
  "group2/reduced/The-School-Box-project-.jpg",
  "jacoblawrence_migrationseries_panel388_wide-f5a56c15ad747562958fe34e80651a069f9049f0.jpg",
  "578866.story_x_large.jpg",
  "group1/reduced/clothes-drying-outside-shelter.jpg",
  "group1/reduced/Door of Hope children dont understand.jpg",
  "group1/reduced/keep-your-chin-up.jpg",
  "group1/reduced/interiror-Roca-de salvacion.jpg",
  "group2/reduced/waters-edge-Tijuana.jpg",
  "Unknown-1.jpeg",
  // "group1/last-in-series-of-nuns-at-waters-edge.jpg",
];

const bottomImages = [
  "unnamed-1-reduced.jpg",
  "Xaviera-Simmons_On-Sculpture-2_living-with-water.jpg",
  "group2/reduced/Nuns-working-to-help-migrants-on-waters-edge-in-thought-think-i-sent.jpg",
  "group2/reduced/salut-Tijuana.jpg",
  "group2/reduced/sisters-sm.jpg",
  "web1_S1-MigrationPanel18-EDH-170203.jpg",
  "group2/reduced/two-new-best-friends.jpg",
  "group2/reduced/Z-sm-and-the-border-wall-just-ends-copy.jpg",
];

document.addEventListener("DOMContentLoaded", function () {
  drawBackground();
  rotateBannerImages("top-banner", topImages);
  rotateBannerImages("bottom-banner", bottomImages);
  // rotateBannerImages("footer-banner", bottomImages);
});
