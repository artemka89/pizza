import { ImageFormat, ImageGravity } from 'appwrite';

import { APPWRITE } from '@/shared/api/config/appwrite';
import { storage } from '@/shared/api/config/appwrite-config';

export const getProductImageUrl = ({
  id,
  size = 'small',
}: {
  id: string;
  size?: 'small' | 'big';
}) => {
  const sizeImage = size === 'small' ? 210 : 584;

  const url = storage.getFilePreview(
    APPWRITE.PRODUCT_BUCKET_ID,
    id,
    sizeImage,
    sizeImage,
    ImageGravity.Center,
    70,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    ImageFormat.Webp,
  );
  return url.toString();
};
