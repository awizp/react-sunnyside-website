import ImageItem from "./ImageItem";

const ImageContent = ({ desktopImage, mobileImage, description, title, content }) => {
    return (
        <div className="w-full h-full relative">
            <ImageItem desktopImage={desktopImage} mobileImage={mobileImage} description={description} />

            <div className="w-full absolute bottom-5 flex justify-center items-center">
                <div className="w-full px-3 sm:px-0 sm:w-[80%] flex flex-col justify-center items-center text-center gap-10 p-10">
                    <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">{title}</h2>
                    <p className="text-lg font-semibold">{content}</p>
                </div>
            </div>

        </div>
    );
};

export default ImageContent;