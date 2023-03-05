import React from 'react';

import { RulesWrap } from './rulesStyle';

interface TypeFn {
  onClose: () => void;
}

export const Rules: React.FC<TypeFn> = ({ onClose }) => (
  <RulesWrap>
    <button type="button" onClick={onClose}>
      Закрыть
    </button>
    <div>
      <h2>Правила игры</h2>
      <p>Косынка - понятная карточная игра с простыми правилами, которые мы сейчас и рассмотрим.</p>
      <p>
        В игре задействована колода из 52 карт. В правом верхнем углу расположены четыре пустые
        ячейки, называемых “домами”. Цель игрока заключается в том, чтобы заполнить все “дома”,
        создавая столбцы карт в возрастающей последовательности.
      </p>
      <p>
        В Косынке Тузы считаются низшими картами, а Короли - старшими. Поэтому, последовательность
        карт в каждом столбце должна начинаться с Туза и заканчиваться Королем. Т.е. здесь, младшая
        карта кроет старшую. Начинайте цепочку от Туза, затем поверх нее разложите двойки, тройки, и
        так по возрастанию, завершая каждую цепочку Королем.
      </p>
      <p>
        При этом, важно учитывать следующие особенности: Карты в колонках можно выстраивать по
        убыванию старшинства, с чередованием цветов. Например, можно положить черную тройку на
        красную четверку. Вы можете переносить целую колонку карт из одной в другую, если они
        выстроены в правильной последовательности. Просто коснитесь самой верхней карты в нужной
        последовательности и перетащить всю цепочку в другую колонку. При образовании пустой ячейки,
        в нее можно поместить Короля.
      </p>
      <p>
        Также в вашем распоряжении дополнительная колода, которую можно перелистывать, чтобы найти
        нужную карту для продолжения игры. Но за это снимаются очки, которые могли бы помочь вам
        продвинуться вперед в списке лидеров.
      </p>
      <p>
        После того, как в дом помещен туз, отправить следующую по старшинству карту соответствующей
        масти можно также при помощи двойного клика.
      </p>
      <p>Выносить карты из дома нельзя.</p>
    </div>
  </RulesWrap>
);