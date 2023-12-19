import { randomUUID } from "crypto";
import fs from "fs";

interface UploadResponse {
  filename: string;
  filePath: string;
}

export const uploadMedia = async (
  file: string,
  path?: string[],
  name?: string
): Promise<UploadResponse> => {
  const base64File = file.split(",")[1];
  const buffer = Buffer.from(base64File, "base64");
  const filename = name || randomUUID();
  const ext = getMimeType(file.split(",")[0]);
  const filePath = path ? `public/storage${path.join("/")}` : "public/storage";

  fs.mkdirSync(filePath, { recursive: true });
  fs.writeFileSync(`${filePath}/${filename}.${ext}`, buffer);

  return {
    filename: `${filename}.${ext}`,
    filePath,
  };
};

export const getMimeType = (dataUrl: string): string => {
  const dataPart = dataUrl.split(";")[0];
  return dataPart.split("/")[1];
};
