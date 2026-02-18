import ImageItem from "../utils/ImageItem";

const HeroSection = () => {
    return (
        <section className="w-full bg-skyblue text-white relative">
            <div className="container mx-auto flex flex-col items-center justify-between z-10">
                {/* hero page title */}
                <div className="mt-20 text-center absolute top-10 px-3">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold">We are creatives Transform your brand</h1>
                </div>

                {/* hero page arrow */}
                <div className="mt-15 absolute top-45">
                    <img src="/images/icon-arrow-down.svg" alt="decorate arrow" />
                </div>

                {/* hero page banner */}
                <div className="w-full h-full">
                    <ImageItem desktopImage={"/images/desktop/image-header.jpg"} mobileImage={"/images/mobile/image-header.jpg"} description={"Hero"} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;