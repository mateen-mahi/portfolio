import React,{useState,useEffect} from "react";
import Typewriter from "typewriter-effect";
import bgPortfolio from "../../styleitems/bgPortfolio.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import Loading from "./Loading";
import { objectValue } from "../../Context Hook/Context";
import "../globalcom.css";
import "./portfolio.css";

const Home = () => {
//Context Hook Data 
const chook = objectValue();


//State for  Fetch api Cards 
const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);



//Async Function To import  data from api

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  //for every page render 

  useEffect(() => {
    getCardData();
  }, [page]);

  //scroll Event Function 

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Perform and remove  Scroll Event 

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);





  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="zoom-in">
          <video
            src={bgPortfolio}
            loop
            autoPlay
            muted
            data-aos="fade-up"
          ></video>
        </div>
        <a href="#bottom-side">
        <img
          className="scrollGif"
          data-aos="fade-up"
          src={scrollGif}
          alt="scroll Gif"
          />
          </a>
      </div>
      <div className="homeSlider">
        <Typewriter
          options={{
            strings: [
              chook.portfolioVideoTxt1,
              chook.portfolioVideoTxt2,
              chook.portfolioVideoTxt3,
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="container">
        <div className="SkillSetCon" data-aos="Zoom-in">
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">HTML &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">CSS &amp; Bootstrap  &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Java Script &nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">React JS&nbsp; 100%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={100}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Python &nbsp; 90%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={90}
              data-aos="fade-left"
            />
          </div>
          <div className="rangeContainer" data-aos="fade-up">
            <label htmlFor="AI">Artificial Intelligence &nbsp; 10%</label>
            <br />
            <input
              type="range"
              id="AI"
              name="AI"
              min={0}
              max={100}
              step={1}
              value={10}
              data-aos="fade-left"
            />
          </div>
        </div>

        <div className="container api-container">
      <h1 className="text-center my-3 ">List of Cards</h1>
      <div className="container-fluid">
        <div className="row">
          {card.map((curVal, id) => {
            const { title, body } = curVal;
            return (
              <div key={id} className="col-md-4 mb-3" data-aos="flip-up">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{title.substr(0, 15)}</h5>
                    <p className="card-text">{body.substr(0, 150)}</p>
                  </div>
                  <div className="card-footer">
                    <p className="card-id">ID: {id}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>

        {loading && <Loading />}
        </div>


    </>
  );
};

export default Home;
