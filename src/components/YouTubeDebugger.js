// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {

    constructor() {
        super()
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
        // console.log(e.target.className === "bitrate")
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
            }
        })
    }

    changeVideoResolution = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            video: {
                ...this.state.video,
                resolution: '720p'
            }
            }
        })
    }

    render() {
        return <div><button onClick={this.handleClick} className="bitrate">{ this.state.settings.bitrate }</button>
               <button onClick={this.changeVideoResolution} className="resolution">{ this.state.settings.video.resolution }</button>
               </div>
    }
}