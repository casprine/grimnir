import React, { Fragment } from "react"
import { CenteredDiv, Layout } from "../components/shared"

export default () => (
  <Fragment>
    <Layout>
      <CenteredDiv className="center">
        <p className="name">casprine</p>
        <p>
          Bootstrapped with{" "}
          <a href="https://github.com/casprine/grimnir" target="_blaknk">
            Grimnir{" "}
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
