import React, { Component } from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectActions';

class ProjectSummary extends Component {
  render() {
    const { project, deleteProject } = this.props;

    const handleClickDelete = () => {
      deleteProject(project.id);
    }

    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <Link to={'/project/' + project.id}>
            <span className="card-title">{project.title}</span>
          </Link>
          <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
          <p>　</p>
          <Link to={'/project/' + project.id + '/edit'}>
            <button className="btn blue lighten-1 z-depth-0">
              Edit
            </button>
          </Link>
          <span> </span>
          <button className="btn red lighten-1 z-depth-0" onClick={handleClickDelete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
  }
}

export default connect(null, mapDispatchToProps)(ProjectSummary);
