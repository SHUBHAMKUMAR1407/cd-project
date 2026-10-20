// const Netflixseries = () => {
//   const name = "Queens of Tears";
//   const rating = "8.2";
//   const summary =
//     "is a South Korean drama about a married couple, Hong Hae-in and Baek Hyun-woo, who face a crisis that reignites their love after years of marital discord";

//   let age = 19;

//   const canWatch = () => {
//     if (age >= 18) return "Watch Now";
//     return "Not Available";
//   };

//   const returnGenre = () => {
//     const genre = "Romcom";
//     return genre;
//   };
 
// const Netflixseries = () => {

//   return (
//     <div>
//       <div>
//         <img src="queen of tears_.jpg" alt="queen of tears" width="20%" height="20%" />
//       </div>

//       <h2>Name: {name}</h2>
//       <h3>Rating: {rating}</h3>
//       <p>Summary: {summary}</p>
//       <p>Genre: {returnGenre()}</p>
//       <button>{canWatch()}</button>
//     </div>
//   );
// };
 
// export const Footer = () => {

//    return <p> copyright @thapatechnical </p>;

// };

// export const header = () => {

//    return <p> copyright @thapatechnical </p>;

// };

// export default Netflixseries;



                              // ---USE IN LEATURE 12---



// import seriesData from "../api/seriesData.json";

// const Netflixseries = () => {
//   return (
     
//   <ul> 
//     {
//       seriesData.map((curElem) => {
//     return(
//     <li key={curElem.id}>

//     <div>
//       <div>
//         <img
//           src={curElem.img_url}
//           alt="curElem.name"
//           width="20%"
//           height="20%"
//         />
//       </div>

//       <h2>Name: {curElem.name}</h2>
//       <h3>Rating: {curElem.rating}</h3>
//       <p>Summary: {curElem.description}</p>
//       <p>Genre: {curElem.genre.join(", ")}</p>
//       <p>Cast: {curElem.cast.join(", ")}</p>
//       <a href={curElem.watch_url} target="_blank" rel="noopener noreferrer">
//         <button>Watch Now</button>
//       </a>
//     </div>

//     </li>
//     );
//    })}
   
//   </ul>
//   );
// };

// export default Netflixseries;



                             //  ---USE IN LEATURE 13---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul>
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} curElem={curElem} />
//       ))}
//     </ul>
//   );
// };

// export default Netflixseries;


                             //  ---USE IN LEATURE 14---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul>
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;



                           //  ---USE IN LEATURE 17---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;




                           //  ---USE IN LEATURE 18---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;



                                        //  ---USE IN LEATURE 19---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                       //  ---USE IN LEATURE 20---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                              //  ---USE IN LEATURE 21---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                              //  ---USE IN LEATURE 22---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                            //  ---USE IN LEATURE 23---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                    //  ---USE IN LEATURE 24---


// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;



                             //  ---USE IN LEATURE 25---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                            //  ---USE IN LEATURE 26 , 27---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                           //  ---USE IN LEATURE 30---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;


                         //  ---USE IN LEATURE 30---



// import seriesData from "../api/seriesData.json";
// import SeriesCard from "./SeriesCard"; // default import

// const Netflixseries = () => {
//   return (
//     <ul className="grid grid-three-cols">
//       {seriesData.map((curElem) => (
//         <SeriesCard key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//   );
// };           
// export default Netflixseries;
