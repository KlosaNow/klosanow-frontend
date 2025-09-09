import { Box, Flex, Image } from "@chakra-ui/react";
import {
  ChatData,
  ChatListData,
  ChatType,
  Contact,
  GroupedContact,
  StudyChatListData,
} from "../../types/studyChat";
import { colors } from "../../data/colors";
import DummyFileIllustration from "./assets/images/file.png";
import { DeleteIcon } from "./assets/svgs";
import { BsFillSendFill } from "react-icons/bs";
import { groupBy, uniqueId } from "lodash";
import { formatISO } from "date-fns";

export const getContactsListWithChar = (contacts: Contact[]) => {
  const sortedContacts = [...contacts].sort((a, b) => {
    const nameA = getContactDisplayName(a).trim()[0]?.toLowerCase() ?? "";
    const nameB = getContactDisplayName(b).trim()[0]?.toLowerCase() ?? "";

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });

  const groupedContacts = groupBy(
    sortedContacts,
    (item) =>
      `${item.firstName ?? ""} ${item.lastName ?? ""}`
        .trim()[0]
        ?.toUpperCase() ?? ""
  );

  const grouped = Object.keys(groupedContacts).map((value, keyIndex) => {
    let arr: GroupedContact;

    Object.values(groupedContacts).map((groupedContact, valueIndex) => {
      if (!groupedContact) return;

      if (keyIndex === valueIndex) {
        arr = { contactsChar: value, contacts: groupedContact };
      }
    });

    return arr!;
  });

  return grouped;
};

export const getContactDisplayName = (contact: Contact): string => {
  if (!contact) return "";

  if (contact.username) return contact.username;

  if (contact.firstName || contact.lastName) {
    return `${contact.firstName ?? ""} ${contact.lastName ?? ""}`.trim();
  }

  if ((contact as any).name) return (contact as any).name;

  return "";
};
const getTypeFromUrl = (
  value: string,
  type?: string
): "video" | "audio" | "image" | "doc" | "other" => {
  try {
    const url = new URL(value);
    const pathname = url.pathname;
    const parts = pathname.split(".");

    let extension = parts[parts.length - 1].toLowerCase();
    extension = type ? type : extension.split(/[?#]/)[0];

    const imageFormats = [
      "jpg",
      "jpeg",
      "png",
      "webp",
      "gif",
      "avif",
      "ico",
      "svg",
      "image",
    ];
    const videoFormats = ["mp4", "webm", "ogv", "vid", "video"];
    const audioFormats = [
      "audio",
      "mp3",
      "wav",
      "ogg",
      "oga",
      "aac",
      "m4a",
      "opus",
      "flac",
    ];
    const docFormats = ["pdf", "txt", "doc", "docx"];

    if (imageFormats.some((item) => extension.includes(item))) return "image";
    if (videoFormats.some((item) => extension.includes(item))) return "video";
    if (audioFormats.some((item) => extension.includes(item))) return "audio";
    if (docFormats.some((item) => extension.includes(item))) return "doc";

    return "other";
  } catch (e) {
    return "other";
  }
};

export const getUploadedDataPreview = (data: {
  url: string;
  mediaType?: string;
  handleView?: () => void;
}) => {
  const { url, mediaType, handleView } = data;
  const type = getTypeFromUrl(url, mediaType);

  if (type === "image") {
    return (
      <Box
        bg="#eee"
        borderRadius="8px"
        key={uniqueId(`img-${url}`)}
        onClick={() => handleView && handleView()}
      >
        <Image
          src={url}
          w="100%"
          h="100%"
          maxH="156px"
          borderRadius="8px"
          objectFit="contain"
          opacity="0.85"
        />
      </Box>
    );
  }

  if (type === "audio") {
    return (
      <div key={uniqueId(`audio-${url}`)} style={{ height: "50px" }}>
        <audio src={url} style={{ width: "100%", height: "100%" }} controls />
      </div>
    );
  }

  if (type === "video") {
    return (
      <video
        key={uniqueId(`video-${url}`)}
        src={url}
        style={{ width: "100%", height: "100%", maxHeight: "156px" }}
        preload="metadata"
        controls
      />
    );
  }

  if (type === "doc") {
    return (
      <Box
        bg={colors.neutral[60]}
        w="70px"
        borderRadius="8px"
        key={uniqueId(`doc-${url}`)}
      >
        <Image
          src={DummyFileIllustration}
          w="100%"
          h="100%"
          borderRadius="8px"
          objectFit="contain"
        />
      </Box>
    );
  }

  if (type === "other") {
    return (
      <a
        href={url.startsWith("http") ? url : `https://${url}`}
        target="_blank"
        rel="noopener noreferrer"
        key={uniqueId(`link-${url}`)}
      >
        <u>{url}</u>
      </a>
    );
  }
};

export const renderPreveiwAction = (send: () => void, remove?: () => void) => (
  <Flex alignItems="center" justifyContent="space-between" padding="0 10px">
    <Box as="button" padding="3px" onClick={send}>
      <BsFillSendFill />
    </Box>

    {remove && (
      <Box as="button" onClick={remove}>
        <DeleteIcon />
      </Box>
    )}
  </Flex>
);

export const transformNameToSlug = (value: string) =>
  value.split(" ").join("_").toLowerCase();

export const getChatListData = (
  chats: Array<ChatData>,
  userId: string
): ChatListData[] => {
  return chats.map((item) => {
    const recipient = item.members.filter((item) => item._id !== userId)[0];
    return {
      id: item?._id,
      createdAt: item?.createdAt,
      admin: item.members.filter((item) => item._id === userId)[0],
      recipient,
      name: `${recipient?.name ?? ""} `.trim(),
      username: `${recipient?.username ?? ""} `.trim(),
      img: recipient?.photoURL,
      slug: transformNameToSlug(
        `${recipient?.username ?? recipient?.name ?? ""}`.trim()
      ),
      last_msg_time:
        item?.lastChatMessage[0]?.createdAt || formatISO(new Date()),
      type: ChatType.Single,
      last_msg: item?.lastChatMessage[0]?.text.substring(0, 20),
    };
  });
};

export const getStudyChatListData = (
  chats: StudyChatListData[]
): ChatListData[] => {
  return chats.map((item) => {
    const owner = item.members.filter((member) => member._id === item.owner)[0];

    return {
      id: item._id,
      name: item?.title ?? owner?.username,
      username: item?.title ?? owner?.username,
      img: item?.photoUrl,
      slug: transformNameToSlug(item.title),
      last_msg_time: item?.createdAt,
      type: ChatType.Group,
      admin: owner,
      members: item?.members,
      createdAt: item?.createdAt,
    };
  });
};

export const copyText = async (value: string, toastAction: () => void) => {
  await navigator.clipboard.writeText(value);

  const timeout = setTimeout(toastAction, 500);

  return () => clearTimeout(timeout);
};
