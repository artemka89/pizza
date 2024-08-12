import { ImageFormat, ImageGravity } from 'appwrite';

import { APPWRITE } from '@/shared/api/config/appwrite';
import { storage } from '@/shared/api/config/appwrite-config';

export const getCartItemImageUrl = (imageId: string, size = 64) => {
  const url = storage.getFilePreview(
    APPWRITE.PRODUCT_BUCKET_ID,
    imageId,
    size,
    size,
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
