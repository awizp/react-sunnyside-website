import ImageItem from "../utils/ImageItem";
import ContentItem from "../utils/ContentItem";

const TransformSection = () => {
    return (
        <section className="w-full text-black">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">

                {/* transform content */}
                <div className="w-full flex flex-col justify-center items-center">
                    <ContentItem title={"Transform your brand"}
                        content={"We are a full service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."}
                        color={"yellow"}
                    />
                </div>

                {/* transform banner */}
                <div className="w-full">
                    <ImageItem desktopImage={"/images/desktop/image-transform.jpg"} mobileImage={"/images/mobile/image-transform.jpg"} description={"Transform"} />
                </div>

            </div>
        </section>
    );
};

export default TransformSection;