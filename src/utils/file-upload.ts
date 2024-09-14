import { mediaRoute } from "src/data/apiUrl";
import { AxiosInstance as Axios } from "./axios";

interface UploadFileRequest {
  status: string;
  message: string;
  data: {
    url: string;
    size: number;
  } | null;
}

type UploadFileAction = (file: File) => Promise<UploadFileRequest>;

export enum FileUploadResponseStatus {
  Success = "success",
  Failed = "failed",
  Invalid = "invalid",
}

export const validateFile = (file: File) => {
  const responseData = {
    [FileUploadResponseStatus.Success]: {
      status: FileUploadResponseStatus.Failed,
      message: `${file.name.substring(0, 10)} size is too big`,
    },
    [FileUploadResponseStatus.Failed]: {
      status: FileUploadResponseStatus.Success,
      message: `${file.name.substring(0, 10)} uploaded successfully`,
    },
    [FileUploadResponseStatus.Invalid]: {
      status: FileUploadResponseStatus.Invalid,
      message: `Invalid file type`,
    },
  };

  const byte = 1024;

  const size = Math.floor(file.size / byte);

  const fileSizeLimit = {
    image: 3000,
    video: 10000,
    audio: 5000,
  };

  const allowedTypes = ["video", "audio", "image"];

  const isVideo = file.type.includes("video") && size > fileSizeLimit.video;
  const isAudio = file.type.includes("audio") && size > fileSizeLimit.audio;
  const isImage = file.type.includes("image") && size > fileSizeLimit.image;

  if (!allowedTypes.includes(file.type.split("/")[0])) {
    return responseData[FileUploadResponseStatus.Invalid];
  }

  if (isAudio || isImage || isVideo) {
    return responseData[FileUploadResponseStatus.Success];
  } else {
    return responseData[FileUploadResponseStatus.Failed];
  }
};

export const uploadFile: UploadFileAction = async (mediaFile: File) => {
  const validator = validateFile(mediaFile);

  if (validator.status !== FileUploadResponseStatus.Success) {
    return {
      ...validator,
      data: null,
    };
  } else {
    const res = await Axios.post(
      `${mediaRoute}`,
      { mediaFile },
      {
        headers: {
          "Content-Type": 'multipart/form-data"',
        },
      }
    );

    if (res.status !== 200)
      return {
        status: FileUploadResponseStatus.Failed,
        message: "Something went wrong",
        data: null,
      };

    return res.data;
  }
};

export const deletedFile = async (fileUrl: string) => {
  const res = await Axios.delete(`${mediaRoute}/?fileURL=${fileUrl}`);

  if (res.status !== 200) {
    return {
      status: FileUploadResponseStatus.Failed,
      message: "Something went wrong",
      data: null,
    };
  } else return res.data as Omit<UploadFileRequest, "data">;
};
