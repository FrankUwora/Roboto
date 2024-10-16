const robot = document.getElementById("android");
      robot.addEventListener("click", () => {
        robot.classList.toggle("move");
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
          robot.classList.add("move-right");
        } else if (event.key === "ArrowLeft") {
          robot.classList.add("move-left");
        }
      });

      document.addEventListener("keyup", () => {
        robot.classList.remove("move-right", "move-left");
      });