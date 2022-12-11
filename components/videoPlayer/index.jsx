/* eslint-disable react/sort-comp */
import { Component } from 'react';
import { ControlBar, Player } from 'video-react';
import Button from '../button';
import style from './videoPlayer.module.css';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: props.videoSrc,
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  // handleStateChange(state) {
  //   this.setState({
  //     player: state,
  //   });
  // }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playBackRate = player.playBackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  render() {
    const { source } = this.state;
    return (
      <div className={style.playerRoom}>
        <Player
          ref={(player) => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={source} />
          <ControlBar autoHide={false} />
        </Player>

        <div>
          <Button onClick={this.play} title="Play" />
          <Button onClick={this.pause} title="Pause" />
          <Button onClick={this.changeVolume(0.1)} title="Increase Volume" />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
