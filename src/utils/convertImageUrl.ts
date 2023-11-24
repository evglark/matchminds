const convertImageUrl = (imageUrl: string): string =>
  `${process.env.NEXT_PUBLIC_STORAGE_API_URL}${imageUrl.replace('public', '')}`;

export { convertImageUrl };
