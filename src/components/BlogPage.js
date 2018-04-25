import React, {Component} from 'react';
import BlogPageHeader from './BlogPageHeader';
import BlogPosts from '../containers/BlogPosts';

export default class BlogPage extends Component {
  render() {
    return (
      <div id="blog-page">
        <BlogPageHeader />
        <BlogPosts />
      </div>
    );
  }
}