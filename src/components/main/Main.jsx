import { useContext } from 'react';
import { assets } from '../../assets/assets';
import './Main.css';
import { Context } from '../../context/Context';

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src={
            'https://lh3.googleusercontent.com/a/ACg8ocK2NQp49CQOu6XHchYIoS_vHcbCB7ZLn0m_7coBV5RjK0A6qZo=s96-c-mo'
          }
          alt=""
        />
      </div>
      <div className="main-cotainer">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>

                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src={
                  'https://lh3.googleusercontent.com/a/ACg8ocK2NQp49CQOu6XHchYIoS_vHcbCB7ZLn0m_7coBV5RjK0A6qZo=s96-c-mo'
                }
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <img className="imgs" src={assets.gallery_icon} alt="" />
            <textarea
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto'; // balandlikni reset
                e.target.style.height =
                  Math.min(e.target.scrollHeight, 300) + 'px'; // content ga moslashadi
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt heres"
            />
            <div className="main-img">
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Google Gemini can help you, but it's not always perfect. Because
            it's a robot, not a human.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
