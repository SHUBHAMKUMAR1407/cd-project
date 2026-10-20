                                // LECTURER #5


// import React from "react";

// const App = () => {
    
//   return (   
           
//       <div>

//         <div>
//           <img src = "queen of tears_.jpg" alt ="queen of tears_.jpg" width = "20%" height ="20%"/> 
//         </div>

//          <h2> Name: Queen Of Tears</h2>
//          <h3>Rating:8.2</h3>
//          <p>Sumary:"Queen of Tears" is a K-drama about a married couple, Hong Hae-in and Baek Hyun-woo,
//            facing a marital crisis. He's a country boy who married into a wealthy chaebol family, and she's the heiress of Queens Group.
//             Their relationship deteriorates until Hae-in is diagnosed with a terminal illness,
//            prompting Hyun-woo to stay by her side and rekindle their romance</p>
     
//      </div> 
//          );              
// };         
// export default App;


                                //  --LECTURER #6  COMPONENTS IN REACT--

// import React from "react";

// const App = () => {
    
//   return (   
           
//       <div>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
       
//       </div> 
//          );              
// };         


// const Netflixseries = () => {
    
//   return (   
           
//       <div>

//         <div>
//           <img src = "queen of tears_.jpg" alt ="queen of tears_.jpg" width = "20%" height ="20%"/> 
//         </div>

//          <h2> Name: Queen Of Tears</h2>
//          <h3>Rating:8.2</h3>
//          <p>Sumary:"Queen of Tears" is a K-drama about a married couple, Hong Hae-in and Baek Hyun-woo,
//            facing a marital crisis. He's a country boy who married into a wealthy chaebol family, and she's the heiress of Queens Group.
//             Their relationship deteriorates until Hae-in is diagnosed with a terminal illness,
//            prompting Hyun-woo to stay by her side and rekindle their romance</p>
     
//      </div> 
//          );              
// };         
// export default App;

                      

                            //  --LECTURER #7 REACT FRAGMENTS--

// import { Fragment } from "react";

// const App = () => {
    
//   return (   
           
//       <Fragment>

//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
       
//       </Fragment>
//          );              
// };         


// const Netflixseries = () => {
    
//   return (   
           
//       <div>

//         <div>
//           <img src = "queen of tears_.jpg" alt ="queen of tears_.jpg" width = "20%" height ="20%"/> 
//         </div>

//          <h2> Name: Queen Of Tears</h2>
//          <h3>Rating:8.2</h3>
//          <p>Sumary:"Queen of Tears" is a K-drama about a married couple, Hong Hae-in and Baek Hyun-woo,
//            facing a marital crisis. He's a country boy who married into a wealthy chaebol family, and she's the heiress of Queens Group.
//             Their relationship deteriorates until Hae-in is diagnosed with a terminal illness,
//            prompting Hyun-woo to stay by her side and rekindle their romance</p>
     
//      </div> 
//          );              
// };         
// export default App;



                         //  --LECTURER #8 DYNAMIC VALUES-


// import { Fragment } from "react";

// const App = () => {
    
//   return (   
           
//       <Fragment>

//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
       
//       </Fragment>
//          );              
// }; 

//   // 1.VARIABLES
//   // 2.EXPRESSIONS
  


// const Netflixseries = () => {
//       const name = "Queens of tears";
//       const rating = "8.2";
//       const summary = "is a South Korean drama about a married couple, Hong Hae-in and Baek Hyun-woo, who face a crisis that reignites their love after years of marital discord";
    
//   return (   
           
//       <div>

//         <div>
//           <img src = "queen of tears_.jpg" alt ="queen of tears_.jpg" width = "20%" height ="20%"/> 
//         </div>

//          <h2>name:{name}</h2>
//          <h3>rating:{3 + 4.2}</h3>
//          <p>summary:{summary}</p>
         
     
//         </div>
//          );                        
// };         
// export default App; 

                             // 3.FUNCTION CALLS

//   import { Fragment } from "react";

// const App = () => {
    
//   return (   
           
//       <Fragment>

//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
       
//       </Fragment>
//          );              
// }; 
  

// const Netflixseries = () => {
//       const name = "Queens of tears";
//       const rating = "8.2";
//       const summary = "is a South Korean drama about a married couple, Hong Hae-in and Baek Hyun-woo, who face a crisis that reignites their love after years of marital discord";
    
     
//       const returnGenre = () => {
//         const genre = "romcom";
//         return genre;

//       }

//   return (   
           
//       <div>

//         <div>
//           <img src = "queen of tears_.jpg" alt ="queen of tears_.jpg" width = "20%" height ="20%"/> 
//         </div>

