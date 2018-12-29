import React from "react";
import quicklink from "./quicklink";

const hasCreateRef = typeof React.createRef === 'function'

class Quicklink extends React.Component {
  constructor(props) {
    super(props);
    if (hasCreateRef) {
      this.quicklinkRef = React.createRef();
    }
  }
  componentDidMount() {
    const quicklinkEle = hasCreateRef ? this.quicklinkRef.current : this.quicklinkRef;
    quicklink({
      ...this.props.quicklink,
      el: quicklinkEle
    });
  }
  render() {
    return hasCreateRef ? <div ref={this.quicklinkRef}>{this.props.children}</div> : <div ref={ele=>{this.quicklinkRef = ele}}>{this.props.children}</div>
  }
}

export default Quicklink;