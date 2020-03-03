import React from 'react';

export default class ImageVerification extends React.Component {
  componentDidMount() {
    console.log('this.props: ', this.props);
  }

  render() {
    return (
      <div>
        Image Verification
      </div>
    );
  }
}
