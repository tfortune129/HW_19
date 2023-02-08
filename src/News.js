// import React, { Component } from 'react'


// export default class News extends Component {
//     constructor(){

//         super();
//         this.state = {
//             articles: []
//         }
//     }
  
// // get news articles:
//     getNews = async () => {
//         const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=aa264c84decd49b3adbbfbc69c447961');
//         const data = await res.json();
//         const articles = data.articles;
//         this.setState({articles:articles})

//     }

//     componentDidMount(){
//        setTimeout(this.getNews, 4000)
//     }

// //   make a method that will show articles
//     showArticles = () =>{
//         return this.state.articles.map(a=> <div>{a.title}</div>)
//     };
  
  
// render() {
//     return (
        
//       <div>
        
//        <h1>News</h1> 
//         {/* SHOW ARTICLES HERE */}
        
//         {this.state.articles.length===0?<p>loading...</p>:this.showArticles()}
//         {/* {this.showArticles()} */}
        
//         </div>
//     )
//   }
// }


