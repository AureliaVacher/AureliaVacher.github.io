// //React dependencies
// import React, { Component } from 'react'
// import * as firebase from 'firebase'
// import { Redirect } from 'react-router'
// //component
// import NavBar from '../Header/NavBar'
// import DashboardCard from './DashboardCard'
// import Footer from '../Footer/Footer'
// //styles
// import '../../../../styles/userApp.scss'

// class Dashboard extends Component {
//   constructor(props) {
//     super(props) 
//     let url_lenght= window.location.pathname.split('/').length
//     this.state = {
//       id_event: window.location.pathname.split('/')[url_lenght-2],
//       signIn: true,
//     }
    
//     this.LIST_CARD = [
//       {
//         title: 'Event',
//         url: `/dashboard/${this.state.id_event}/event`,
//         description: 'Here you will find all the details of your event',
//         image: 'event-background',
//         key:'1'
//       },
//       {
//         title: 'Budget',
//         url: `/dashboard/${this.state.id_event}/budget`,
//         description: 'Manage and visualize your budget',
//         image: 'budget-background',
//         key:'2'
//       },
//       {
//         title: 'Tasks',
//         url: `/dashboard/${this.state.id_event}/tasks`,
//         description: 'Manage all your tasks in a single place',
//         image: 'tasks-background',
//         key:'3'
//       }
//     ]
//   }
//   //refuse l'acces au dashboard quand l'user n'est pas connecté
//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(user => {
//       if (!user) {
//         this.setState({
//           signIn: false //quand le user est déco
//         }) 
//        //console.log('user non connecté : retour homepage') 
//       }
//     })
//     fetch('http://localhost:8888/projet_webschool_back/events/allEvents.php')
//       .then(response => response.json()) // result
//       .then(
//         result => {
//          //console.log(result)
//           this.setState({
//             isLoaded: true,
//             results: JSON.parse(JSON.stringify(result))
//           })
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         error => {
//          //console.log(error) 
//           this.setState({
//             isLoaded: true,
//             error
//           })
//         }
//       )
//   }
 
//   render() {
//     const { signIn } = this.state
//     return (
//       <div id='userAppContent'>
//         {!signIn && ( //si le form est rempli correctement
//           <Redirect to='/home'/> // redirige sur un nouveau component (path defini dans routes)
//         )}
//         <NavBar />
//         <div id='userAppCards'>
//           {this.LIST_CARD.map(item => (
//             <DashboardCard item={item} key={item.key}/>
//           ))}
//         </div>
//         <Footer />
//       </div>
//     )
//   }
// }

// export default Dashboard