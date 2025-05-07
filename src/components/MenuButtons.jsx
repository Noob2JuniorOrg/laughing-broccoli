import { Link } from 'react-router-dom';

export default function MenuButtons() {
  return (
    <>
      <ul className="w-full text-white flex flex-wrap px-4 gap-12 items-center justify-center mt-20">
        <li className="li-item">
          <Link to="/equalizer" className="btn equalizer"></Link>
          <Link to="/equalizer">Equalizer</Link>
        </li>
        <li className="li-item">
          <Link to="/calculator" className="btn calculator"></Link>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="li-item">
          <Link to="/github-user" className="btn github-user"></Link>
          <Link to="/github-user">GitHub User</Link>
        </li>
        <li className="li-item">
          <Link to="/loopstudios" className="btn loopstudios"></Link>
          <Link to="/loopstudios">LoopStudios</Link>
        </li>
        <li className="li-item">
          <Link to="/e-commerce" className="btn e-commerce"></Link>
          <Link to="/e-commerce">E-Commerce</Link>
        </li>
      </ul>
    </>
  );
}
