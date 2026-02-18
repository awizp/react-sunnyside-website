const ContentItem = ({ title, content, color }) => {

    let borderHover;
    let borderVal;

    if (color === "yellow") {
        borderHover = "hover:border-b-yellow/70";
        borderVal = "border-b-yellow/70";
    } else if (color === "red") {
        borderHover = "hover:border-b-red/70";
        borderVal = "border-b-red/70";
    } else {
        borderHover = "hover:border-b-skyblue/70";
        borderVal = "border-b-skyblue/70";
    }

    return (
        <div className="w-full px-3 sm:px-0 sm:w-[80%] flex flex-col justify-between items-start gap-10 p-10">
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold">{title}</h2>

            <p className="text-lg font-semibold text-gray-800">{content}</p>

            <button className={`uppercase text-xl font-bold border-b-4 cursor-pointer ${borderVal} md:border-b-transparent ${borderHover}`}>Learn More</button>
        </div>
    );
};

export default ContentItem;