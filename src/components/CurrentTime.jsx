import{ useEffect, useState } from "react";


let CurrentTime = () => {
  const[time,setTime] = useState(new Date());
//   console.log("Current Time painted");

  useEffect(() => {
  const intervalId = setInterval(() =>{
   setTime(new Date());
  }, 1000);


  return () => {
    clearInterval(intervalId);
    // console.log("cancelled the interval");
  }
  }, []);


  return (
    <p className="lead">
      This is the clock that shows the time : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
