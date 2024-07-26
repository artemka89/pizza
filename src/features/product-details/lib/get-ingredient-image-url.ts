import { ImageFormat, ImageGravity } from 'appwrite';

import { APPWRITE } from '@/shared/api/config/appwrite';
import { storage } from '@/shared/api/config/appwrite-config';

export const getIngredientImageUrl = ({
  id,
  size = 88,
}: {
  id: string;
  size?: number;
}) => {
  const url = storage.getFilePreview(
    APPWRITE.INGREDIENT_BUCKET_ID,
    id,
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
  return url;
};