import { Link, useNavigate } from 'react-router-dom';
import '../css/App.css';

// helper: bikin slug dari title supaya jadi path yang aman
const toSlug = (str) =>
  encodeURIComponent(
    str
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
  );

const items = [
  { route: 'gsapto', title: 'gsap.to()' },
  { route: 'gsapfrom', title: 'gsap.from()'  },
  { route: 'gsaptimeline', title:  'gsap.timeline()' },
  { route: 'gsapstagger', title:  'gsap.stagger()' },
  { route: 'gsapscrolltrigger', title:  'gsap.scrolltrigger()' },
];

export default function MainPage() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`/${toSlug(route)}`);
  };

  return (
    <div className="my-3 flex flex-col items-center">
      <div className='flex flex-col gap-6 w-2/3'>
        <strong className="text-center text-4xl">GSAP Animation</strong>
        <ul className="space-y-3">
          {items.map((item, idx) => {
            const slug = toSlug(item.route);
            return (
              <li
                key={idx}
                className="p-4 border rounded-lg hover:shadow flex justify-between items-center"
                // onClick={() => handleClick(item.route)}
              >
                <div>
                  <h2 className="text-3xl font-semibold">{item.title}</h2>
                </div>
                <Link
                  to={`/${slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="text-blue-600 underline"
                >
                  View &rarr;
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
