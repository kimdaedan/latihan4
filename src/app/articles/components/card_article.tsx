interface CardProps {
  img: string;
  title: string;
  desc: string;
  author: string;
}


const CardArticle: React.FC<CardProps> = ({ img, title, desc, author }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={img}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <small className="text-gray-500">
          By: {author}
        </small>
      </div>
    </div>
  );
};

export default CardArticle;