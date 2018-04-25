import React, {Component} from 'react';
import DecoPageHeader from './DecoPageHeader';
import DecorationDryFlower from '../containers/DecorationDryFlower';
import DecorationPreserved from '../containers/DecorationPreserved';
import Separator from './Separator';

export default class DecoPage extends Component {
  render() {
    return (
      <div id="deco-page">
        <DecoPageHeader />
        <DecorationDryFlower />
        <Separator />
        <DecorationPreserved gold/>
        <Separator />
      </div>
    );
  }
}