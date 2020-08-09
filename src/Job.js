import React, {useState} from 'react'
import {Badge, Button, Card,  Collapse}  from "react-bootstrap"
import ReactMarkdown from 'react-markdown'
function Job({ job}) {

    const [open, setOpen] = useState(false)
    return (
        <Card className="mb-3 "  >
             <Card.Body>
                 <div className="d-flex justify-content-between"> 
                 <div>
                     
                     <Card.Title>
                     {job.title} <span className="text-muted"> --
                         {job.company}</span> 
                     </Card.Title>
                     
                     <Card.Subtitle className="text-muted mb-2">
                      {new Date(job.created_at).toLocaleDateString()}
                      <Badge variant='secondary' className ="m-3">{job.type}</Badge>
                     <Badge variant='secondary' >{job.location}</Badge>
                     <div style ={{wordBreak: 'break-all'}}>
                    <ReactMarkdown source={job.how_to_apply}/>
                    </div>
                     </Card.Subtitle>
                     
                     <div>
                        <img alt={job.company} 
                        src={job.company_logo}  height="50"/>  
                     </div>
                    
                 </div>
                 
                 </div>
               
            
            <Card.Text>
                <Button onClick={() => setOpen(prevOpen => !prevOpen)} 
                variant="primary" >{open ? "Hide": "View More"}</Button>
            </Card.Text>
            <Collapse in={open}>
            <div className="mt-4">
                <ReactMarkdown source={job.description}/>
            </div>
            </Collapse>
             </Card.Body>
          
        </Card>
    )
}

export default Job  
