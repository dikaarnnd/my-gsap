import { Link, } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

export default function Header({title}) {
  return (
    <div className="flex bg-gray-700 shadow-sm w-full items-center gap-5 p-6">
      <Link
        to={`/`}
        onClick={(e) => e.stopPropagation()}
        className="text-blue-600 bg-gray-400 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
      >
        <FaAngleLeft className='w-5 h-5 hover:shadow-blue-300' />
      </Link>
      <a className="text-4xl">{title}</a>
    </div>
  )
}
