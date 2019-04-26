import React, { Fragment, Component } from "react"
import { CenteredDiv, Layout } from "../components/shared"
import { inject, observer } from "mobx-react"

@inject("commonStore")
@observer
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <CenteredDiv className="center">
            <p className="name">[NAME]</p>
            <p>
              Bootstrapped with{" "}
              <a
                href="https://github.com/casprine/grimnir"
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.props.commonStore.text}{" "}
                <span role="img" label="grimnir-emoji">
                  ⿁
                </span>
              </a>
            </p>
            <p>
              Happy hacking
              <span role="img" aria-label="hacker">
                👨🏿‍💻🥳
              </span>
            </p>
          </CenteredDiv>
        </Layout>
      </Fragment>
    )
  }
}

export default Index
