import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({ items, onImageClick }) => {
return (
	<ul className={css.imageList}>
	{items.map((item) => (
	<li key={item.id}>
			<ImageCard className={css.img} image={item.urls} slug={item.slug} onClick={onImageClick} />
	</li>))}
	</ul>
		)
}

export default ImageGallery