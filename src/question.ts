export const createQuestion = (): HTMLDivElement => {
  const questionContainer: HTMLDivElement = document.createElement('div');
  questionContainer.setAttribute('id', 'questionContainer');

  const p: HTMLParagraphElement = document.createElement('p');
  p.textContent = 'Tom Yum Goong';
  questionContainer.appendChild(p);

  const img: HTMLImageElement = document.createElement('img');
  img.src = "./img/Tom_Yum_Goong.webp";
  questionContainer.appendChild(img);

  return questionContainer;
}

export const createChoices = (): HTMLDivElement => {
  const choicesContainer: HTMLDivElement = document.createElement('div');
  choicesContainer.setAttribute('id', 'choicesContainer');

  const ingredients: string[] = [
    "shrimp",
    "chicken stock",
    "galangal",
    "lemongrass",
    "kaffir lime leave",
    "mushroom",
    "chilli pepper",
    "lime juice",
    "fish sauce"
  ];

  ingredients.forEach(ing => {
    const div: HTMLDivElement = document.createElement('div');
    choicesContainer.appendChild(div);

    const input: HTMLInputElement = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.value = ing;
    div.appendChild(input);

    const img: HTMLImageElement = document.createElement('img');
    img.src = `./img/Tom_Yum_Goong.webp`;
    img.setAttribute('alt', ing);
    div.appendChild(img);

    div.addEventListener('click', () => input.click());
  });

  return choicesContainer;
};

export const createSubmitButton = (): HTMLDivElement => {
  const submit: HTMLDivElement = document.createElement('div');
  submit.setAttribute('id', 'submit');
  const p = document.createElement('p');
  p.textContent = 'answer';
  submit.appendChild(p);

  return submit;
};

export const checkUserAnswer = (choices: HTMLDivElement): string[] => {
  const res = [];
  Array.from(choices.children).forEach((div: any) => div.children[0].checked ? res.push(div.children[0].value) : 0);
  return res;
};

export const getScore = (ans: string[]) => {
  const ingredients: string[] = [
    "shrimp",
    "chicken stock",
    "galangal",
    "lemongrass",
    "kaffir lime leave",
    "mushroom",
    "chilli pepper",
    "lime juice",
    "fish sauce"
  ];
  let score = 0;
  ingredients.forEach(v => ans.includes(v) ? score++ : 0);
  return Math.floor((score / ingredients.length) * 10);
};

export const createTimer = (min: number, submit: HTMLDivElement): [HTMLDivElement, NodeJS.Timer] => {
  let sec = min * 60;

  const timerContainer: HTMLDivElement = document.createElement('div');
  timerContainer.id = 'timerContainer';
  const p: HTMLParagraphElement = document.createElement('p');
  p.textContent = `${min}:00`;
  timerContainer.appendChild(p);

  const timer: NodeJS.Timer = setInterval(() => {
    if (--sec === 0) {
      submit.click();
    }
    p.textContent = `${Math.floor((sec) / 60)}:${(sec % 60).toString().padStart(2, '0')}`;
    if (sec <= 10) p.setAttribute('class', 'underTen');
  }, 1000);

  return [timerContainer, timer];
}
