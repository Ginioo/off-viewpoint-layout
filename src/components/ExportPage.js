import React, {Component} from 'react';
import ExportPageHeader from './ExportPageHeader';
import SliderLeftAnimationTrigger from '../containers/SliderLeftAnimationTrigger';
import ExportPhalaenopsis from '../containers/ExportPhalaenopsis';
import ExportAdenium from '../containers/ExportAdenium';
import ExportSalix from '../containers/ExportSalix';
import Separator from './Separator';

export default class ExportPage extends Component {
  render() {
    return (
      <div id="export-page">
        <ExportPageHeader />
        <SliderLeftAnimationTrigger />
        <ExportPhalaenopsis />
        <Separator />
        <ExportAdenium gold/>
        <Separator />
        <ExportSalix/>
        <Separator />
      </div>
    );
  }
}