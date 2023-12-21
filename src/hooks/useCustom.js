import { useState } from "react";
import creativeImg_1 from "../assets/images/creative-learnings/img-1.png";
import creativeImg_2 from "../assets/images/creative-learnings/img-2.png";
import creativeImg_3 from "../assets/images/creative-learnings/img-3.png";
import creativeImg_4 from "../assets/images/creative-learnings/img-4.png";
import creativeImg_5 from "../assets/images/creative-learnings/img-5.png";
import creativeImg_6 from "../assets/images/creative-learnings/img-6.png";

const testimonialsObj = [
  {
    testimonialMsg:
      "Creativa Design Academy transformed my outlook on design. The curriculum's hands-on approach empowered me to create meaningful user experiences. The internship opportunity was a game-changer – I learned from experts and gained insights I couldn't have anywhere else. Today, I'm a confident UX designer, and it's all thanks to Creativa.",
    testimonialImg: "",
    testimonialID: "1",
  },
  {
    testimonialMsg:
      "Choosing Creativa was a pivotal moment for my career. The instructors' expertise and personalized guidance fueled my growth. I can proudly say I'm not just a UI designer anymore; I'm a problem solver.",
    testimonialImg: "",
    testimonialID: "2",
  },
  {
    testimonialMsg:
      "Creativa Academy was my design turning point. They taught me how to design things people love to use. The internship gave me real work experience. Now I'm confident in my design skills and happy I took this journey.",
    testimonialImg: "",
    testimonialID: "3",
  },
  {
    testimonialMsg:
      "As a working professional, I was hesitant to dive into a design program. Creativa's flexibility made it possible, and the results were beyond my expectations. The projects challenged me, and the mentorship fueled my growth. Now, I confidently approach design challenges, and I credit my success to Creativa's holistic approach to education.",
    testimonialImg: "",
    testimonialID: "4",
  },
];

const faqObj = [
  {
    faqID: "01",
    question: "What's the difference between UI and UX design?",
    answer:
      "UI (User Interface) design focuses on the visual elements of a digital product, ensuring it's visually appealing and easy to use. UX (User Experience) design, on the other hand, emphasizes the overall user journey, ensuring that the product is intuitive, functional, and meets user needs.",
  },
  {
    faqID: "02",
    question:
      "Is prior design experience necessary to join Creativa Design Academy?",
    answer:
      "No, prior design experience is not required. Our program is designed to cater to beginners and those looking to enhance their skills. We provide a structured learning path that starts from the basics and gradually progresses to more advanced concepts.",
  },
  {
    faqID: "03",
    question: "Is coding knowledge necessary for UI/UX design?",
    answer:
      "While coding knowledge is beneficial, it's not mandatory for UI/UX designers. Understanding the basics of coding can help you communicate more effectively with developers, but our program primarily focuses on design principles, user behavior, and design tools.",
  },
  {
    faqID: "04",
    question: "Can I take the program if I have a full-time job?",
    answer:
      "Absolutely! Our program is designed to be flexible, making it suitable for both working professionals and students. We offer a variety of schedules to accommodate different commitments, allowing you to balance your learning with your other responsibilities.",
  },
  {
    faqID: "05",
    question: "What software and tools will I learn during the program?",
    answer:
      "You will gain proficiency in industry-standard design tools such as Adobe XD, Figma, and more. Our curriculum ensures that you're equipped with the skills to confidently use these tools to create stunning designs.",
  },
  {
    faqID: "06",
    question: "How does the internship work?",
    answer:
      "After completing the program, you'll have the opportunity to intern with our partner company Digital Techworks. This hands-on experience allows you to apply what you've learned in real-world projects, gain insights into the industry, and establish connections that can be valuable for your future career.",
  },
];

