import Cables from "../assets/static/Cables.jpg";
import Laser from "../assets/static/Laser.jpg";
import Machinery from "../assets/static/Machinery.jpg";
import MotorColor from "../assets/static/MotorColor.jpg";
import Printing from "../assets/static/Printing.jpg";
import Rework from "../assets/static/Rework.jpg";
import Video from "../assets/static/video.mp4";

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
        op: Video,
      },
      {
        op: "NoVideo",
      },
    ],
    checklist: [
      {
        checklistItem: "Test 1",
      },
      {
        checklistItem: "Test 2",
      },
    ],
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
        op: Video,
      },
      {
        op: "NoVideo",
      },
    ],
    checklist: [
      {
        checklistItem: "Test 3",
      },
      {
        checklistItem: "Test 4",
      },
    ],
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
        op: Video,
      },
      {
        op: "NoVideo",
      },
    ],
    checklist: [
      {
        checklistItem: "Test 5",
      },
      {
        checklistItem: "Test 6",
      },
    ],
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
        op: Video,
      },
      {
        op: "NoVideo",
      },
    ],
    checklist: [
      {
        checklistItem: "Test 7",
      },
      {
        checklistItem: "Test 8",
      },
    ],
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
        op: Video,
      },
      {
        op: "NoVideo",
      },
    ],
    checklist: [
      {
        checklistItem: "Test 9",
      },
      {
        checklistItem: "Test 10",
      },
    ],
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
        op: Video,
      },
      {
        op: "NoVideo",
      },
    ],
    checklist: [
      {
        checklistItem: "Test 11",
      },
      {
        checklistItem: "Test 12",
      },
    ],
  },
];

export default images;
