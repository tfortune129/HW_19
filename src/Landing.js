import React, { Component } from 'react'


// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

// export default function FolderList() {
//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       <ListItem>
//         <ListItemAvatar>
//           <Avatar>
//             <ImageIcon />
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Photos" secondary="Jan 9, 2014" />
//       </ListItem>
//       <ListItem>
//         <ListItemAvatar>
//           <Avatar>
//             <WorkIcon />
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Work" secondary="Jan 7, 2014" />
//       </ListItem>
//       <ListItem>
//         <ListItemAvatar>
//           <Avatar>
//             <BeachAccessIcon />
//           </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Vacation" secondary="July 20, 2014" />
//       </ListItem>
//     </List>
//   );
// }

export default class Landing extends Component {
    constructor(){
        super();
        this.state = {
            name: 'trinisia',
            age: 1
        }
    }


    // dont have to define variables if within a class

  hello = () => {
    console.log('clicked')
    this.setState({age: this.state.age + 1})

    }


  render = () => {
    return (
      <div>


        <h1>hello, welcome back!</h1>
        {/* <h2>for: {this.state.name}</h2> */}


        <button onClick={this.hello}>+</button>
      </div>
    )
  }
}
