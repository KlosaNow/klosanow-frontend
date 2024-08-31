import { Lesson } from "../../../types";

import dummyThumbnail1 from "../../../assets/images/notification_3.png";
import dummyThumbnail2 from "../../../assets/images/notification_6.png";
import dummyThumbnail3 from "../../../assets/images/dummyImg.png";

const LESSONS_MOCKDATA_ADD = {
  user: {
    _id: "usr_xcvi98765445678ikjn",
    name: "name",
    bio: "bio",
  },
  isPrivate: true,
  createdAt: "",
  updatedAt: "",
  videoSize: 123456,
  thumbnailSize: 123456,
  tag: "support",
  __v: 0,
};

export const LESSONS_MOCKDATA: Lesson[] = [
  {
    ...LESSONS_MOCKDATA_ADD,
    _id: "les_5yhbnj876tfghj",
    thumbnailUrl: dummyThumbnail3,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br> <p> This is also part of slide three's content</p>",
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br> <p> This is also part of slide three's content</p>",
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br> <p> This is also part of slide three's content</p>",
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br> <p> This is also part of slide three's content</p>",
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br> <p> This is also part of slide three's content</p>",
    ],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
  {
    _id: "les_5yhbnj876tfghj",
    ...LESSONS_MOCKDATA_ADD,
    thumbnailUrl: dummyThumbnail1,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
  {
    _id: "les_5yhbnj876tfghj",
    ...LESSONS_MOCKDATA_ADD,
    thumbnailUrl: dummyThumbnail2,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
  {
    _id: "les_5yhbnj876tfghj",
    thumbnailUrl: dummyThumbnail3,
    ...LESSONS_MOCKDATA_ADD,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
  {
    _id: "les_5yhbnj876tfghj",
    thumbnailUrl: dummyThumbnail2,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br/> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br/> <p> This is also part of slide three's content</p>",
    ],
    ...LESSONS_MOCKDATA_ADD,
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
];
