import React from 'react';
import Header from './Header';

export default class PageHeader extends Header {
  constructor(props) {
    super(props);

    this.state = {
      contents: [
        {
          tag: "h1",
          class: "display-3 font-anton padding-top-1em",
          contents: [
            {tag: "span", text: "H", class: "green-blue"},
            {tag: "span", text: "ORTI"},
            {tag: "span", text: "L", class: "banana-yellow"},
            {tag: "span", text: "IFE HORTICULTURAL CO LTD"}
          ]
        }
        , {
          tag: "h1",
          class: "display-4 font-bold padding-top-1em animated fadeInDown",
          contents: [
            {tag: "span", text: this.props.zhtw}

          ]
        }
        , {
          tag: "h1",
          class: "display-4 font-anton padding-bottom-1em animated fadeInDown",
          contents: [
            {tag: "span", text: this.props.us}
          ]
        }
      ]
      , mobile: {
        contents: [
          {
            tag: "h1",
            class: "display-5 font-bold padding-top-1em animated fadeIn",
            contents: [
              {tag: "span", text: this.props.zhtw}
            ]
          }
          , {
            tag: "h1",
            class: "display-5 font-anton animated fadeIn",
            contents: [
              {tag: "span", text: this.props.us}
            ]
          }
        ]
      }
    };
  }
}