import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/addProject'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
     this.setState({projects:[
       {
          title: 'Busisnes Website',
          category : 'Web Design'
        },
        {
          title: 'Social App',
          category : 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category : 'Web Development'
        }
     ]});
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
       <AddProject AddProject={this.handleAddProject.bind(this)} />
       <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
