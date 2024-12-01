'use client';

import { Button } from '@/components/ui/button';
import { MAX_FILE_SIZE } from '@/constants/others';
import { useToast } from '@/hooks/use-toast';
import { uploadFile } from '@/lib/actions/file.action';
import { cn, convertFileToUrl, getFileType } from '@/lib/utils';
import images from '@/public';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Thumbnail from './Thumbnail';

interface FileUploaderProps {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ ownerId, accountId, className }: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();
  const path = usePathname();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      const uploadPromise = acceptedFiles.map((file) => {
        if (file.size > MAX_FILE_SIZE) {
          setFiles((prevFiles) =>
            prevFiles.filter((prevFile) => prevFile.name !== file.name),
          );
          return toast({
            description: (
              <p className='body-2 text-white'>
                <span className='font-semibold'>{file.name} </span>
                is too large. Max file size is 50MB.
              </p>
            ),
            className: 'error-toast',
          });
        }
        return uploadFile({ file, ownerId, accountId, path }).then(
          (uploadedFile) => {
            setFiles((prevFiles) =>
              prevFiles.filter((f) => f.name !== file.name),
            );
          },
        );
      });
      await Promise.all(uploadPromise);
    },
    [ownerId, accountId, path],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemoveFile = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    fileName: string,
  ) => {
    e.stopPropagation();
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Button type='button' className={cn('uploader-button', className)}>
        <Image src={images.upload} alt='upload' width={24} height={24} />
        <p>Uplaod</p>
      </Button>
      {files.length > 0 && (
        <ul className='uploader-preview-list'>
          <h4 className='h4 text-light-100'>Uploading</h4>
          {files.map((file, index) => {
            const { type, extension } = getFileType(file.name);
            return (
              <li
                key={`${file.name}-${index}`}
                className='uploader-preview-item'
              >
                <div className='flex items-center gap-3'>
                  <Thumbnail
                    type={type}
                    extension={extension}
                    url={convertFileToUrl(file)}
                  />
                  <div className='preview-item-name'>
                    {file.name}
                    <Image
                      src={images.fileLoader}
                      alt='file loader'
                      width={80}
                      height={26}
                    />
                  </div>
                </div>
                <Image
                  src={images.remove}
                  alt='remove icon'
                  width={24}
                  height={24}
                  className='cursor-pointer'
                  onClick={(e) => handleRemoveFile(e, file.name)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
