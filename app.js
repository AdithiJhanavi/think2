
const container = document.getElementById('react-container');
ReactDOM.render("Hello!!!!! Welcome to React",container);

const Container = () =>{
  return React.createElement(`div`,null,`Hey Kalvian!!! Welcome to React Learning`,
     React.createElement(`div`,null,`Let's goooo`)
     );
}
const containerTwo = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),containerTwo);

class ReactContainer extends React.Component{
    render(){
        return React.createElement(`div`,null,`Hey Kalvian`,
        React.createElement(`div`,null,`Let's goooo and enjoy these classes`)
        );
    }
}
const containerThree = document.getElementById('react-container');
ReactDOM.render(React.createElement(ReactContainer),container);
  