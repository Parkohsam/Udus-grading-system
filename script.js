const checkGrade = () => {
    if (grading.value === '') {
        showResult.innerHTML = 'Fill in your CGPA 🙄'
    }
    else if (grading.value > 5.0){
        showResult.innerHTML = "Enter a valid CGPA😒"
    }
    else if (grading.value >= 4.50 && grading.value <= 5.0) {
        showResult.innerHTML = "First Class🥰"
    }
    else if (grading.value >= 3.50 && grading.value <= 4.49) {
        showResult.innerHTML = "Second Class Upper 😍"
    } else if (grading.value >= 2.40 && grading.value <= 3.49) {
        showResult.innerHTML = "Second Class Lower 🤗"
    } else if (grading.value >= 1.50 && grading.value <= 2.39) {
        showResult.innerHTML = "Third Class 🙂"
    } else {
        showResult.innerHTML = "Pass🙄"
    }
}