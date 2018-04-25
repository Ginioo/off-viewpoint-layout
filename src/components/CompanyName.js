import React, {Component}from 'react';
import uuid from 'uuid';
import {Container} from 'reactstrap';
import MakeUpText from './MakeUpText';
import '../styles/CompanyName.scss';

export default class CompanyName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: [
        {
          tag: "h1",
          class: "display-3 font-bold padding-top-2em animated bounceIn",
          contents: [
            // {tag: "span", text: "弘", class: "green-blue"},
            // {tag: "span", text: "大", class: "banana-yellow"},
            {tag: "span", text: "弘大園藝企業股份有限公司"}
          ]
        }
        , {
          tag: "h1",
          class: "display-3 font-anton padding-top-1em animated bounceIn",
          contents: [
            {tag: "span", text: "H", class: "green-blue"},
            {tag: "span", text: "ORTI"},
            {tag: "span", text: "L", class: "banana-yellow"},
            {tag: "span", text: "IFE HORTICULTURAL CO LTD"}
          ]
        }
        , {
          tag: "h4",
          class: "padding-top-5em",
          contents: [
            {tag: "span", text: "專業園藝產品進出口公司"}
          ]
        }
        , {
          tag: "h4",
          class: "padding-top-1em padding-bottom-4em font-roboto",
          contents: [
            {tag: "span", text: "IMPORTING & EXPORTING HORTICULTURAL PRODUCTS"}
          ]
        }
      ]
      , mobile: {
        contents: [
          {
            tag: "h1",
            class: "display-6 font-bold padding-top-1em animated fadeIn",
            contents: [
              // {tag: "span", text: "弘", class: "green-blue"},
              // {tag: "span", text: "大", class: "banana-yellow"},
              {tag: "span", text: "弘大園藝企業股份有限公司"}
            ]
          }
          , {
            tag: "h1",
            class: "display-5 font-anton animated fadeIn",
            contents: [
              {tag: "span", text: "H", class: "green-blue"},
              {tag: "span", text: "ORTI"},
              {tag: "span", text: "L", class: "banana-yellow"},
              {tag: "span", text: "IFE", br: true},
              {tag: "span", text: "HORTICULTURAL", br: true},
              {tag: "span", text: "CO LTD"},
            ]
          }
          , {
            tag: "h6",
            contents: [
              {tag: "span", text: "專業園藝產品進出口公司"}
            ]
          }
          , {
            tag: "h6",
            class: "font-roboto",
            contents: [
              {tag: "span", text: "IMPORTING & EXPORTING HORTICULTURAL PRODUCTS"}
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div id="header">
        <div className="hidden-md-down">
          <Container fluid className="header-bg-image">
            <div className="transbox">
              {this.state.contents.map((c) => (
                <MakeUpText key={uuid.v4()} contents={[c]}>
                  <MakeUpText contents={c.contents}/>
                </MakeUpText>
              ))}
            </div>
          </Container>
        </div>

        <div className="hidden-lg-up">
          <Container fluid className="header-bg-image-sm">
            <div className="transbox">
              {this.state.mobile.contents.map((c) => (
                <MakeUpText key={uuid.v4()} contents={[c]}>
                  <MakeUpText contents={c.contents}/>
                </MakeUpText>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}