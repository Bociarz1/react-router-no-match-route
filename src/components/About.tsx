import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  return ( 
    <>
      this is ABOUT PAGE <br/>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </>
   );
}

export default About;