//          <h2>name:{name}</h2>
//          <h3>rating:{3 + 4.2}</h3>
//          <p>summary:{summary}</p>
//          <p>genre:{returnGenre()}</p>
         
     
//         </div>
//          );                        
// };         
// export default App; 




                  //  --LECTURER #9 --CONDITIONAL VALUES--


//   import { Fragment } from "react";

// const App = () => {
    
//   return (   
           
//       <Fragment>

//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
//        <Netflixseries/>
       
//       </Fragment>
//          );              
// }; 
  

// const Netflixseries = () => {
//       const name = "Queens of tears";
//       const rating = "8.2";
//       const summary = "is a South Korean drama about a married couple, Hong Hae-in and Baek Hyun-woo, who face a crisis that reignites their love after years of marital discord";
    
//       let age = 19;

//       // let canWatch = "not Available";
//       // if(age>=18) canWatch = "Wactch now"

//       const canWatch = () => {
//         if(age >=18) return "watchnow";
//         return "not available";
//       }

//       const returnGenre = () => {
//         const genre = "romcom";
//         return genre;

//       }

//   return (   
           
//       <div>

//         <div>
//           <img src = "queen of tears_.jpg" alt ="queen of tears_.jpg" width = "20%" height ="20%"/> 
//         </div>

//          <h2>name:{name}</h2>
//          <h3>rating:{3 + 4.2}</h3>
//          <p>summary:{summary}</p>
//          <p>genre:{returnGenre()}</p>
//          <button>{canWatch()}</button>     
         
     
//         </div>
//          );                        
// };         
// export default App; 



                 //  --LECTURER #11 --REACT IMPORT AND EXPORT EXPLAINED--


//  import { Fragment } from "react";


// import Netflixseries from "./components/netflixseries";

// const App = () => {
//   return (
//     <div>
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//     </div>
//   );
// };

// export default App;

// import Netflixseries, { Footer, header } from "./components/netflixseries";

// const App = () => {
//   return (
//     <div>
//       <header />
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//       <Netflixseries />
//       <Footer />
//     </div>
//   );
// };

                               //  --LECTURER #12  --LOOPING IN JSX--

// import Netflixseries from "./components/netflixseries";

// const App = () => {    
//   return (
//     <div>
      
//       <Netflixseries /> 
      
//     </div>
//   );
// };

// export default App;


                               //  --LECTURER #13 --PROPS IN REACT--
                            
// import Netflixseries from "./components/netflixseries";

// const App = () => {    
//   return (
//     <div>
      
//       <Netflixseries />
      
//     </div>
//   );
// };

// export default App;


                            //  --LECTURER #14 --PROPS IN REACT--


// import Netflixseries from "./components/netflixseries";

// const App = () => {    
//   return (
//     <div>
      
//       <Netflixseries />
      
//     </div>
//   );
// };

// export default App;




                                //  --LECTURER #17 --ADDING A CSS FILE IN REACT--

    
// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// const App = () => {    
//   return (
//     <div>
//       <section className="container">
//          <h1 className="card-heading">List of Best Netflix Series</h1>

//          <Netflixseries />

//       </section>
      
      
//     </div>
//   );
// }; 

// export default App;


                                     //  --LECTURER #18 --INLINE CSS STYLING IN REACT--



// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// const App = () => {    
//   return (
//     <div>
//       <section className="container">
//          <h1 className="card-heading">List of Best Netflix Series</h1>

//          <Netflixseries />

//       </section>
      
      
//     </div>
//   );
// };

// export default App;



                                          //  --LECTURER #19 --CONDITIONAL STYLING FOR DYNAMIC UIs IN REACT--



// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// const App = () => {    
//   return (
//     <div>
//       <section className="container">
//          <h1 className="card-heading">List of Best Netflix Series</h1>

//          <Netflixseries />

//       </section>
      
      
//     </div>
//   );
// };

// export default App;


                                      //  --LECTURER #20 --CSS MODULES IN REACT--



// import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// import "./components/Netflix.module.css";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
//          <h1 className="card-heading">List of Best Netflix Series</h1>

//          <Netflixseries />

//       </section>
      
      
//     </div>
//   );
// };

// export default App;




                                      //  --LECTURER #21 --STYLE COMPONENT IN REACT--



// import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// import "./components/Netflix.module.css";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
//          <h1 className="card-heading">List of Best Netflix Series</h1>

//          <Netflixseries />

//       </section>
      
      
//     </div>
//   );
// };

