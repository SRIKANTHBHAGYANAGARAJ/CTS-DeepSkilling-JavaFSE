// App.js
import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  // Sample data based on the lab's final result image
  const cohort1 = {
    title: 'INTADMDF10 -.NET FSD',
    startedOn: '22-Feb-2022',
    status: 'Scheduled',
    coach: 'Aathma',
    trainer: 'Jojo Jose'
  };

  const cohort2 = {
    title: 'ADM21JF014 -Java FSD',
    startedOn: '10-Sep-2021',
    status: 'Ongoing',
    coach: 'Apoorv',
    trainer: 'Elisa Smith'
  };

  return (
    <div>
      <h1>Cohorts Details</h1>
      <CohortDetails cohort={cohort1} />
      <CohortDetails cohort={cohort2} />
    </div>
  );
}

export default App;