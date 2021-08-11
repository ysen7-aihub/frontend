import React, { useRef, useState } from "react";
import API from "../utils/api";
import axios from "axios";
function UploadText({ history }) {
  const textAreaRef = useRef(null);

  function handleTa(e) {
    e.preventDefault();
    setIsShow(!isShow);
  }
  const [isShow, setIsShow] = useState(false);
  const [txt, setTxt] = useState("");

  const onChange = e => {
    setTxt(e.target.value);
    // console.log(value);
  };

  const onSubmitText = async () => {
    await axios({
      method: "post",
      url: "http://13.124.127.167/diary/text/list",
      data: { txt: txt },
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

  return (
    <div className="main">
      <div id="features">
        <div className="photo">
          <div className="features-text">
            <h2>텍스트로 업로드하기</h2>
            <h3></h3>
            <p>
              텍스트로 일기를 써서 업로드해보세요!
              <br />
              <br />
              시간이 걸릴 수 있습니다.
            </p>
            <form onSubmit={() => onSubmitText}>
              <div className="b-container">
                <div>
                  {!isShow && (
                    <button className="cv-btn" onClick={handleTa}>
                      + 일기 추가하기
                    </button>
                  )}
                </div>
                <div>
                  {isShow && (
                    <textarea
                      className="ta"
                      type="text"
                      value={txt}
                      onChange={onChange}
                      ref={textAreaRef}
                      maxLength="200"
                    />
                  )}
                </div>
              </div>
              <button>취소</button>
              <button
                type="submit"
                onClick={() => {
                  onSubmitText();
                  history.push("/Result");
                }}
              >
                제출
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadText;
