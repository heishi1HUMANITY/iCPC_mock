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

  const data: string[] = [
    "shrimp",
    "galangal",
    "lemongrass",
    "kaffir lime leave",
    "mushroom",
    "chilli pepper",
    "lime juice",
    "fish sauce",
    "onion",
    "garlic",
    "carrot"
  ];

  let ingredients = [];
  for (let i = 0; i < data.length; i++) {
    const random = Math.floor(Math.random() * (data.length - i));
    ingredients.push(data[random]);
    data[random] = data[data.length - 1 - i];
  }

  ingredients.forEach(ing => {
    const div: HTMLDivElement = document.createElement('div');
    choicesContainer.appendChild(div);

    const input: HTMLInputElement = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.value = ing;
    div.appendChild(input);

    const img: HTMLImageElement = document.createElement('img');
    img.src = `./img/${ing.replace(/\ /g, '_')}.jpg`;
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

export const getScore = (ans: string[]): [number, number, number] => {
  const ingredients: string[] = [
    "shrimp",
    "galangal",
    "lemongrass",
    "kaffir lime leave",
    "mushroom",
    "chilli pepper",
    "lime juice",
    "fish sauce",
  ];
  const fake: string[] = [
    "onion",
    "garlic",
    "carrot"
  ];
  
  let correct = 0;
  ingredients.forEach(v => ans.includes(v) ? correct++ : 0);
  let incorrect = 0;
  fake.forEach(v => ans.includes(v) ? incorrect++ : 0);

  return [correct, incorrect, correct - incorrect];
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
