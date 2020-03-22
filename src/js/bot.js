function convertDate(value) {
  const rValue = value < 10 ? `0${value}` : value;
  return rValue;
}

function printData(valueDate) {
  const itemDate = new Date(valueDate);
  const date = convertDate(itemDate.getDate());
  const month = convertDate(itemDate.getMonth() + 1);
  const year = convertDate(itemDate.getFullYear());
  const hours = convertDate(itemDate.getHours());
  const minut = convertDate(itemDate.getMinutes());
  const itemCreated = `${hours}:${minut} ${date}.${month}.${year}`;
  return itemCreated;
}

export default class Bot {
  constructor(parentEl) {
    this.weather = ['Ну улице солнечно', 'Рекомендую взять зонт', 'Температура +10', 'Дождь весь день', 'Жарища', 'Сегодня -5'];
    this.toGo = ['Сегодня в кино показывают комедии', 'Сегодня солнечно и тепло. Проведите время на природе', 'Можно сходить в кафе', 'Погода не очень. Я бы не стал никуда выходить'];
    this.likeYou = ['В норме, а ты?', 'Не очень.', 'Все ОК!', 'Отлично!', 'Уже лучше'];
    this.whatSee = ['Мультики конечно', 'Экшн!', 'Комедию для поднятия настроения', 'Отечественное кино', 'Не знаю... может арт-хаус?)', 'Драму', 'Ничего)'];
    this.howTime = ['Приготовить еды', 'Почитать', 'Пора заняться уборкой', 'Может поспать?)', 'Сходи куда-нибудь, только дома и сидишь!', 'Покодить)', 'Вынеси мусор'];
    this.parentEl = parentEl;
  }

  funcBot(msg) {
    let msgHtml = '';
    let elItemMsg = document.createElement('div');
    elItemMsg.className = 'item-message';
    elItemMsg.innerHTML = `
    ${msg}
    <div class="footer-msg">
      <div class="date-time">${printData(new Date())}</div>
    </div>
    `;
    this.parentEl.appendChild(elItemMsg);

    const zapros = msg.replace(/^@chaos: /, '');

    switch (zapros) {
      case 'погода':
        msgHtml = this.randomMsg(this.weather);
        break;
      case 'куда пойти':
        msgHtml = this.randomMsg(this.toGo);
        break;
      case 'как дела':
        msgHtml = this.randomMsg(this.likeYou);
        break;
      case 'что посмотреть':
        msgHtml = this.randomMsg(this.whatSee);
        break;
      case 'чем заняться':
        msgHtml = this.randomMsg(this.howTime);
        break;
      default:
        msgHtml = 'Сейчас я не могу дать ответ!';
        break;
    }

    elItemMsg = document.createElement('div');
    elItemMsg.className = 'item-message bot';
    elItemMsg.innerHTML = `
    ${msgHtml}
    <div class="footer-msg">
      <div class="date-time">${printData(new Date())}</div>
    </div>
    `;
    this.parentEl.appendChild(elItemMsg);
  }

  randomMsg(arr) {
    console.log(arr);
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex);
    return arr[randomIndex];
  }
}
