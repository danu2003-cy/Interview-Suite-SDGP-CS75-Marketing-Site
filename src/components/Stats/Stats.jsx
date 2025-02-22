import React from 'react';
import { Container } from 'react-bootstrap';
import './Stats.css'

function Stats() {
  return (
    <section className="stats">
      <Container>
        <div className="row">
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Partners</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Stats;