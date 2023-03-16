import Cables from "../assets/static/Cables.jpg";
import Laser from "../assets/static/Laser.jpg";
import Machinery from "../assets/static/Machinery.jpg";
import MotorColor from "../assets/static/MotorColor.jpg";
import Printing from "../assets/static/Printing.jpg";
import Rework from "../assets/static/Rework.jpg";

import Assemble from "../assets/static/assemble.jpg";
import Electric from "../assets/static/electric.jpg";
import Lava from "../assets/static/lava.jpg";
import Line from "../assets/static/line.jpg";
import ManWoman from "../assets/static/manwoman.jpg";
import Slip from "../assets/static/slip.jpg";

const images = [
  {
    id: "1",
    src: Cables,
    alt: "Cables",
    articles: [
      {
        artnums: [
          {
            artnum: "14592-751",
          },
          {
            artnum: "26748-328",
          },
          {
            artnum: "63215-841",
          },
        ],
        artname: "MC6S 4x10",
        amount: "4",
        location: "62-01-04",
      },
      {
        artnums: [
          {
            artnum: "78934-123",
          },
          {
            artnum: "43251-765",
          },
          {
            artnum: "87461-239",
          },
        ],
        artname: "NFI6S 2x10",
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
    checklist: "Test 7, Test 8, Test 9",
  },
  {
    id: "2",
    src: Laser,
    alt: "Laser",
    articles: [
      {
        artnums: [
          {
            artnum: "31524-689",
          },
          {
            artnum: "90234-567",
          },
          {
            artnum: "74103-842",
          },
        ],
        artname: "Front Panel",
        amount: "1",
        location: "62-03-03",
      },
      {
        artnums: [
          {
            artnum: "82346-129",
          },
          {
            artnum: "65438-976",
          },
          {
            artnum: "96531-247",
          },
        ],
        artname: "Back Panel",
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
    checklist: "Test 20, Test 21, Test 22",
  },
  {
    id: "3",
    src: Machinery,
    alt: "Machinery",
    articles: [
      {
        artnums: [
          {
            artnum: "26739-421",
          },
          {
            artnum: "12346-758",
          },
          {
            artnum: "97652-341",
          },
        ],
        artname: "DBWU WUW",
        amount: "1",
        location: "62-03-03",
      },
      {
        artnums: [
          {
            artnum: "65428-934",
          },
          {
            artnum: "74128-567",
          },
          {
            artnum: "38965-412",
          },
        ],
        artname: "Top Panel",
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
    checklist: "Test 32, Test 33, Test 34",
  },
  {
    id: "4",
    src: MotorColor,
    alt: "MotorColor",
    articles: [
      {
        artnums: [
          {
            artnum: "75411-567",
          },
          {
            artnum: "61235-926",
          },
          {
            artnum: "43789-832",
          },
        ],

        artname: "Lock King m4",
        amount: "4",
        location: "62-01-04",
      },
      {
        artnums: [
          {
            artnum: "28144-777",
          },
          {
            artnum: "96524-443",
          },
          {
            artnum: "38921-139",
          },
        ],

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
        artnums: [
          {
            artnum: "74322-111",
          },
          {
            artnum: "22114-333",
          },
          {
            artnum: "97876-222",
          },
        ],

        artname: "Spacer m4",
        amount: "1",
        location: "62-01-04",
      },
      {
        artnums: [
          {
            artnum: "53442-998",
          },
          {
            artnum: "12345-678",
          },
          {
            artnum: "88777-222",
          },
        ],

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
        artnums: [
          {
            artnum: "45678-901",
          },
          {
            artnum: "99999-555",
          },
          {
            artnum: "77777-333",
          },
        ],

        artname: "Lock King m4",
        amount: "4",
        location: "62-01-04",
      },
      {
        artnums: [
          {
            artnum: "11111-222",
          },
          {
            artnum: "33333-444",
          },
          {
            artnum: "55555-666",
          },
        ],

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
  // {
  //   id: "7",
  //   src: Assemble,
  //   alt: "Assemble",
  //   articles: [
  //     {
  //       artnum: "60124-465",
  //       artname: "mc6s 4x10",
  //       amount: "4",
  //       location: "62-01-04",
  //     },
  //     {
  //       artnum: "70124-777",
  //       artname: "nfi6s 2x10",
  //       amount: "88",
  //       location: "66-03-09",
  //     },
  //   ],
  //   video: [
  //     {
  //       op: "Test 1",
  //     },
  //     {
  //       op: "Test 2",
  //     },
  //   ],
  //   checklist: "test 7, test 8, test 9",
  // },
  // {
  //   id: "8",
  //   src: Electric,
  //   alt: "Electric",
  //   articles: [
  //     {
  //       artnum: "34324-888",
  //       artname: "Front Panel",
  //       amount: "1",
  //       location: "62-03-03",
  //     },
  //     {
  //       artnum: "89462-888",
  //       artname: "back Panel",
  //       amount: "3",
  //       location: "62-03-03",
  //     },
  //   ],
  //   video: [
  //     {
  //       op: "Test 3",
  //     },
  //     {
  //       op: "Test 4",
  //     },
  //   ],
  //   checklist: "test 20, test 21, test 22",
  // },
  // {
  //   id: "9",
  //   src: Lava,
  //   alt: "Lava",
  //   articles: [
  //     {
  //       artnum: "92744-338",
  //       artname: "dbwu wuw",
  //       amount: "1",
  //       location: "62-03-03",
  //     },
  //     {
  //       artnum: "89462-888",
  //       artname: "top Panel",
  //       amount: "2",
  //       location: "62-03-03",
  //     },
  //   ],
  //   video: [
  //     {
  //       op: "Test 5",
  //     },
  //     {
  //       op: "Test 6",
  //     },
  //   ],
  //   checklist: "test 32, test 33, test 34",
  // },
  // {
  //   id: "10",
  //   src: Line,
  //   alt: "Line",
  //   articles: [
  //     {
  //       artnum: "88124-465",
  //       artname: "Lock King m4",
  //       amount: "4",
  //       location: "62-01-04",
  //     },
  //     {
  //       artnum: "82714-465",
  //       artname: "Master m55",
  //       amount: "8",
  //       location: "62-01-04",
  //     },
  //   ],
  //   video: [
  //     {
  //       op: "Test 7",
  //     },
  //     {
  //       op: "Test 8",
  //     },
  //   ],
  //   checklist: "test  44, test  45, test  46",
  // },
  // {
  //   id: "11",
  //   src: ManWoman,
  //   alt: "ManWoman",
  //   articles: [
  //     {
  //       artnum: "33123-465",
  //       artname: "Spacer m4",
  //       amount: "1",
  //       location: "62-01-04",
  //     },
  //     {
  //       artnum: "33123-465",
  //       artname: "Skrew m4",
  //       amount: "5",
  //       location: "62-01-04",
  //     },
  //   ],
  //   video: [
  //     {
  //       op: "Test 9",
  //     },
  //     {
  //       op: "Test 10",
  //     },
  //   ],
  //   checklist: "test 56, test 57, test 58",
  // },
  // {
  //   id: "12",
  //   src: Slip,
  //   alt: "Slip",
  //   articles: [
  //     {
  //       artnum: "88124-465",
  //       artname: "Lock King m4",
  //       amount: "4",
  //       location: "62-01-04",
  //     },
  //     {
  //       artnum: "82714-465",
  //       artname: "Master m55",
  //       amount: "8",
  //       location: "62-01-04",
  //     },
  //   ],
  //   video: [
  //     {
  //       op: "Test 11",
  //     },
  //     {
  //       op: "Test 12",
  //     },
  //   ],
  //   checklist: "test 68, test 69, test 70",
  // },
];

export default images;
