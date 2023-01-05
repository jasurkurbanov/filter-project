# Footbal Points Project

У вас есть данные

```bash
const FOOTBALL_POINTS = [  {
    created_at: "2017-08-31T16:35:00.000Z",
    title:
      "ESPN Football Analyst Walks Away, Disturbed by Brain Trauma on Field",
    url: "https://www.nytimes.com/2017/08/30/sports/espn-ed-cunningham-football-concussions.html",
    author: "daegloe",
    points: 436,
    story_text: null,
    comment_text: null,
    num_comments: 383,
    story_id: null,
    story_title: null,
    story_url: null,
    parent_id: null,
    created_at_i: 1504197300,
    relevancy_score: 7635,
    _tags: ["story", "author_daegloe", "story_15141495"],
    objectID: "15141495",
    _highlightResult: {
      title: {
        value:
          "ESPN \u003cem\u003eFootball\u003c/em\u003e Analyst Walks Away, Disturbed by Brain Trauma on Field",
        matchLevel: "full",
        fullyHighlighted: false,
        matchedWords: ["football"],
      },
      url: {
        value:
          "https://www.nytimes.com/2017/08/30/sports/espn-ed-cunningham-\u003cem\u003efootball\u003c/em\u003e-concussions.html",
        matchLevel: "full",
        fullyHighlighted: false,
        matchedWords: ["football"],
      },
      author: { value: "daegloe", matchLevel: "none", matchedWords: [] },
    },
  }]
```
Нужно сделать такую карточку

![image](https://user-images.githubusercontent.com/41279178/210742338-5bea4d61-d746-43af-9da5-682e8921d925.png)

внутри карточкы должны быть эти данные
```bash
title
author
created_at_i
points
_tags
```

Вам нужно конвертировать `created_at_i` в такой формат mm/dd/yyyy. 
Вам на помощь https://www.epochconverter.com/

Пример
```js
1504197300 => 8/31/2017
```
Цвета для пользование
1) rgb(222, 255, 244);
2) rgb(19, 80, 211);
3) blueviolet;
4) green;
5) rgb(228, 151, 8);

Что нужно показать
1) Показать все данные 
2) Показать данные до 2016 года
3) Где имя авторя начинатся с буква `d` (daegloe, danso and etc.)
4) Где кол-во комментарии большее 200
5) Где url содержить 'nytimes' 

Демо. Вам нужно делать вот такой резьултат:
### Все данные
![image](https://user-images.githubusercontent.com/41279178/210744911-1cfed8bc-6a06-4cf0-9945-84816a559230.png)

### Data<2016
![image](https://user-images.githubusercontent.com/41279178/210745744-8e68cc81-b896-470f-96bd-e9468bdca0cb.png)

### Author name with 'd'
![image](https://user-images.githubusercontent.com/41279178/210746126-1a775bf2-9592-4cfd-9dce-b74034bcbfb4.png)

### Comment > 200
![image](https://user-images.githubusercontent.com/41279178/210746300-4bb43160-efe0-46dd-b662-99c03ab50a14.png)

### Url containing 'nytimes'
![image](https://user-images.githubusercontent.com/41279178/210746702-0ca46fe7-3d50-40e8-adf7-648f20cc7aef.png)

# Car Models Project
