import React, {Component} from 'react';
import ContactUsPageHeader from './ContactUsPageHeader';
import ContactUs from './ContactUs';

export default class ContactPage extends Component {
  render() {
    return (
      <div id="contact-page">
        <ContactUsPageHeader />
        <ContactUs />
      </div>
    );
  }
}