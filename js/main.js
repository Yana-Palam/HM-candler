const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".header-menu-list");

menuBtn.addEventListener("click", onToggleMenuBtn);

function onToggleMenuBtn() {
  menuMobile.classList.toggle("menu-open");
}

// -------------------------
const stringChecker = function (s, p1, p2) {
  let p1Idx = 0;
  let p2Idx = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (p1Idx < p1.length && s[i] === p1[p1Idx]) {
      p1Idx += 1;
    } else if (p2Idx < p2.length && s[i] === p2[p2Idx]) {
      p2Idx += 1;
    } else {
      return false;
    }
  }

  return p1Idx === p1.length && p2Idx === p2.length;
};
console.log(stringChecker("w27y7", "27", "w7y"));
console.log(stringChecker("radency", "radency", ""));
console.log(stringChecker(" Hacker News! ", " Hacker News ", "!"));
