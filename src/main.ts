import 'reset-css';
import './style.scss';

import { container, startButton } from './dom';
import { showArrow, showScore, showUserAnswer, startCountdown } from './animation'
import { checkUserAnswer, createChoices, createQuestion, createSubmitButton, createTimer, getScore } from './question';

startButton.addEventListener('click', async () => {
  startButton.remove();
  await startCountdown(container);

  const question = createQuestion();
  const choices = createChoices();
  const submitButton = createSubmitButton();
  const [timer, intervalTimer] = createTimer(1, submitButton)
  container.appendChild(timer);
  container.appendChild(question);
  container.appendChild(choices);
  container.appendChild(submitButton);

  submitButton.addEventListener('click', async () => {
    clearInterval(intervalTimer);
    const userAnswer = checkUserAnswer(choices);
    const score = getScore(userAnswer);
    choices.remove();
    submitButton.remove();
    timer.remove();
    await showUserAnswer(container, userAnswer);
    await showArrow(container);
    await showScore(container, score);
  });
});
