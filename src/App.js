import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormWeight from './components/FormWeight';

function App() {
  return (
    <div>
      <h4 className="lead" style={{textAlign:'center',  color:'#DC143C'}}>Meu peso em....</h4>
       <FormWeight />
        
    </div>
  );
}

export default App;
