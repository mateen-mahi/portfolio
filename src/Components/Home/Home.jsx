import Intro from "../Introduction/Intro";
import bgHome from "../../styleitems/bgHome.mp4";
import scrollGif from "../../styleitems/scroll.gif";
import "../globalcom.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="videoContainer" data-aos="zoom-in">
          <video src={bgHome} loop autoPlay muted></video>
        </div>
        <div className="hometext">
          <h1>Innovative and creative solutions.</h1>
        </div>
        <img
          className="scrollGif"
          data-aos="fade-up"
          src={scrollGif}
          alt="scroll Gif"
        />
      </div>
      <Intro />
      <div className="projectHistory">
        <div className="workdetailbox" data-aos="fade-up">
          <div className="numbers">
            <p>
              002<span>+</span>
            </p>
          </div>
          <div className="projecDetail">
            <p>completed Projects</p>
          </div>
        </div>

        <div className="workdetailbox" data-aos="fade-down">
          <div className="numbers">
            <p>
              02<span>+</span>
            </p>
          </div>
          <div className="projecDetail">
            <p>Satisfied Clients</p>
          </div>
        </div>

        <div className="workdetailbox" data-aos="fade-up">
          <div className="numbers">
            <p>
              0<span>+</span>
            </p>
          </div>
          <div className="projecDetail">
            <p>YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </div>

      <div className="myStory" data-aos="flip-up">
        <h1>My Story</h1>
        <p>
          Hi, my name is Mateen Mahi, and I come from a poor family with limited
          access to education. Most people in my community, including me, had
          never even heard of a website. But I was determined to make something
          of myself and take control of my future.
          <br /> I started working at a young age and managed to save enough
          money to complete my Intermediate education. However, financial
          constraints forced me to leave college. But I didn't give up on my
          dream of getting a degree. I shared my problem with a teacher, who
          introduced me to Allama Iqbal Open University. I was thrilled to learn
          that I could study without attending classes in person. <br />
          The teacher also asked me about my future goals, and I told him that I
          wanted to work with computers in an office setting. He suggested that
          I enroll in a Bachelor of Commerce program, and I started working at
          an iron shop to earn money for my fees and family expenses while
          studying part-time.
          <br />I did well in my first semester and paid for my next semester's
          fees, but family issues forced me to leave my studies once again. I
          was feeling down and depressed, but I refused to give up on my dream.
          I borrowed a computer from a friend and started learning how to use
          Microsoft Excel and Word on YouTube. However, I quickly realized that
          I needed more guidance and direction to pursue my dreams.
          <br /> One day, I came across a technologist named Irfan Malik while
          watching Sir Javeed Iqbal's videos on YouTube. Sir Javeed had
          introduced many technologists before, but I felt a spiritual
          connection with Irfan and decided to learn from him. I borrowed money
          from two friends and managed to buy a laptop just in time for Irfan to
          upload his lectures.
          <br /> I started learning front-end development from Irfan's YouTube
          channel and quickly discovered my passion for exploring new
          technologies. Irfan taught me how to work independently and inspired
          me to set my sights on artificial intelligence. I took two courses on
          React from Meta on Coursera, followed by CS 101 from Stanford
          University. I then learned Python programming from Harvard and became
          a full-stack developer with expertise in Python and Django.
          <br />
          My love for technology never faded, and I continued to learn more
          about AI. I am now pursuing my goal of working with AI and IoT and am
          confident that I will achieve success in this field. My journey has
          not been easy, but it has taught me the power of determination and
          perseverance. I hope my story serves as an inspiration to anyone
          facing similar challenges.
          <br /> Also, I am proud to say that InnovX Solutions is the name of
          the company I co-founded with my colleagues. We are a team of
          passionate and skilled individuals who are committed to providing
          innovative solutions to our clients.
        </p>
      </div>
    </>
  );
};

export default Home;
