import React from 'react';
import SkillsView from './SkillsView';
import skills from './testList';

class Skills extends React.Component {
  render() {
    return (
      <SkillsView {...this.props} skills={skills} />
    );
  }
}

export default Skills;
