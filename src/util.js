//Media resize

export const smallImage = (imagePath, size) => {
  if (!imagePath) {
    return null; // Handle the case when imagePath is null
  }
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
    return image;
  };
  