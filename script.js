const hormones = document.querySelectorAll(".hormone");
const tube = document.getElementById("tube");
const result = document.getElementById("result");

let selected = [];

/* بدء */
document.getElementById("Btn-Container").onclick = () => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("app").style.display = "block";
};

/* القائمة */
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("sidebar").classList.toggle("active");
};

/* اختيار */
hormones.forEach(h => {

  h.addEventListener("dragstart", () => {
    selected.push(h.id);
  });

  h.addEventListener("click", () => {
    selected.push(h.id);
    showInfo(h.id);
  });

});

/* السماح بالسحب */
tube.addEventListener("dragover", e => e.preventDefault());

/* التفاعل */
tube.addEventListener("drop", handleResult);
tube.addEventListener("click", handleResult);

function handleResult() {

  if (selected.length >= 2) {

    // طبيعي
    if (selected.includes("h1") && selected.includes("h2")) {
      result.textContent =
      "🟢 طبيعي: توازن الإستروجين والبروجسترون يدعم نمو الجنين بشكل صحي.";
      tube.style.background = "rgba(0,255,0,0.3)";
    }

    // خلل
    else if (selected.includes("h2") && selected.includes("h3")) {
      result.textContent =
      "🔴 خلل: اضطراب بين البروجسترون و hCG قد يسبب مشاكل في تثبيت الحمل.";
      tube.style.background = "rgba(255,0,0,0.3)";
    }

    // تفاعل LH
    else if (selected.includes("h1") && selected.includes("h4")) {
      result.textContent =
      "🟢 LH + Estrogen: يساعد في تحفيز الإباضة وبداية الحمل بشكل طبيعي.";
      tube.style.background = "rgba(0,255,0,0.3)";
    }

    // طفرة
    else {
      result.textContent =
      "🟣 طفرة: تفاعل غير طبيعي قد يؤثر على تطور الأعضاء.";
      tube.style.background = "rgba(128,0,128,0.3)";
    }

    selected = [];
  }
}

/* إعادة */
document.getElementById("resetBtn").onclick = () => {
  result.textContent = "النتيجة هنا...";
  tube.style.background = "rgba(255,255,255,0.3)";
  selected = [];
};

/* شرح */
function showInfo(id) {

  const box = document.getElementById("infoBox");

  if (id === "h1") {
    box.textContent = "Estrogen: يساعد في نمو الرحم.";
  }
  else if (id === "h2") {
    box.textContent = "Progesterone: يثبت الحمل.";
  }
  else if (id === "h3") {
    box.textContent = "hCG: يدعم استمرار الحمل.";
  }
  else if (id === "h4") {
    box.textContent = "LH: يحفز الإباضة ويساعد في بدء الحمل.";
  }
}