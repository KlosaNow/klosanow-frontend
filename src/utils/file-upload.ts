import { mediaRoute } from "src/data/apiUrl";
import { AxiosInstance as Axios } from "./axios";
import { getToken } from "./constant";

interface UploadFileRequest {
  status: string;
  message: string;
  data: {
    videoUrl: string;
    videoSize: number;
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

  let response = responseData[FileUploadResponseStatus.Failed];

  const byte = 1024;

  const size = file.size / byte;

  const fileSizeLimit = {
    image: 2000,
    video: 5000,
    audio: 2000,
  };

  if (
    !file.type.includes("video") ||
    !file.type.includes("audio") ||
    !file.type.includes("image")
  ) {
    response = responseData[FileUploadResponseStatus.Invalid];
  }

  if (file.type.includes("video") && size > fileSizeLimit.video) {
    response = responseData[FileUploadResponseStatus.Failed];
  } else {
    response = responseData[FileUploadResponseStatus.Success];
  }

  if (file.type.includes("audio") && size > fileSizeLimit.audio) {
    response = responseData[FileUploadResponseStatus.Failed];
  } else {
    response = responseData[FileUploadResponseStatus.Success];
  }

  if (file.type.includes("image")) {
    response = responseData[FileUploadResponseStatus.Failed];
  } else {
    response = responseData[FileUploadResponseStatus.Success];
  }

  return response;
};

export const uploadFile: UploadFileAction = async (file: File) => {
  const token = getToken();

  const validator = validateFile(file);

  if (validator.status !== FileUploadResponseStatus.Success) {
    return {
      ...validator,
      data: null,
    };
  } else {
    const res = await Axios.post(mediaRoute, file, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res)
      return {
        status: FileUploadResponseStatus.Failed,
        message: "Something went worgn",
        data: null,
      };

    return {
      ...validator,
      data: res.data,
    };
  }
};

export const deletedFile = async (fileUrl: string) => {
  const token = getToken();

  const res = await Axios.delete(mediaRoute, {
    data: {
      fileUrl,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
