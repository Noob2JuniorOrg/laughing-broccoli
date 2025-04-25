import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link to="/">
      <div className="back-btn">Back</div>
    </Link>
  );
}
