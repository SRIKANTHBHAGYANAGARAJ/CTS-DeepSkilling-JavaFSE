// CohortDetails.jsx
import React from 'react';
// 1. Import the CSS Module
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  // 2. Define the conditional inline style logic
  // "green" if status is "ongoing", otherwise "blue"
  const headerStyle = {
    color: cohort.status.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    // 3. Apply the 'box' class from the CSS module to the container div
    <div className={styles.box}>
      
      // 4. Apply the conditional inline style to the <h3> element
      <h3 style={headerStyle}>{cohort.title}</h3>
      
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startedOn}</dd>
        
        <dt>Current Status</dt>
        <dd>{cohort.status}</dd>
        
        <dt>Coach</dt>
        <dd>{cohort.coach}</dd>
        
        <dt>Trainer</dt>
        <dd>{cohort.trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;