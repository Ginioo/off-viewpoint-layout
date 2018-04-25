import React, {Component} from 'react';
import uuid from 'uuid';

export default class MakeUpText extends Component {
  render() {
    return (
      <div id="make-up-text">
        {this.props.contents.map((t) => (
          <t.tag key={uuid.v4()} className={t.class}>
            {t.text}
            {t.br ? <br />: ''}
            {this.props.children}
          </t.tag>
        ))}
      </div>
    );
  }
}

