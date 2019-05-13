import React, { Component, Fragment } from "react";
// import { day } from "../utils/helpers";

const ContextContext = React.createContext();

class ContextProvider extends Component {
  state = {
    dark: false,
    artiles: null,
    currentArticle: null
  };

  switchTheme = () => {
    this.state.dark
      ? this.setState({ dark: false })
      : this.setState({ dark: true });
  };

  render() {
    const { dark } = this.state;
    return (
      <Fragment>
        <ContextContext.Provider
          value={{
            theme: dark,
            switchTheme: this.switchTheme
          }}
        >
          {this.props.children}
        </ContextContext.Provider>
      </Fragment>
    );
  }
}

const ContextConsumer = ContextContext.Consumer;

export { ContextConsumer, ContextProvider };
