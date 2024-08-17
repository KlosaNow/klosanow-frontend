import { Draft, Lesson, LessonTemplateType } from "../../../types";

import dummyThumbnail1 from "../../../assets/images/notification_3.png";
import dummyThumbnail2 from "../../../assets/images/notification_2.png";
import dummyThumbnail3 from "../../../assets/images/dummyImg.png";

export const DRAFTS_MOCKDATA: Draft[] = [
  {
    id: "dft_567ujhbvftyui",
    template: LessonTemplateType.Scroll,
    title: "Biology 101",
    about:
      "This course is intended for the student interested in understanding common",
    thumbnail: dummyThumbnail1,
  },
  {
    id: "dft_tyujnbvgyui",
    template: LessonTemplateType.Slide,
    title: "Math 101",
    about:
      "This course is intended for the student interested in understanding common",
    thumbnail: dummyThumbnail2,
  },
  {
    id: "dft_bj876tgbnews",
    template: LessonTemplateType.Scroll,
    title: "Chemistry 203",
    about: "This course is intended for the student interested in Chemistry",
    thumbnail: dummyThumbnail1,
    content: ["<p>This is the content of the scroll template</p>"],
  },
  {
    id: "dft_bj789iuhbnews",
    template: LessonTemplateType.Slide,
    title: "Physics 304",
    about: "This course is intended for the student interested in Physics 304",
    thumbnail: dummyThumbnail1,
    content: [
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br/> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br/> <p> This is also part of slide three's content</p>",
    ],
  },
];

export const LESSONS_MOCKDATA: Lesson[] = [
  {
    id: "les_5yhbnj876tfghj",
    thumbnail: dummyThumbnail3,
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
    id: "les_5yhbnj876tfghj",
    thumbnail: dummyThumbnail3,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
  {
    id: "les_5yhbnj876tfghj",
    thumbnail: dummyThumbnail3,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
  {
    id: "les_5yhbnj876tfghj",
    thumbnail: dummyThumbnail3,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
  {
    id: "les_5yhbnj876tfghj",
    thumbnail: dummyThumbnail3,
    title: "Biology 101",
    tutor_bio: `This is the tutor's bio`,
    tutor_name: "Prof Atogi",
    videoUrl: "",
    content: [
      "<p>This is the content of the slide template</p>",
      "<p> This is slide two and what ever</p> <br/> <p> This is also part of slide two's content</p>",
      "<p> This is slide three </p> <br/> <p> This is also part of slide three's content</p>",
    ],
    about:
      "This course is intended for the student interested in understanding common biThis course is hello my intended for the student interested in understandin common",
  },
];
