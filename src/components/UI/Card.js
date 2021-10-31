import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";  

const Card = props => {
    <div className="card text-center">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link to="/" className="btn btn-primary">Go somewhere</Link>
      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
  </div>
};

export default Card;