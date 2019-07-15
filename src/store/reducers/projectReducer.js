const initState = {
  projects: []
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    case 'DELETE_PROJECT':
      console.log('delete project');
      return state;
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error', action.err);
      return state;
    case 'UPDATE_PROJECT':
      console.log('update project', action.project);
      return state;
    case 'UPDATE_PROJECT_ERROR':
      console.log('update project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;
