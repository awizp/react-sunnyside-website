import TestimonialItem from "../utils/TestimonialItem";

const TestimonialSection = () => {
    return (
        <section className="w-full py-20">
            <div className="container mx-auto px-3 md:px-0 flex flex-col justify-center items-center gap-15">

                <h3 className="uppercase text-center text-xl md:text-2xl xl:text-3xl font-bold text-gray-800">Client Testimonials</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15 justify-center items-center">
                    {/* TestimonialItem one */}
                    <TestimonialItem desktopImage={"images/image-emily.jpg"}
                        description={"Emily"}
                        content={"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."}
                        author={"Emily R"}
                        role={"Marketing Manager"}
                    />

                    {/* TestimonialItem two */}
                    <TestimonialItem desktopImage={"images/image-thomas.jpg"}
                        description={"Thomas"}
                        content={"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."}
                        author={"Thomas S"}
                        role={"Chief Operating Officer"}
                    />

                    {/* TestimonialItem three */}
                    <TestimonialItem desktopImage={"images/image-jennie.jpg"}
                        description={"Jennie"}
                        content={"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"}
                        author={"Jennie F"}
                        role={"Business Owner"}
                    />
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;