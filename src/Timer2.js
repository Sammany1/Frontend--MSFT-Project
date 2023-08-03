// import React from "react";


// function Timer2(props){



//     const [count, setCount] = useState(60);
  
//     useEffect(() => {
//       const timer = setInterval(() => {
//         setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
//       }, 1000);
  
//       return () => {
//         clearInterval(timer);
//       };
//     }, []);
  
//     return (
//       <div>
//         <h1>Time left: {count}</h1>
//       </div>
//     );
//   };