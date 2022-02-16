export const startCountdown = (container: HTMLDivElement): Promise<void> => {
  return new Promise(resolve => {
    const countdownContainer = document.createElement('div');
    countdownContainer.setAttribute('id', 'countdownContainer');
    container.appendChild(countdownContainer);

    for (let i = 0; i <= 3; i++) {

      const p = document.createElement('p');
      countdownContainer.appendChild(p);
      p.textContent = i !== 0 ? i.toString() : "let's talk!!!";
      p.setAttribute('class', 'start');

      setTimeout(() => {
        p.setAttribute('class', 'end');
        setTimeout(() => {
          p.remove();
          if (i === 0) {
            countdownContainer.remove()
            resolve();
          };
        }, 1000)
      }, (3 - i) * 1000);

    }
  })
};

export const showUserAnswer = (container: HTMLDivElement, userAnswer: string[]): Promise<void> => {
  return new Promise(resolve => {
    if (userAnswer.length === 0) resolve();

    const div: HTMLDivElement = document.createElement('div');
    div.setAttribute('id', 'userAnswer');
    container.appendChild(div);

    for (let i = 0; i < userAnswer.length; i++) {
      const underDiv: HTMLDivElement = document.createElement('div');
      div.appendChild(underDiv);
      const img: HTMLImageElement = document.createElement('img');
      img.src = './img/Tom_Yum_Goong.webp';
      img.alt = userAnswer[i];
      underDiv.appendChild(img);
      setTimeout(() => {
        img.setAttribute('class', 'visible');
        if (i === userAnswer.length - 1) { resolve(); }
      }, i * 500);
    }
  })
};

export const showArrow = (container: HTMLDivElement): Promise<void> => {
  return new Promise(resolve => {
    const div: HTMLDivElement = document.createElement('div');
    div.setAttribute('id', 'arrow');
    container.appendChild(div);
    setTimeout(() => {
      div.setAttribute('style', 'height: 100px;');
      const p: HTMLParagraphElement = document.createElement('p');
      p.textContent = '=>';
      div.appendChild(p);
      setTimeout(() => resolve(), 500);
    }, 500);
  });
}

export const showScore = (container: HTMLDivElement, score: number): Promise<void> => {
  return new Promise(resolve => {
    const div: HTMLDivElement = document.createElement('div');
    div.setAttribute('id', 'score');
    container.appendChild(div);
    const img: HTMLImageElement = document.createElement('img');
    img.src = './img/Tom_Yum_Goong.webp';
    div.appendChild(img);
    const overlay: HTMLDivElement = document.createElement('div');
    overlay.id = 'overlay';
    div.appendChild(overlay);

    const textContainer: HTMLDivElement = document.createElement('div');
    textContainer.id = 'textContainer';
    div.appendChild(textContainer);

    const p: HTMLParagraphElement = document.createElement('p');
    p.textContent = `${score} POINTS!!!`;
    textContainer.appendChild(p);


    setTimeout(() => {
      overlay.setAttribute('style', `width: ${100 - score * 10}%;`)
      setTimeout(() => {
        textContainer.setAttribute('style', 'width: 100%;');
        setTimeout(() => resolve(), 500);
      }, 500)
    }, 500)
  })
}
