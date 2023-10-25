const removeWrongAnswer = (arrayIds) => {
    for (let id of arrayIds) {
        const element = document.getElementById(id);
        if (element?.classList.contains("wrongAnswer")) {
            element.classList.remove("wrongAnswer");
        }
    }
}

const addWrongAnswer = (arrayIds) => {
    let isFull = true;
    for (let id of arrayIds) {
        const element = document.getElementById(id);
        if (element?.value === '') {
            element.classList.add("wrongAnswer");
            isFull = false;
        }
    }
    return isFull;
}

const addWrongAnswerLogin = (arrayIds) => {
    for (let id of arrayIds) {
        const element = document.getElementById(id);
        element.classList.add("wrongAnswer");
    }
}

export { removeWrongAnswer, addWrongAnswer, addWrongAnswerLogin };