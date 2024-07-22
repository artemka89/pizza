import { ImageFormat, ImageGravity } from 'appwrite';

import { APPWRITE } from '@/shared/constants/appwrite';
import { storage } from '@/shared/lib/config/appwrite-config';

export const getProductImageUrl = ({
  id,
  size = 'small',
}: {
  id: string;
  size?: 'small' | 'big';
}) => {
  const sizeImage = size === 'small' ? 210 : 800;

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
  return url;
};
