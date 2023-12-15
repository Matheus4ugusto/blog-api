import { randomUUID } from "crypto";
import fs from "fs";
import { fileTypeFromBuffer } from "file-type";

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
  const { ext } = await getMimeType(buffer);
  const filePath = path ? `public/storage${path.join("/")}` : "public/storage";
  fs.writeFileSync(`${filePath}/${filename}.${ext}`, buffer);

  return {
    filename,
    filePath,
  };
};

export const getMimeType = async (file: Buffer): Promise<any> => {
  const { fileTypeFromBuffer } = await import("file-type");
  const mimeResult = await fileTypeFromBuffer(file);
  if (!mimeResult) {
    throw new Error("Falha ao ler buffer");
  }
  return mimeResult;
};
