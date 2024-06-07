function vacancyMoreInfo() {
  const vacancyBtn = document.querySelectorAll("[value]");
  const vacancyResult = document.querySelectorAll(".vacancy_card_more");

  vacancyBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      vacancyResult.forEach((element) => {
        if (
          element.getAttribute("value") ==
            e.currentTarget.getAttribute("value") &&
          !e.target.classList.contains("rotate_button")
        ) {
          e.target.classList.add("rotate_button");
          element.classList.remove("hidden");
        } else if (
          element.getAttribute("value") ==
            e.currentTarget.getAttribute("value") &&
          e.target.classList.contains("rotate_button")
        ) {
          e.target.classList.remove("rotate_button");
          element.classList.add("hidden");
        }
      });
    });
  });
}

function preferenceMoreInfo() {
  const preferenceBtn = document.querySelectorAll("[value]");
  const preferenceResult = document.querySelectorAll("article");

  preferenceBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      preferenceResult.forEach((element) => {
        if (
          element.getAttribute("value") ==
            e.currentTarget.getAttribute("value") &&
          !e.target.classList.contains("rotate_button")
        ) {
          e.target.classList.add("rotate_button");
          element.classList.remove("hidden");
        } else if (
          element.getAttribute("value") ==
            e.currentTarget.getAttribute("value") &&
          e.target.classList.contains("rotate_button")
        ) {
          e.target.classList.remove("rotate_button");
          element.classList.add("hidden");
        }
      });
    });
  });
}

function pushForm() {
  const pushBtnStart = document.querySelector("[value='push']");
  const pushBtnFinish = document.querySelector("[value='push3']");
  const pushStartResult = document.querySelector("[value='push2']");
  const pushFinishResult = document.querySelector("[value='push4']");
  const pushBtnClose = document.querySelector("[value='push5']");
  const closeBtn = document.querySelectorAll("[value='close']");
  const body = document.querySelector("body");

  pushBtnStart.addEventListener("click", () => {
    pushStartResult.classList.remove("hidden");
    body.classList.add("scrolling");
  });

  pushBtnFinish.addEventListener("click", (e) => {
    pushFinishResult.classList.remove("hidden");
    pushStartResult.classList.add("hidden");
  });

  pushBtnClose.addEventListener("click", () => {
    pushFinishResult.classList.add("hidden");
    body.classList.remove("scrolling");
  });

  closeBtn.forEach((e) => {
    e.addEventListener("click", () => {
      pushFinishResult.classList.add("hidden");
      pushStartResult.classList.add("hidden");
      body.classList.remove("scrolling");
    });
  });
}

vacancyMoreInfo();
preferenceMoreInfo();
pushForm();
