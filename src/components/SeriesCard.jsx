
                             //  --- USE IN LEATURE 12---


// const SeriesCard = ({ curElem }) => {
//   return (
//     <li>
//       <div>
//         <div>
//           <img
//             src={curElem.img_url}
//             alt={curElem.name}
//             width="20%"
//             height="20%"
//           />
//         </div>

//         <h2>Name: {curElem.name}</h2>
//         <h3>Rating: {curElem.rating}</h3>
//         <p>Summary: {curElem.description}</p>
//         <p>Genre: {curElem.genre.join(", ")}</p>
//         <p>Cast: {curElem.cast.join(", ")}</p>
//         <a href={curElem.watch_url} target="_blank" rel="noopener noreferrer">
//           <button>Watch Now</button>
//         </a>
//       </div>
//     </li>
//   );
// };

// export default SeriesCard;
 


                             //  ---USE IN LEATURE 13---



// const SeriesCard = (props) => {
// console.log(props);
//   return (
//     <li>
//         <div>
//           <img
//             src={props.curElem.img_url}
//             alt={props.curElem.name}
//             width="20%"
//             height="20%"
//           />
//         </div>

//         <h2>Name: {props.curElem.name}</h2>
//         <h3>Rating: {props.curElem.rating}</h3>
//         <p>Summary: {props.curElem.description}</p>
//         <p>Genre: {props.curElem.genre}</p>
//         <p>Cast: {props.curElem.cast}</p>
//         <a href={props.curElem.watch_url} target="_blank">
//           <button>Watch Now</button>
//         </a>
     
//     </li>
//   );
// };

// export default SeriesCard;



                             //  ---USE IN LEATURE 14---

                             

// const SeriesCard = (props) => {
// console.log(props);
// const {id, img_url, name, rating, description, cast, genre, watch_url}=props.data;
//   return (
//     <li>
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="20%"
//             height="20%"
//           />
//         </div>

//         <h2>Name: {name}</h2>
//         <h3>Rating: {rating}</h3>
//         <p>Summary: {description}</p>
//         <p>Genre: {genre}</p> 
//         <p>Cast: {cast}</p>
//         <a href={watch_url} target="_blank">
//           <button>Watch Now</button>
//         </a>
     
//     </li>
//   );
// };
// export default SeriesCard;



                             //  ---USE IN LEATURE 17---

                             

// const SeriesCard = (props) => {
// console.log(props);
// const {id, img_url, name, rating, description, cast, genre, watch_url}=props.data;
//   return (
//     <li>
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="90%"
//             height="90%"
//           />
//         </div>

//         <h2>Name: {name}</h2>
//         <h3>Rating: {rating}</h3>
//         <p>Summary: {description}</p>
//         <p>Genre: {genre}</p> 
//         <p>Cast: {cast}</p>
//         <a href={watch_url} target="_blank">
//           <button>Watch Now</button>
//         </a>
     
//     </li>
//   );
// };
// export default SeriesCard;





                             //  ---USE IN LEATURE 18---

                             

// const SeriesCard = (props) => {
// console.log(props);
// const {id, img_url, name, rating, description, cast, genre, watch_url}=props.data;
//   return (
//     <li className="card">
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="100%"
//             height="100%"
//           />
//         </div>

//         <div className="card-content">

//         <h2> Name: {name}</h2>
//         <h3> Rating: {rating}</h3>
//         <p> Summary: {description}</p>
//         <p> Genre: {genre}</p> 
//         <p> Cast: {cast}</p>
//         <a href={watch_url} target="_blank">
//           <button>Watch Now</button>
//         </a>
        
//         </div>
//     </li>
//   );
// };
// export default SeriesCard;


                                      //  ---USE IN LEATURE 19---

                             

// const SeriesCard = (props) => {
// console.log(props);
// const {id, img_url, name, rating, description, cast, genre, watch_url}=props.data;

// const ratingClass = rating >= 8.5 ? "super_hit" : "average";
//   return (
//     <li className="card">
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="100%"
//             height="100%"
//           />
//         </div>

//         <div className="card-content">

//         <h2> Name: {name}</h2>
//         <h3> 
//            Rating: <span className= {`rating ${ratingClass}`}>{rating}</span>
//          </h3>
//         <p> Summary: {description}</p>
//         <p> Genre: {genre}</p> 
//         <p> Cast: {cast}</p>
//         <a href={watch_url} target="_blank">
//           <button>Watch Now</button>
//         </a>
        
