const PhotosItem = ({ imageSrc, title, description, onClick }) => {
    return (
        <div className="card glass w-96  bg-gray-800 shadow-2xl  ">
            <figure>
                <img src={imageSrc} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end"
                >
                    <button 
                    onClick={onClick}
                    className="btn mt-7 shadow-xl hover:text-yellow-400 ">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default PhotosItem;
