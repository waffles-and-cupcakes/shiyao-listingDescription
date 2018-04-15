import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class HouseRules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    }
  };

  handleClick() {
    this.setState({ isShown: !this.state.isShown })
  }

  SlideBox() {
    var ruleArr = this.props.houseRules.houseRules.textBody.split('     ');
    return (
      <div id="box" key="key">
        {ruleArr.map((para) => {return <div>{para}</div>})}
      </div>
    )
  }

  render() {
    let text = this.state.isShown ? 'Hide' : 'Read all rules';
    let icon = this.state.isShown ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    let component = this.state.isShown ? this.SlideBox() : '';

    return (
      <div>
        <div id="readrules" className="link" onClick={this.handleClick.bind(this)}>{text} <i className="material-icons icons">{icon}</i></div>

        <CSSTransitionGroup
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {component}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default HouseRules;