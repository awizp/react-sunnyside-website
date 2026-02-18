import ImageItem from "../utils/ImageItem";
import ContentItem from "../utils/ContentItem";

const StandoutSection = () => {
    return (
        <section className="w-full text-black">
            <div className="flex flex-col md:flex-row justify-center items-center">

                {/* transform banner */}
                <div className="w-full">
                    <ImageItem desktopImage={"/images/desktop/image-stand-out.jpg"} mobileImage={"/images/mobile/image-stand-out.jpg"} description={"Standout"} />
                </div>

                {/* transform content */}
                <div className="w-full flex flex-col justify-center items-center">
                    <ContentItem title={"Stand out to the right audience"}
                        content={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."}
                        color={"red"}
                    />
                </div>

            </div>
        </section>
    );
};

export default StandoutSection;