const chooseCreativa = [
  {
    id: "1",
    imgs: creativeImg_1,
    title: "Creative Excellence",
    description:
      "Our courses are designed by industry experts who've worked with giants in the tech world. You'll learn the art of transforming ideas into visually stunning and user-centric designs that leave a lasting impact.",
  },
  {
    id: "2",
    imgs: creativeImg_2,
    title: "Hands-on Experience",
    description:
      "Theory is important, but practice makes perfect. Our program is tailored to ensure you get ample hands-on experience, working on real-world projects that simulate industry challenges",
  },
  {
    id: "3",
    imgs: creativeImg_3,
    title: "Holistic Approach",
    description:
      "UI and UX are two sides of the same coin. Our program delves into both aspects, equipping you with a comprehensive skill set that bridges the gap between aesthetics and functionality.",
  },
  {
    id: "4",
    imgs: creativeImg_4,
    title: "Internship at Digital Techworks",
    description:
      "Graduating from Creativa doesn't just earn you a certificate—it opens doors. Our partnership with Digital Techworks offers our graduates a unique 2-month internship opportunity. Apply your skills, gain industry insights, and establish connections that pave the way for your career.",
  },
  {
    id: "5",
    imgs: creativeImg_5,
    title: "Learn and Grow",
    description:
      "Whether you're a student exploring new horizons or a working professional seeking a dynamic shift, our program caters to all. Our flexible schedule ensures that learning aligns with your commitments.",
  },
  {
    id: "6",
    imgs: creativeImg_6,
    title: "Unleash Your Potential",
    description:
      "Elevate your creative prowess and transform your passion into a profession. Creativa nurtures your innate talents and molds you into a sought-after design expert.",
  },
];

const homeCounterValue = [
  {
    id: 1,
    value: 10,
    title: "Skilled Mentors",
  },
  {
    id: 2,
    value: 50,
    title: "Students Enrolled",
  },
  {
    id: 3,
    value: 100,
    title: "Students Placed",
  },
  {
    id: 4,
    value: 20,
    title: "Workshops Conducted",
  },
];

const aboutusCounter = [
  {
    id: 1,
    value: 10,
    title: "Years of Experience",
  },
  {
    id: 2,
    value: 50,
    title: "Successful Graduates",
  },
  {
    id: 3,
    value: 100,
    title: "Innovative Learning Technologies",
  },
  {
    id: 4,
    value: 20,
    title: "Industry Experts",
  },
];

const upComingBatchesCounter = [
  {
    id: 1,
    value: 10,
    title: "Upcoming Courses",
  },
  {
    id: 2,
    value: 50,
    title: "Seats Available",
  },
  {
    id: 3,
    value: 100,
    title: "Learning Sessions",
  },
  {
    id: 4,
    value: 20,
    title: "Experienced Instructors",
  },
];

const ourStudentsWorkCounter = [
  {
    id: 1,
    value: 10,
    title: "Industry-Leading Partnerships",
  },
  {
    id: 2,
    value: 50,
    title: "Innovative Projects Completed",
  },
  {
    id: 3,
    value: 100,
    title: "Alumni Making Their Mark",
  },
  {
    id: 4,
    value: 20,
    title: "ECutting-Edge Tools and Resources",
  },
];

const homeHeadingDetails = {
  title: "Showcasing Creativity in Action",
  description:
    "Explore the exceptional projects our students have crafted during their transformative journey. From intuitive app interfaces to captivating web designs, each project is a testament to the skills they've honed.",
};

const ourStudentWorkHeadingDetails = {
  title: "Creative Excellence on Display",
  description:
    "Experience the vibrant world of our students' creative projects. From intuitive app interfaces to captivating web designs, each project represents the skills and passion that have blossomed during their journey with Creativa.",
};

const useCustom = () => {
  const [show, setShow] = useState(false);
  const [testimonials, setTestimonials] = useState(testimonialsObj);
  const [faq, setFaq] = useState(faqObj);
  const [creativaCard, setCreativaCard] = useState(chooseCreativa);

  const [syllabus, setSyllabus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (isSyllabus) => {
    console.log(isSyllabus);
    if (isSyllabus === "syllabus") {
      setSyllabus(true);
    } else {
      setSyllabus(false);
    }
    setShow(true);
  };

  const bookMySeat = () => {
    document
      .getElementById("enrollNow")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return {
    show,
    setShow,
    handleClose,
    handleShow,
    syllabus,
    testimonials,
    faq,
    creativaCard,
    homeCounterValue,
    aboutusCounter,
    upComingBatchesCounter,
    ourStudentsWorkCounter,
    homeHeadingDetails,
    ourStudentWorkHeadingDetails,
    setTestimonials,
    setFaq,
    setCreativaCard,
    bookMySeat,
  };
};

export default useCustom;
