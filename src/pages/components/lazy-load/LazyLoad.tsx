import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type LazyLoad = {
  image: { src:string, thumbnail:string },
  alt: string,
  className: string
}
export default function LazyLoad({ image, alt, className = "" }:LazyLoad ) {
  const { src, thumbnail } = image;
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      placeholderSrc={thumbnail}
      effect="blur"
    />
  );
}
