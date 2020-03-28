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

document.addEventListener("DOMContentLoaded", function() {
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
    height: Math.max(800, 0.5 * w)
  });

  // top right
  drawEllipse(ctx, {
    color: "rgb(255, 218, 173)",
    centerX: w,
    centerY: 1,
    width: Math.max(800, 0.5 * w),
    height: Math.max(800, 0.5 * w)
  });

  // pink
  drawEllipse(ctx, {
    color: "rgb(245, 101, 255)",
    left: isMobile ? -140 : 0,
    top: 1,
    width: Math.max(400, 0.8 * w),
    height: Math.max(400, 0.4 * h)
  });

  // green
  drawEllipse(ctx, {
    color: "rgb(121, 212, 153)",
    centerX: w - 50,
    top: 0.3 * h,
    width: Math.max(100, 0.7 * w),
    height: Math.max(300, 0.3 * h)
  });

  // blue
  drawEllipse(ctx, {
    color: "rgb(165, 197, 255)",
    left: w - 80,
    top: 0.2 * h,
    width: Math.max(150, 1.5 * w),
    height: Math.max(800, 0.8 * h)
  });

  // orange low
  drawEllipse(ctx, {
    color: "rgb(253, 214, 166)",
    left: 0 - 0.2 * w,
    top: 0.5 * h,
    width: Math.max(400, 0.9 * w),
    height: Math.max(700, 0.9 * h)
  });

  // pink low
  drawEllipse(ctx, {
    color: "rgba(236, 183, 255)",
    centerY: h,
    centerX: w,
    width: Math.max(400, w),
    height: Math.max(800, 0.5 * h)
  });

  boxBlurCanvasRGBA("background", 0, 0, w, h, 100, 1);
});
