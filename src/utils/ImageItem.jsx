const ImageItem = ({ desktopImage, mobileImage = "", description }) => {

    const imgStyle = "w-full h-full object-cover";

    return (
        <>
            {/* describe if component has mobile images can use picture element, */}
            {mobileImage === "" ?
                (
                    <img src={desktopImage} alt={`${description} banner`} className={imgStyle} />
                ) :
                (
                    <picture className="w-full h-full">
                        <source media="(max-width: 650px)" srcSet={mobileImage} alt={`${description} mobile banner`} className={imgStyle} />
                        <img src={desktopImage} alt={`${description} desktop banner`} className={imgStyle} />
                    </picture>
                )
            }
        </>
    );
};

export default ImageItem;