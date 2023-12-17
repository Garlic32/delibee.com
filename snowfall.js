document.addEventListener("DOMContentLoaded", function () {
  const snowfallContainer = document.querySelector(".snowfall");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";

    const randomX = Math.random() * window.innerWidth;
    const randomAnimationDuration = Math.random() * 2 + 4;

    snowflake.style.left = `${randomX}px`;
    snowflake.style.animationDuration = `${randomAnimationDuration}s`;

    snowfallContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
      createSnowflake();
    }, randomAnimationDuration * 1000);
  }

  // Create initial snowflakes
  for (let i = 0; i < 50; i++) {
    createSnowflake();
  }
});
