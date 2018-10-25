import * as React from 'react';

import styles from './styles.sass';

// 1. Выполнить глобальное подключение webpack и необходимых загрузчиков.
// 2. Разработать структуру проекта.Продумать, какие компоненты будут входить в состав каждого js - элемента.Разработать компонент, выводящий ФИО разработчика.
// 3. Необходимо изменить один из файлов таким образом, чтобы в нём подключался новый компонент и выводился на главной странице.
// 4. * Для нового компонента необходимо прописать класс.
// 5. * Выполнить событие клик(onClick).При клике на компонент должна выводиться текущая дата.

export default class MainPage extends React.PureComponent {

  render() {
    return (
      <div className="main-content">
        Hello World
      </div>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById('main-content'));
