import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class HouseRules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  handleClick() {
    this.setState({ isShown: !this.state.isShown });
  }

  slideBox() {
    const ruleArr = this.props.houseRules.houseRules.textBody.split('\n \r');
    return (
      <div id="box" key="key">
        {ruleArr.map((para, index) => { return <p key={index}>{para}<br/></p>; })}
      </div>
    );
  }

  render() {
    const text = this.state.isShown ? 'Hide' : 'Read all rules';
    const icon = this.state.isShown ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    const component = this.state.isShown ? this.slideBox() : '';

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
    );
  }
}

export default HouseRules;
