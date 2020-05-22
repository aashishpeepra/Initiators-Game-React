// import React from 'react';
// import './App.css';
// import Home from './containers/Home/Home';
// import {BrowserRouter,Route, useParams} from 'react-router-dom';
// import CreateId from './containers/CreateId/Create_id';
// import Survey from './containers/Survey/Survey';
// import firebase from './firebase';
// import {
//   FirebaseAuthProvider,
//   FirebaseAuthConsumer,
//   IfFirebaseUnAuthed
// } from "@react-firebase/auth";
// import firebaseApp from "firebase/app";
// import "firebase/auth";
// import {config} from './firebase';

// function App() {
//   React.useEffect(() => {
//     // const fetchData = async () => {
//     //   const db = firebase.firestore();
//     //   const data = await db.collection("users").get();
//     //   console.log(data.docs);
//     // };
//     // fetchData();
//     const db=firebase.firestore();
//     // db.collection("data2").doc('CA').set({
//     //   name:"Aashish",
//     //   state:"CA"
//     // })
// //     db.collection("data2").get().then(function(querySnapshot) {
// //       querySnapshot.forEach(function(doc) {
// //           // doc.data() is never undefined for query doc snapshots
// //           console.log(doc.id, " => ", doc.data());
// //       });
// //   });
// // db.collection("Questions").get().then(querySnapshot=>{
// //   querySnapshot.forEach(doc=>{
// //     console.log(doc.id,"=>",doc.data())
// //   })
// // })
//   }, []);
//   return (
//     // <BrowserRouter>
//     //   <div className="App">
//     //     <Route path="/fillsurvey" component={Survey}/>
//     //   <Route path="/createid" exact component={CreateId}/>
//     //   <Route path="/" exact component={Home}/>
//     // </div>
//     // </BrowserRouter>
//     <BrowserRouter>
//     <div className="App">
//             <Route path="/createid" exact component={CreateId}/>
//             <Route path="/" exact component={Home}/>
//       {/* <FirebaseAuthProvider {...config} firebase={firebaseApp}> */}
          
//             {/* <IfFirebaseUnAuthed>
//                     {console.log("jump")}
//                     {()=>{firebaseApp.app().auth().signOut();return <h1>hey</h1>}}
//                     <h1>hey</h1>
//                 </IfFirebaseUnAuthed>
//             <FirebaseAuthConsumer>
//               {({isSignedIn,firebase})=>{
//                   if(isSignedIn){
//                     console.log("Signed In");
//                     return <Route path="/fillsurvey" component={Survey}/>
//                 }
//                   else
//                   {
//                     console.log("Not Signed In");
//                     // console.log(firebaseApp.app().auth().signInAnonymously())
//                   }
//               }}
//             </FirebaseAuthConsumer>
//             </div>
//       </FirebaseAuthProvider> */}
//       </div>
//     </BrowserRouter>
    
//   );
// }

// export default App;
