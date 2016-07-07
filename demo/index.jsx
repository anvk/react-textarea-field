import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from '../src/Textarea';
import '../src/textarea.less';

class Demo extends React.Component {

  render() {
    return (
      <Textarea />
    );
  }

}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
