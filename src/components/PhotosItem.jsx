const PhotosItem = ({ imageSrc, title, description }) => {
    return (
        <div className="card glass w-96  bg-gray-400 shadow-xl ">
            <figure>
                <img src={imageSrc} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default PhotosItem;
