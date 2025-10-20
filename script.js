const checkGrade = () => {
    if (grading.value == '') {
        showResult.innerHTML = 'Fill in your CGPA 🙄'
    }
    if (grading.value >= 4.50 || grading.value <= 5.0) {
        showResult.innerHTML = "First Class🥰"
    }
    if (grading.value == 3.50 || grading.value <= 4.49) {
        showResult.innerHTML = "Second Class Upper 😍"
    } if (grading.value == 2.40 || grading.value <= 3.49) {
        showResult.innerHTML = "Second Class Lower 🤗"
    } if (grading.value == 1.50 || grading.value <= 2.39) {
        showResult.innerHTML = "Third Class 🙂"
    } else {
        showResult.innerHTML = "Enter valid CGPA🙄"
    }
}