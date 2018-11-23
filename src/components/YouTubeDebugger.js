import React from 'react';
import ReactDOM from 'react-dom';

class YouTubeDebugger extends React.Component{
  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
        }
     }
    }
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings, bitrate: 12
      },
    })
  }

  handleSecondButton = () => {
    this.setState({
      settings: {
        ...this.state.settings,
      video: {
        ...this.state.settings.video, resolution: '720p'
        }
      },
    })
  }


  render(){
    return (
      <div>
    <button className='bitrate' onClick={this.handleClick}></button>

    <button className='resolution' onClick={this.handleSecondButton}></button>
  </div>

   )
  }


} //end class

export default YouTubeDebugger;
