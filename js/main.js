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
  const DURATION = 6;
  drawBackground();

  const topBanner = document.getElementById("top-banner");
  const bottomBanner = document.getElementById("bottom-banner");

  topImages.forEach((url, i) => {
    const newImg = document.createElement("img");
    newImg.src = `img/${url}`;
    newImg.className = `img-${i}`;
    topBanner.appendChild(newImg);
  });
  bottomImages.forEach((url, i) => {
    const newImg = document.createElement("img");
    newImg.src = `img/${url}`;
    newImg.className = `img-${i}`;
    bottomBanner.appendChild(newImg);
  });

  let i = -1;
  const rotateTimeout = () => {
    i++;
    if (i >= topImages.length) {
      i = 0;
    }
    document.body.className = `active-img-${i}`;
    setTimeout(rotateTimeout, DURATION * 1000);
  };

  setTimeout(rotateTimeout, 100);
});
