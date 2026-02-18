import ImageItem from './ImageItem';

const TestimonialItem = ({ desktopImage, description, content, author, role }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-6 text-center'>

            {/* testimonial banner */}
            <div className='w-15 h-15 rounded-full overflow-hidden'>
                <ImageItem desktopImage={desktopImage} description={description} />
            </div>

            {/* testimonial content */}
            <div>
                <p className='text-gray-700 text-lg'>{content}</p>
            </div>

            {/* testimonial author */}
            <div>
                <p className='text-xl font-bold'>{author}</p>
                <p className='text-gray-700'>{role}</p>
            </div>

        </div>
    );
};

export default TestimonialItem;