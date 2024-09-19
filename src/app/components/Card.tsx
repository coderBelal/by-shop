const Card = ({ imageSrc, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-center text-lg font-medium mt-2 text-black hover:text-orange-600">
        {title}
      </h2>
    </div>
  );
};

export default Card;
