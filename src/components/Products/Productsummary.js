import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";  

const ProductsSummary = () => {
  return (
    <div className = "container">
      <div className="card" stylename="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Delicious Food, Delivered To You</h6>
            <p className="card-text"> Choose your preference from our broad selection of available programmers
              and enjoy 30mins of a tutoring session</p>
              <Link to="/" className="card-link">Card link</Link>
              <Link to="/" className="card-link">Another link</Link>
      </div>
      </div>
    </div>
  );
};

export default ProductsSummary;