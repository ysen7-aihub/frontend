import React from "react";
import axios from "axios";
import _ from "lodash";
import API from "../utils/api";
import VideoDetail from "./VideoDetail";
import YoutubeSearch from "youtube-api-search";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import dummy from "../db/dummy";

const API_KEY = "AIzaSyBdfRE3QIml7NDjcTQQK4hInUZpwMak6eA";

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      images: null,
      text: null
    };

    this.videoSearch("surfboard");
  }
  videoSearch(term) {
    YoutubeSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        selectedVideo: videos[0] // 첫번째 검색결과
      });
    });
  }

  // GET
  getImage = async () => {
    await axios({
      method: "get",
      url: "http://localhost:3001/diary/text/list",
      headers: { "Content-Type": "application/json" },
      timeout: 100000
    })
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  };

  // GET
  getText = async () => {
    await axios({
      method: "get",
      url: "http://localhost:3001/diary/text/list",
      headers: { "Content-Type": "application/json" },
      timeout: 100000
    })
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <div className="main">
        <div id="features">
          <div id="result-container">
            <div className="box1">
              <motion.h2
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
                initial={{ opacity: 0, y: 50 }}
              >
                <h2 className="result-txt">당신의 결과는..?</h2>
                <br />
              </motion.h2>
            </div>

            <motion.div
              className="box2"
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
              initial={{ opacity: 0, y: 50 }}
            >
              <div className="box2">
                <div className="video">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <span></span>
                <div className="content">
                  <div>
                    {dummy.image.map(image => (
                      <li key={image.id}>
                        <img className="result_image" src={image.image} />
                      </li>
                    ))}
                  </div>
                  <div>
                    {dummy.text.map(text => (
                      <li key={text.id}>{text.txt}</li>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box3"
              animate={{
                opacity: 1
              }}
              transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
              initial={{ opacity: 0 }}
            >
              <div className="box3">
                <br />
                <br />
                <Link to="/">
                  <button className="cv-btn">다시해보기</button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