//         </div>
//     </li>
//   );
// };
// export default SeriesCard;


                                    //  ---USE IN LEATURE 20---

// import style from "./Netflix.module.css";                          

// const SeriesCard = (props) => {
// console.log(props);
// const {id, img_url, name, rating, description, cast, genre, watch_url}=props.data;

// const ratingClass = rating >= 8.5 ? style.super_hit : style.average;
//   return (
//     <li className="style.card">
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="100%"
//             height="100%"
//           />
//         </div>

//         <div className={style["card-content"]}>

//         <h2> Name: {name}</h2>
//         <h3> 
//            Rating: <span className= {`${style.rating} ${ratingClass}`}>{rating}</span>
//          </h3>
//         <p> Summary: {description}</p>
//         <p> Genre: {genre}</p> 
//         <p> Cast: {cast}</p>
//         <a href={watch_url} target="_blank">
//           <button>Watch Now</button>
//         </a>
        
//         </div>
//     </li>
//   );
// };
// export default SeriesCard;



                                            //  ---USE IN LEATURE 21---

// import style from "./Netflix.module.css"; 
// import styled from "styled-components";                         

// const SeriesCard = ({data}) => {
// // console.log(props);
// const {img_url, name, rating, description, cast, genre, watch_url}=data;

// // const ButtonThapa = styled.button(
// //   {
// //   padding: "1.2rem 2.4rem",
// //   border: "none",
// //   fontSize: "1.6rem",
// //   backgroundColor:`${rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"}`,
// //   color: "var(--btn-color)",
// //   fonWeight: "bold",
// //   cursor:" pointer "
// //   });

//     const ButtonThapa = styled.button`
//       padding: 1.2rem 2.4rem;
//       border: none;
//       font-Size: 1.6rem;
//       background-Color: ${(props) => 
//       props.rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"},
//       color: var(--red-color);
//       font-Weight: bold;
//       cursor: pointer;
//       `;

//    const Rating = styled.h3`
//       font-size: 1.6rem;
//       color: #7dcea0;
//       text-transform: capitalize;
//    `; 
 
// const ratingClass = rating >= 8.5 ? style.super_hit : style.average;
 
//   return (
//     <li className="style.card">
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="100%"
//             height="100%"
//           />
//         </div>

//         <div className={style["card-content"]}>
//         <h2> Name: {name}</h2>
//         <Rating> 
//            Rating: 
//            <span className= {`${style.rating} ${ratingClass}`}>{rating}</span>
//         </Rating>
//         <p> Summary: {description}</p>
//         <p> Genre: {genre.join(",")}</p> 
//         <p> Cast: {cast.join(",")}</p>
//         <a href={watch_url} target="_blank">
//           {/* <button>Watch Now</button> */}
//           <ButtonThapa>watch now </ButtonThapa>
//         </a>
        
//         </div>
//     </li>
//   );
// };
// export default SeriesCard;



                                    //  ---USE IN LEATURE 22---

// import style from "./Netflix.module.css"; 
// import styled from "styled-components";                         

// const SeriesCard = ({data}) => {
// // console.log(props);
// const {img_url, name, rating, description, cast, genre, watch_url}=data;

// // const ButtonThapa = styled.button(
// //   {
// //   padding: "1.2rem 2.4rem",
// //   border: "none",
// //   fontSize: "1.6rem",
// //   backgroundColor:`${rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"}`,
// //   color: "var(--btn-color)",
// //   fonWeight: "bold",
// //   cursor:" pointer "
// //   });
// // 

// const ButtonThapa = styled.button`
//       padding: 1.2rem 2.4rem;
//       border: none;
//       font-Size: 1.6rem;
//       background-Color: ${(props) => 
//       props.rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"},
//       color: var(--red-color);
//       font-Weight: bold;
//       cursor: pointer;
//       `;

// const Rating = styled.h3`
//       font-size: 1.6rem;
//       color: #7dcea0;
//       text-transform: capitalize;
//    `; 
 
// const ratingClass = rating >= 8.5 ? style.super_hit : style.average;
 
//   return (
//     <li className="style.card">
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="100%"
//             height="100%"
//           />
//         </div>

//         {/* <div className={style["card-content"]}> */}
//         <div className= "flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
//         <h2> Name: {name}</h2>
//         <Rating> 
//            Rating: 
//            <span className= {`${style.rating} ${ratingClass}`}>{rating}</span>
//         </Rating>
//         <p className="text-3xl font-bold underline text-cyan-700"> Summary: {description}</p>
//         <p> Genre: {genre.join(",")}</p> 
//         <p> Cast: {cast.join(",")}</p>
//         <a href={watch_url} target="_blank">
//           {/* <button>Watch Now</button> */}
//           <ButtonThapa>watch now </ButtonThapa>
//         </a>
        
