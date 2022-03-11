import React from "react"
import {shallow} from "enzyme"

import {MonoText} from "../StyledText"
import EditScreenInfo from "../EditScreenInfo"

const testProps = {path: "test"}

describe("<Text>", () => {
  let textProps
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<EditScreenInfo {...testProps} />)
  })
  it("should have MonoText", () => {
    textProps = wrapper.find(MonoText).props()
    expect(textProps.children).toBe(testProps.path)
  })
})
