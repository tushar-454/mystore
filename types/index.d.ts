interface fileUploadProps {
  file: File;
  ownerId: string;
  accountId: string;
  path: string;
}

declare interface ActionType {
  label: string;
  icon: string;
  value: string;
}

declare interface RenameFileProps {
  fileId: string;
  name: string;
  extension: string;
  path: string;
}
declare interface UpdateFileUsersProps {
  fileId: string;
  emails: string[];
  path: string;
}
declare interface DeleteFileProps {
  fileId: string;
  bucketFileId: string;
  path: string;
}