//         </div>
//     </li>
//   );
// };
// export default SeriesCard;



                                    //  ---USE IN LEATURE 23---

// import style from "./Netflix.module.css"; 
// import styled from "styled-components";                         

// const SeriesCard = ({data}) => {
// // console.log(props);
// const {img_url, name, rating, description, cast, genre, watch_url}=data;

// // const ButtonThapa = styled.button(
// //   {
// //   padding: "1.2rem 2.4rem",
// //   border: "none",
// //   fontSize: "1.6rem",
// //   backgroundColor:`${rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"}`,
// //   color: "var(--btn-color)",
// //   fonWeight: "bold",
// //   cursor:" pointer "
// //   });
// // 

// const ButtonThapa = styled.button`
//       padding: 1.2rem 2.4rem;
//       border: none;
//       font-Size: 1.6rem;
//       background-Color: ${(props) => 
//       props.rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"},
//       color: var(--red-color);
//       font-Weight: bold;
//       cursor: pointer;
//       `;

// const Rating = styled.h3`
//       font-size: 1.6rem;
//       color: #7dcea0;
//       text-transform: capitalize;
//    `; 
 
// const ratingClass = rating >= 8.5 ? style.super_hit : style.average;
 
//   return (
//     <li className="style.card">
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="100%"
//             height="100%"
//           />
//         </div>

//         {/* <div className={style["card-content"]}> */}
//         <div className= "flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
//         <h2> Name: {name}</h2>
//         <Rating> 
//            Rating: 
//            <span className= {`${style.rating} ${ratingClass}`}>{rating}</span>
//         </Rating>
//         <p className="text-3xl font-bold underline text-cyan-700"> Summary: {description}</p>
//         <p> Genre: {genre.join(",")}</p> 
//         <p> Cast: {cast.join(",")}</p>
//         <a href={watch_url} target="_blank">
//           {/* <button>Watch Now</button> */}
//           <ButtonThapa>watch now </ButtonThapa>
//         </a>
        
//         </div>
//     </li>
//   );
// };
// export default SeriesCard;



                                    //  ---USE IN LEATURE 24---

// import style from "./Netflix.module.css"; 
// import styled from "styled-components";                         

// const SeriesCard = ({data}) => {
// // console.log(props);
// const {img_url, name, rating, description, cast, genre, watch_url}=data;

// // const ButtonThapa = styled.button(
// //   {
// //   padding: "1.2rem 2.4rem",
// //   border: "none",
// //   fontSize: "1.6rem",
// //   backgroundColor:`${rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"}`,
// //   color: "var(--btn-color)",
// //   fonWeight: "bold",
// //   cursor:" pointer "
// //   });
// // 

// const ButtonThapa = styled.button`
//       padding: 1.2rem 2.4rem;
//       border: none;
//       font-Size: 1.6rem;
//       background-Color: ${(props) => 
//       props.rating >= 8.5 ? "#16dc97ff" : "#3089e3ff"},
//       color: var(--red-color);
//       font-Weight: bold;
//       cursor: pointer;
//       `;

// const Rating = styled.h3`
//       font-size: 1.6rem;
//       color: #7dcea0;
//       text-transform: capitalize;
//    `; 
 
// const ratingClass = rating >= 8.5 ? style.super_hit : style.average;
 
//   return (
//     <li className="style.card">
//         <div>
//           <img
//             src={img_url} 
//             alt={name}
//             width="100%"
//             height="100%"
//           />
//         </div>

//         {/* <div className={style["card-content"]}> */}
//         <div className= "flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
//         <h2> Name: {name}</h2>
//         <Rating> 
//            Rating: 
//            <span className= {`${style.rating} ${ratingClass}`}>{rating}</span>
//         </Rating>
//         <p className="text-3xl font-bold underline text-cyan-700"> Summary: {description}</p>
//         <p> Genre: {genre.join(",")}</p> 
//         <p> Cast: {cast.join(",")}</p>
//         <a href={watch_url} target="_blank">
//           {/* <button>Watch Now</button> */}
//           <ButtonThapa>watch now </ButtonThapa>
//         </a>
        
//         </div>
//     </li>
//   );
// };
// export default SeriesCard;