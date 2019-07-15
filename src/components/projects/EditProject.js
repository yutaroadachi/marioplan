import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from "redux";

class EditProject extends Component {
  state = {
    title: this.props.project.title,
    content: this.props.project.content,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editProject(this.state, this.props.match.params.id);
    this.props.history.push('/');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    const { project, auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Edit the Project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} defaultValue={project.title} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea className="materialize-textarea" id="content" onChange={this.handleChange} defaultValue={project.content} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  return {
    project: project,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProject: (project, projectId) => dispatch(editProject(project, projectId)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' },
  ])
)(EditProject);
