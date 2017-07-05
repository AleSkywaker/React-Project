import React, { Component } from 'react';

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
    console.log(this.refs.title.value);
    e.preventDefault();
      }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    })
    return (
      <div>
        <h3>Añadir Projecto</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <label>Titulo</label><br/>
          <input type="text" ref="title" />
          </div>
          <div>
          <label>Categoria</label><br/>
          <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
          )
      }
    }
export default AddProject;