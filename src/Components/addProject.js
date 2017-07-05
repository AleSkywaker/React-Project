import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{ }
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web development', 'Mobile Devolopment']
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Titulo debe estar completado');
    }else{
      this.setState({newProject:{
        id:uuid.v4(),
        title:this.refs.title.value,
        category:this.refs.category.value
      }}, function(){
      //console.log(this.state)
      this.props.AddProject(this.state.newProject)
      });
    }
    e.preventDefault();
      }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
        <h3>Añadir Projecto</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <label>Comentario</label><br/>
          <input type="text" ref="title" />
          </div>
          <div>
          <label>Categoria</label><br/>
          <select ref="category">{categoryOptions}</select>
          </div><br/>
          <input type="submit" value="Submit"/>
          <br/>
        </form>
      </div>
          )
      }
    }
export default AddProject;