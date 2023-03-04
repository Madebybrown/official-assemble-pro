import Cables from "../assets/static/Cables.jpg";
import Laser from "../assets/static/Laser.jpg";
import Machinery from "../assets/static/Machinery.jpg";
import MotorColor from "../assets/static/MotorColor.jpg";
import Printing from "../assets/static/Printing.jpg";
import Rework from "../assets/static/Rework.jpg";

const images = [
  {
    id: "1",
    src: Cables,
    alt: "Cables",
    articles: {
      artnum: "60124-465",
      artname: "mc6s 4x10",
      amount: "4",
      location: "62-01-04",
    },
    video: "test 4, test 5, test 6", // Connected to imported video
    checklist: "test 7, test 8, test 9",
    instructions: "test 11, test 12, test 13",
  },
  {
    id: "2",
    src: Laser,
    alt: "Laser",
    articles: {
      artnum: "34324-888",
      artname: "Front Panel",
      amount: "1",
      location: "62-03-03",
    },
    video: "test 17, test 18, test 19",
    checklist: "test 20, test 21, test 22",
    instructions: "test 23, test 24, test 25",
  },
  {
    id: "3",
    src: Machinery,
    alt: "Machinery",
    articles: {
      artnum: "60121-565",
      artname: "mc6s 3x20",
      amount: "2",
      location: "62-05-04",
    },
    video: "test 29, test 30, test 31",
    checklist: "test 32, test 33, test 34",
    instructions: "test 35, test 36, test 37",
  },
  {
    id: "4",
    src: MotorColor,
    alt: "MotorColor",
    articles: {
      artnum: "88124-465",
      artname: "Lock King m4",
      amount: "4",
      location: "62-01-04",
    },
    video: "test  41, test  42, test  43",
    checklist: "test  44, test  45, test  46",
    instructions: "test  47, test  48, test  49",
  },
  {
    id: "5",
    src: Printing,
    alt: "Printing",
    articles: {
      artnum: "33123-465",
      artname: "Spacer m4",
      amount: "1",
      location: "62-01-04",
    },
    video: "test 53, test 54, test 55",
    checklist: "test 56, test 57, test 58",
    instructions: "test 59, test 60, test 61",
  },
  {
    id: "6",
    src: Rework,
    alt: "Rework",
    articles: {
      artnum: "55362-372",
      artname: "Base Plate",
      amount: "1",
      location: "62-01-04",
    },
    video: "test 65, test 66, test 67",
    checklist: "test 68, test 69, test 70",
    instructions: "test 71, test 72, test 73",
  },
];

export default images;
