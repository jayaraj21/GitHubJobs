import React, {useState} from 'react';
import './App.css';
import UseFetchJobs from './UseFetchJobs';
import Job from './Job';
import {Container}  from "react-bootstrap"
import JobPagination from './JobPagination';
import SearchForm from './SearchForm';

function App() {
  const [params , setParams] = useState({});
  const  [page, setPage] = useState(1)
  const {jobs, loading, error} = UseFetchJobs();

 function  handleParams(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams(  prevParams => { 
      return {...prevParams, [param]: value}
     } )
  }

  return (
    <Container className="my-4">
      <h1>Jay's JOBS</h1>
      <SearchForm onParamChange = {handleParams()} params={params}/>
      <JobPagination page={page} setPage={setPage}/>
      {loading && <h1>Loading...</h1>}
     
      {error && <h1>Error... Try Again</h1>}
      <h1>{jobs.map(job => (
          <Job key={job.id} job={job}/>
      ))}</h1>
      <JobPagination page={page} setPage={setPage}/>
    </Container>
  );
}

export default App;
