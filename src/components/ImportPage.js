import React, {Component} from 'react';
import ImportPageHeader from './ImportPageHeader';
import SliderLeftAnimationTrigger from '../containers/SliderLeftAnimationTrigger';
import FetchImageResourceFromImgur from '../containers/FetchImageResourceFromImgur';
import ImportHollandAndEurope from '../containers/ImportHollandAndEurope';
import ImportAmericaAndSouthAmerica from '../containers/ImportAmericaAndSouthAmerica';
import ImportAustraliaAndNewZealand from '../containers/ImportAustraliaAndNewZealand';
import ImportSouthAfricaAndJapan from '../containers/ImportSouthAfricaAndJapan';
import Separator from '../components/Separator';

export default class ImportPage extends Component {
  render() {
    return (
      <div id="import-page">
        <ImportPageHeader />
        <FetchImageResourceFromImgur />
        <SliderLeftAnimationTrigger />
        <ImportHollandAndEurope/>
        <Separator/>
        <ImportAmericaAndSouthAmerica gold/>
        <Separator/>
        <ImportAustraliaAndNewZealand/>
        <Separator/>
        <ImportSouthAfricaAndJapan gold/>
        <Separator/>
      </div>
    );
  }
}