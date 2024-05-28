import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoad({ image, alt, className = "" }) {
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
