import React,{createContext,useContext} from 'react'

const  AppContext = createContext();

const AppProvider = ({children}) => {

const userData = {

  //Home Page  
    completedProject:"20",
    satisfiedClients:"19",
    experience:"01",
    onVideoTxt:"Innovative and creative solutions.",



    //Intro Card Details 
    ownerName:"Mateen Mahi",
    companyName:"InnovX Solutions",
    companyAddress:"Street no 2  Muhallah Muhammadia Ahmad Pur Sial District  Punjab Pakistan",
    cardTagline:"Innovative solutions for modern technology challenges.",
    slideOne:"founder & ceo of InnovX Solutions",
    slideTwo:"Html, CSS, Bootstrap, JS, React",
    slideThree:"frontend web developer ",
    slideFour:"IBAC Technologies are my goal",
    slideFive:"Full stack with Python (Django)",




    //About Page Data (Education Cards)

    aboutSliderTxt:"Qualification & Our Mission",

    fCardHeading:"SSC",
    fCardDuration:"2013 - 2015",
    fEduDetails:"SSC stands for Secondary School Certificate, which is an educational n qualification typically earned by students after completing 10 years of schooling in countries like India, Pakistan, and Bangladesh.",

    sCardHeading:"HSSC",
    sCardDuration:"2018 - 2020",
    sEduDetails:"HSSC stands for Higher Secondary School Certificate, which is an academic qualification awarded to students after completing 12 years of education",


    tCardHeading:"Digital literacy",
    tCardDuration:"2021",
    tEduDetails:"Digital literacy refers to the ability to use digital technology effectively and efficiently to access, evaluate, create, and communicate information and ideas in various digital contexts.",




    forthCardHeading:"Communication &amp; soft skills",
    forthCardDuration:"2020",
    forthEduDetails:"Communication and soft skills refer to a set of abilities and behaviors that enable effective and positive interactions with others, including listening, speaking, writing, and nonverbal communication.",


    fifthCardHeading:"CS 101",
    fifthCardDuration:"2023",
    fifthEduDetails:"CS 101 is an introductory course in computer science offered by many universities and online learning platforms. The course typically covers basic programming concepts, algorithms, data structures, and problem-solving techniques. It is designed to give students afoundation in computer science and prepare them for more advanced courses.",

    sixCardHeading:"Python programming",
    sixCardDuration:"2023 - In Progress",
    sixEduDetails:"Python programming is a high-level, interpreted programming language used for developing various applications such as web development, data analysis, artificial intelligence, and scientific computing.",



    //Contact Page 

    contactVideoTxt:"Let's Connect and Collaborate Today.",





   //  portfolio page

   portfolioVideoTxt1:"Welcome Here",
   portfolioVideoTxt2:"Bringing ideas to life through design.",
   portfolioVideoTxt3:"Crafting efficient and scalable code.",





    //Service Page 

    serviceVideoTxt:"Exceeding expectations with exceptional solutions."




}
  return (
    <AppContext.Provider value={userData}>{children}</AppContext.Provider>
  )
}

const objectValue = ()=>{
    const data = useContext(AppContext)

    return data;
} 


export{AppProvider,objectValue}
