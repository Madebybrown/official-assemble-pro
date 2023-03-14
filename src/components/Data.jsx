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
    articles: [
      {
        artnum: "60124-465",
        artname: "mc6s 4x10",
        amount: "4",
        location: "62-01-04",
      },
      {
        artnum: "70124-777",
        artname: "nfi6s 2x10",
        amount: "88",
        location: "66-03-09",
      },
    ],
    video: [
      {
        op: "Test 1",
      },
      {
        op: "Test 2",
      },
    ],
    checklist: "test 7, test 8, test 9",
  },
  {
    id: "2",
    src: Laser,
    alt: "Laser",
    articles: [
      {
        artnum: "34324-888",
        artname: "Front Panel",
        amount: "1",
        location: "62-03-03",
      },
      {
        artnum: "89462-888",
        artname: "back Panel",
        amount: "3",
        location: "62-03-03",
      },
    ],
    video: [
      {
        op: "Test 3",
      },
      {
        op: "Test 4",
      },
    ],
    checklist: "test 20, test 21, test 22",
  },
  {
    id: "3",
    src: Machinery,
    alt: "Machinery",
    articles: [
      {
        artnum: "92744-338",
        artname: "dbwu wuw",
        amount: "1",
        location: "62-03-03",
      },
      {
        artnum: "89462-888",
        artname: "top Panel",
        amount: "2",
        location: "62-03-03",
      },
    ],
    video: [
      {
        op: "Test 5",
      },
      {
        op: "Test 6",
      },
    ],
    checklist: "test 32, test 33, test 34",
  },
  {
    id: "4",
    src: MotorColor,
    alt: "MotorColor",
    articles: [
      {
        artnum: "88124-465",
        artname: "Lock King m4",
        amount: "4",
        location: "62-01-04",
      },
      {
        artnum: "82714-465",
        artname: "Master m55",
        amount: "8",
        location: "62-01-04",
      },
    ],
    video: [
      {
        op: "Test 7",
      },
      {
        op: "Test 8",
      },
    ],
    checklist: "test  44, test  45, test  46",
  },
  {
    id: "5",
    src: Printing,
    alt: "Printing",
    articles: [
      {
        artnum: "33123-465",
        artname: "Spacer m4",
        amount: "1",
        location: "62-01-04",
      },
      {
        artnum: "33123-465",
        artname: "Skrew m4",
        amount: "5",
        location: "62-01-04",
      },
    ],
    video: [
      {
        op: "Test 9",
      },
      {
        op: "Test 10",
      },
    ],
    checklist: "test 56, test 57, test 58",
  },
  {
    id: "6",
    src: Rework,
    alt: "Rework",
    articles: [
      {
        artnum: "88124-465",
        artname: "Lock King m4",
        amount: "4",
        location: "62-01-04",
      },
      {
        artnum: "82714-465",
        artname: "Master m55",
        amount: "8",
        location: "62-01-04",
      },
    ],
    video: [
      {
        op: "Test 11",
      },
      {
        op: "Test 12",
      },
    ],
    checklist: "test 68, test 69, test 70",
  },
];

export default images;
