document.addEventListener("DOMContentLoaded", () => {
  const splatBackground = document.getElementById("splat-background");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = Math.min(1, scrollY / pageHeight);

    // As the user scrolls, we'll change the animation properties.
    // We can change the animation duration to make particles move faster or slower.
    const mediumDuration = 30 - scrollFraction * 25; // Speed up from 30s to 5s
    const fastDuration = 20 - scrollFraction * 15; // Speed up from 20s to 5s

    splatBackground.style.setProperty(
      "--anim-duration-medium",
      `${Math.max(5, mediumDuration)}s`
    );
    splatBackground.style.setProperty(
      "--anim-duration-fast",
      `${Math.max(5, fastDuration)}s`
    );
  });
});
