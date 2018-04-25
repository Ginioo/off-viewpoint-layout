import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import uuid from 'uuid';
import Separator from '../components/Separator';
import '../styles/BlogPosts.scss';

class BlogPosts extends Component {
  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
    this.state = {
      display: {
        us: 'none',
        zh_tw: 'block'
      },
      font: {
        us: '',
        zh_tw: 'emphasize text-gray-dark'
      }
    };
  }

  display(language) {
    switch (language) {
      case 'us':
        this.setState({
          display: {
            us: 'block',
            zh_tw: 'none'
          },
          font: {
            us: 'emphasize text-gray-dark',
            zh_tw: ''
          }
        });
        break;
      case 'zh_tw':
      default:
        this.setState({
          display: {
            us: 'none',
            zh_tw: 'block'
          },
          font: {
            us: '',
            zh_tw: 'emphasize text-gray-dark'
          }
        });
        break;
    }
  }

  render() {
    return (
      <div className="blog-post">
        <Container className="light-gray">
          <Row>
            <Col lg="1">
              Language:
            </Col>
            <Col lg="1"
                 className={`${this.state.font.zh_tw} font-roboto`}
                 onClick={() => this.display('zh_tw')}
            >
              中文
            </Col>
            <Col lg={{size: 1}}
                 className={`${this.state.font.us} font-times-new-roman`}
                 onClick={() => this.display('us')}
            >
              EN
            </Col>
          </Row>
        </Container>
        {this.props.posts.map((post) => (
          <div key={uuid.v4()}>
            <Container>
              <Row>
                <Col className="hidden-sm-down" lg={{size: 5}} xl={{size: 5, push: 1}}>
                  <img className="post-content" src={post.image.sm}/>
                </Col>
                <Col xl="6" style={{
                  display: `${this.state.display.zh_tw}`
                }}>
                  <div>
                    <h2 className="display-6 font-bold dark-gold">
                      {post.title.zh_tw}
                    </h2>
                    <h6>{post.date}</h6>
                    <img className="hidden-sm-up post-content" src={post.image.sm}/>
                    <div>{post.content.zh_tw}</div>
                  </div>
                </Col>
                <Col lg={{size: 6}} xl={{size: 6}} style={{
                  display: `${this.state.display.us}`
                }}>
                  <h2 className="display-6 font-anton dark-gold">
                    {post.title.us}
                  </h2>
                  <h6>{post.date}</h6>
                  <div className="font-times-new-roman">{post.content.us}</div>
                </Col>
              </Row>
            </Container>
            <Separator />
          </div>
        ))}


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.blogPosts.posts
  };
}

export default connect(mapStateToProps)(BlogPosts);