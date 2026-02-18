import ImageItem from "../utils/ImageItem";

const ShowcaseLayout = () => {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-center items-center">

            <ImageItem desktopImage={"/images/desktop/image-gallery-milkbottles.jpg"}
                mobileImage={"/images/mobile/image-gallery-milkbottles.jpg"}
                description={"Milk bottles"}
            />

            <ImageItem desktopImage={"/images/desktop/image-gallery-orange.jpg"}
                mobileImage={"/images/mobile/image-gallery-orange.jpg"}
                description={"Orange"}
            />

            <ImageItem desktopImage={"/images/desktop/image-gallery-sugarcubes.jpg"}
                mobileImage={"/images/mobile/image-gallery-sugar-cubes.jpg"}
                description={"Sugar Cubes"}
            />

            <ImageItem desktopImage={"/images/desktop/image-gallery-cone.jpg"}
                mobileImage={"/images/mobile/image-gallery-cone.jpg"}
                description={"Cone"}
            />

        </div>
    );
};

export default ShowcaseLayout;