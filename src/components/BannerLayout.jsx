import ImageContent from "../utils/ImageContent";

const BannerLayout = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Graphics design */}
            <ImageContent
                desktopImage={"images/desktop/image-graphic-design.jpg"}
                mobileImage={"images/mobile/image-graphic-design.jpg"}
                description={"Graphic design"}
                title={"Graphic Design"}
                content={"Great design makes you memorable. We deliver artwork that underscores your brand and captures potential clients attention."}
            />
            {/* Photography */}
            <ImageContent
                desktopImage={"images/desktop/image-photography.jpg"}
                mobileImage={"images/mobile/image-photography.jpg"}
                description={"Photography"}
                title={"Photography"}
                content={"Increase your credibility by getting the most stunning, high quality photos that improve your business image."}
            />
        </div>
    );
};

export default BannerLayout;