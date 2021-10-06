import React from "react";

const ImagesList = (props) => {
  const Images = props.images.map((image) => {
    return <img src={image.urls.regular} alt="" />;
  });
  return (
    <div>
      <div> {Images}</div>
    </div>
  );
};

export default ImagesList;
