import React from 'react';
import './Footer.css'; // Add styling for the footer

function Footer() {
  return (
    <footer className="app-footer">
      <h3>Technology Used</h3>
      <div className="tech-container">
        <div className="tech-category">
          <h4>Backend</h4>
          <div className="tech-list">
            <img src="/images/python.png" alt="Python" />
            <img src="/images/flask.png" alt="Flask" />
            <img src="/images/tensorflow.png" alt="TensorFlow" />
            <img src="/images/pillow.png" alt="Pillow" />
            <img src="/images/numpy.png" alt="NumPy" />
            <img src="/images/api.png" alt="RESTful APIs" />
          </div>
        </div>

    

        <div className="tech-category">
          <h4>Frontend</h4>
          <div className="tech-list">
            <img src="/images/react.png" alt="React" />
            <img src="/images/javascript.png" alt="JavaScript" />
            <img src="/images/css.png" alt="CSS" />
          </div>
        </div>

        <div className="tech-category">
          <h4>Version Control</h4>
          <div className="tech-list">
            <img src="/images/git.png" alt="Git" />
            <img src="/images/github.png" alt="GitHub" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