// export default App;



                                      //  --LECTURER #22 --TAILWIND CSS IN REACT--



// import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// import "./components/Netflix.module.css";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
//          <h1 className="card-heading">List of Best Netflix Series</h1>

//          <Netflixseries />

//       </section>
      
      
//     </div>
//   );
// };

// export default App;


                                   //  --LECTURER #23 --EVENT HANDLING IN REACT--



// // import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}

//          {/* <Netflixseries /> */}

//          <EventHandling/>

//       </section>
      
      
//     </div>
//   );
// };

// export default App;



                                   //  --LECTURER #24 --PASSING EVENT AS PROPS IN REACT--



// // import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// // import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          <EventProps/>

//       </section>
      
      
//     </div>
//   );
// };

// export default App;


                         //  --LECTURER #25 --EVENT PROPAGATION IN REACT--


// // import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// // import "./components/Netflix.module.css";
// // import { EventHandling } from "./components/EventHandling";
// // import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//         <EventPropagation/>
//       </section>
      
      
//     </div>
//   );
// };

// export default App;



                         //  --LECTURER #26 , 27 --STATE IN REACT--


// // import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// // import "./components/Netflix.module.css";
// // import { EventHandling } from "./components/EventHandling";
// // import { EventProps } from "./components/EventProps";
// // import { EventPropagation } from "./components/EventPropagation";
// import { State } from "./components/hooks/State";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          <State/>
//       </section>
      
      
//     </div>
//   );
// };

// export default App;



                         //  --LECTURER #30 --DERIVED IN STATE IN REACT--


// // import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// // import "./components/Netflix.module.css";
// // import { EventHandling } from "./components/EventHandling";
// // import { EventProps } from "./components/EventProps";
// // import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// // import { State } from "./components/hooks/State";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          <DerivedState/>
//       </section>
      
      
//     </div>
//   );
// };

// export default App;


                         //  --LECTURER #31 --LIFTING STATEUP STATE IN REACT--


// // import Netflixseries from "./components/netflixseries";
// // import "./components/Netflix.css"
// // import "./components/Netflix.module.css";
// // import { EventHandling } from "./components/EventHandling";
// // import { EventProps } from "./components/EventProps";
// // import { EventPropagation } from "./components/EventPropagation";
// // import { DerivedState } from "./components/DerivedState";
// // import { State } from "./components/hooks/State";
// import { LiftingState } from "./components/LiftStateUp";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          <LiftingState/>
//       </section>
      
      
//     </div>
//   );
// };

// export default App;



                         //  --LECTURER #34 --TODO APP IN REACT--


// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// import { State } from "./components/hooks/State";
// import { LiftingState } from "./components/LiftStateUp";
// import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch.jsx";
// import { Todo } from "./projects/Todo/Todo.jsx";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          <Keys/>
//       </section>
//     </div>
//   );
// };

// export default App;




                           //  --LECTURER #42 --KEYS IN REACT--


// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// import { State } from "./components/hooks/State";
// import { LiftingState } from "./components/LiftStateUp";
// import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch.jsx";
// import { Todo } from "./projects/Todo/Todo.jsx";
// import { Keys } from "./Keys.jsx";

 
// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          <ShortCircuitExample/>
//       </section>
//     </div>
//   );
// };

// export default App;


                           //  --LECTURER #43 , 44 --SHORT CIRCUIT AND HOOKS IN REACT--


// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// import { State } from "./components/hooks/State";
// import { LiftingState } from "./components/LiftStateUp";
// import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch.jsx";
// import { Todo } from "./projects/Todo/Todo.jsx";
// import { Keys } from "./Keys.jsx";
// import ShortCircuitExample from "./components/ShortCircuit.jsx";
 
// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          <ShortCircuitExample/>
//       </section>
//     </div>
//   );
// };

// export default App;



                           //  --LECTURER #45 USE STATE HOOKS IN REACT--


// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// import { State } from "./components/hooks/State";
// import { LiftingState } from "./components/LiftStateUp";
// import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch.jsx";
// import { Todo } from "./projects/Todo/Todo.jsx";
// import { Keys } from "./Keys.jsx";
// import ShortCircuitExample from "./components/ShortCircuit.jsx";
//  import { Counter } from "./components/hooks/useState";


// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          <Counter/>
//       </section>
//     </div>
//   );
// };

// export default App;



                           //  --LECTURER #46  USE STATE HOOKS CHALLENEGE IN REACT--


// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// import { State } from "./components/hooks/State";
// import { LiftingState } from "./components/LiftStateUp";
// import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch.jsx";
// import { Todo } from "./projects/Todo/Todo.jsx";
// import { Keys } from "./Keys.jsx";
// import ShortCircuitExample from "./components/ShortCircuit.jsx";
//  import { Counter } from "./components/hooks/useState";
// import CounterChallenge from "./components/hooks/useState/Challenge.jsx";


// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          {/* <Counter/> */}
//          <CounterChallenge/>;
//       </section>
//     </div>
//   );
// };

// export default App;




                         //  --LECTURER #47  REACT CONTROLLED VS UNCONTROLLED IN REACT--


// import Netflixseries from "./components/netflixseries";
// import "./components/Netflix.css"
// import "./components/Netflix.module.css";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { DerivedState } from "./components/DerivedState";
// import { State } from "./components/hooks/State";
// import { LiftingState } from "./components/LiftStateUp";
// import ToggleSwitch from "./projects/ToggleSwitch/ToggleSwitch.jsx";
// import { Todo } from "./projects/Todo/Todo.jsx";
// import { Keys } from "./Keys.jsx";
// import ShortCircuitExample from "./components/ShortCircuit.jsx";
// import { Counter } from "./components/hooks/useState";
// import CounterChallenge from "./components/hooks/useState/Challenge.jsx";
// import CounterChallenge from "./components/hooks/useState/Controlled";


// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          {/* <Counter/> */}
//         {/*<CounterChallenge/>*/}
            // <CounterChallenge/>
//       </section>
//     </div>
//   );
// };

// export default App;

                          

                                    //  --LECTURER #48 REGISTRATION FROM IN REACT--

// import RegistrationForm from "./components/hooks/useState/Registration";




// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          {/* <Counter/> */}
//         {/*<CounterChallenge/>*/}
//         {/* <CounterChallenge/> */} 
//         <RegistrationForm />


//       </section>
//     </div>
//   );
// };

// export default App;



                                     //  --LECTURER #49 REACT FROM HANDLING FROM IN REACT--


                                     
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";


// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          {/* <Counter/> */}
//         {/*<CounterChallenge/>*/}
//         {/* <CounterChallenge/> */} 
//         {/* <RegistrationForm /> */}
//          <RegistrationFormReact/>

//       </section>
//     </div>
//   );
// };

// export default App;



                                     //  --LECTURER #50 CREATE A LOGIN FORM IN REACT--


                                     
// import { ContactForm } from "./components/hooks/useState/ContactFrom";
// import { LoginForm } from "./components/hooks/useState/Login";

// // import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";


// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
//          {/* <Netflixseries /> */}
//          {/* <EventHandling/> */}
//          {/* <EventProps/> */}
//          {/* <EventPropagation/> */}
//          {/* <State/> */}
//          {/* <DerivedState/> */}
//          {/* <LiftingState/> */}
//          {/* <ToggleSwitch/> */}
//          {/* <Todo/> */}
//          {/* <Keys/> */}
//          {/* <Counter/> */}
//         {/*<CounterChallenge/>*/}
//         {/* <CounterChallenge/> */} 
//         {/* <RegistrationForm /> */}
//          {/* <RegistrationFormReact/> */}
//          <LoginForm/>
         
//       </section>
//     </div>
//   );
// };

// export default App;



                                     //  --LECTURER #51 CONTACT FORMS IN REACT--


                                     
// import { LoginForm } from "./components/hooks/useState/Login";
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
// import { ContactForm } from "./components/hooks/useState/ContactFrom";  


// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <LoginForm/> */}
//          <ContactForm/>
      
         
         
//       </section>
//     </div>
//   );
// };
// export default App;



                                     //  --LECTURER #52 USEEFFECT IN REACT--


                                     
// import { LoginForm } from "./components/hooks/useState/Login";
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
// import { ContactForm } from "./components/hooks/useState/ContactFrom";  
// import { ReactUseEffect } from "./components/hooks/UseEffect/index.jsx";

// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <LoginForm/> */}
//          {/* <ContactForm/> */}
//           <ReactUseEffect/>
         
//       </section>
//     </div>
//   );
// };
// export default App;


                                    //  --LECTURER #53 REACT USEEFFECT IN REACT--


                                     
// import { LoginForm } from "./components/hooks/useState/Login";
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
// import { ContactForm } from "./components/hooks/useState/ContactFrom";  
// import { ReactUseEffect } from "./components/hooks/UseEffect/index.jsx";
// import { Challenge } from "./components/hooks/UseEffect/EffectChallenge.jsx";



// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <LoginForm/> */}
//          {/* <ContactForm/> */}
//          {/* <ReactUseEffect/> */}
//           <Challenge/>
         
//       </section>
//     </div>
//   );
// };
// export default App;


                                    //  --LECTURER #54 REACT USEEFFECT IN REACT--


                                     
// import { LoginForm } from "./components/hooks/useState/Login";
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
// import { ContactForm } from "./components/hooks/useState/ContactFrom";  
// import { ReactUseEffect } from "./components/hooks/UseEffect/index.jsx";
// import { Challenge } from "./components/hooks/UseEffect/EffectChallenge.jsx";
// import { CleanUp } from "./components/hooks/UseEffect/CleanUp.jsx";



// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <LoginForm/> */}
//          {/* <ContactForm/> */}
//          {/* <ReactUseEffect/> */}
//           {/* <Challenge/> */}
//           <CleanUp/>
         
//       </section>
//     </div>
//   );
// };
// export default App;




                                    //  --LECTURER #55, 56 NOT TO FETCH API DATA IN REACT--


                                     
// import { LoginForm } from "./components/hooks/useState/Login";
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
// import { ContactForm } from "./components/hooks/useState/ContactFrom";  
// import { ReactUseEffect } from "./components/hooks/UseEffect/index.jsx";
// import { Challenge } from "./components/hooks/UseEffect/EffectChallenge.jsx";
// import { CleanUp } from "./components/hooks/UseEffect/CleanUp.jsx";
// import { HowNotToFetchApi } from "./components/hooks/UseEffect/HowNotToFetchApi.jsx";



// const App = () => {    
//   return (
//     <div>
//       <section className="container">
         
//          {/* <LoginForm/> */}
//          {/* <ContactForm/> */}
//          {/* <ReactUseEffect/> */}
//           {/* <Challenge/> */}
//           {/* <CleanUp/> */}
//           <HowNotToFetchApi />
         
//       </section>
//     </div>
//   );
// };
// export default App;



                                    //  --LECTURER #61 USEREF IN REACT--

// import { UseRef } from "./components/hooks/UseRefs";


// const App = () => {    
//   return (                         
//     <div>
//       <section className="container">
//           <UseRef/>
         
//       </section>
//     </div>
//   );
// };
// export default App;


                                    //  --LECTURER #63 USEID IN REACT--

// import { UseId } from "./components/hooks/UseID.jsx";
// import { UseRef } from "./components/hooks/UseRefs";


// const App = () => {    
//   return (                         
//     <div>
//       <section className="container">
//           {/* <UseRef/> */}
//           <UseId/>
         
//       </section>
//     </div>
//   );
// };
// export default App;



                                    //  --LECTURER #64 CONTEXT API & USECONTEXT IN REACT--


// import { BioProvider } from "./components/hooks/ContexAPI";
// import { Home } from "./components/hooks/ContexAPI/Home";

   
// const App = () => {    
//   return (  
//     <>                   
//       <BioProvider>
//          <Home/>
//       </BioProvider>
//     </>    
//   );
// }; 
// export default App;




                                    //  --LECTURER # BUILD A REACT WEBSITE WITH TAILWIND CSS IN REACT--

// import { DarkLight , ThemeProvider } from "./components/hooks/ContexAPI/DarkLight";

   
// const App = () => {    
//   return (
//       <>                   
//     <ThemeProvider>
//        <DarkLight/>
//     </ThemeProvider>
//     </> 
//   )
     
 
// }; 
// export default App;



                                    //  --LECTURER #69 USE REDUCER IN REACT--

// import { ReducerComp } from "./components/hooks/UseReducer";

   
// const App = () => {    
//   return (
//       <>                   
//      <ReducerComp/>
//     </> 
//   )
     
 
// }; 
// export default App;



                                    //  --LECTURER #71 REACTMEMO IN REACT--

// import { ReactMemo } from "./components/hooks/Memo/ReactMemo";

   
// const App = () => {    
//   return (
//       <>                   
//      <ReactMemo/>
//     </> 
//   ) 
// }; 
// export default App;



                                   //  --LECTURER #72 REACTMEMO IN REACT--

// import MemoParentComponent from "./components/hooks/Memo/UseMemo";

   
// const App = () => {    
//   return (
//       <>                   
//      <MemoParentComponent/>
//     </> 
//   )
     
 
// }; 
// export default App;




                                  //  --LECTURER #74 REACTMEMO IN REACT--

import UseCallback from "./components/hooks/Memo/UseCallback";
   
const App = () => {    
  return (
      <>                   
     <UseCallback/>
    </> 
  )
      
}; 
export default App;