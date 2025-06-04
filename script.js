document.addEventListener("DOMContentLoaded", function() {
  const checkBtn = document.getElementById("check-btn");
  const showBtn = document.getElementById("show-btn");
  const resultDiv = document.getElementById("result");

  checkBtn.addEventListener("click", () => {
    // exercise 안의 모든 input 요소를 가져옴
    const inputs = document.querySelectorAll(".exercise input[type='text']");
    let allCorrect = true;
    inputs.forEach(input => {
      const userAnswer = input.value.trim();
      const correctAnswer = input.getAttribute("data-answer").trim();
      if (userAnswer === "") {
        allCorrect = false;
        input.style.border = "2px solid orange"; // 빈칸인 경우
      } else if (userAnswer === correctAnswer) {
        input.style.border = "2px solid green"; // 정답
      } else {
        allCorrect = false;
        input.style.border = "2px solid red"; // 오답
      }
    });

    if (allCorrect) {
      resultDiv.textContent = "🎉 모든 답이 맞았습니다!";
      showBtn.style.display = "none";
    } else {
      resultDiv.textContent = "일부 답이 틀렸거나 채워지지 않았습니다.";
      showBtn.style.display = "inline-block";
    }
  });

  showBtn.addEventListener("click", () => {
    // 오답 혹은 빈칸 입력란에 정답 자동으로 채워줌
    const inputs = document.querySelectorAll(".exercise input[type='text']");
    inputs.forEach(input => {
      const correctAnswer = input.getAttribute("data-answer").trim();
      input.value = correctAnswer;
      input.style.border = "2px solid blue"; // 정답 표시
    });
    resultDiv.textContent = "정답을 모두 채워드렸습니다.";
    showBtn.style.display = "none";
  });
});
