import React, { useState } from "react";
import { App, Button, Flex, Input, ScrollPane, TextBlock, theming, themingThemes, Toggle } from "../../../../src/main";
import "./styles/globals.scss";

export default React.forwardRef((props: any, ref: any) => {
    const [ tabContents, setTabContents ] = useState<JSX.Element | JSX.Element[] | null>(null);
    const [ currentTab, setCurrentTab ] = useState("Buttons");

    const tabs = [
        {
            name: "Buttons",
            element: (
                <>
                    <TextBlock header={3}>Accent Style</TextBlock>
                    <br />
                    <Button mode="accent">Text</Button>
                    <br />
                    <br />

                    <TextBlock header={3}>Default Style</TextBlock>
                    <br />
                    <Button>Text</Button>
                    <br />
                    <br />

                    <TextBlock header={3}>Outline Style</TextBlock>
                    <br />
                    <Button mode="outline">Text</Button>
                    <br />
                    <br />

                    <TextBlock header={3}>Text Style</TextBlock>
                    <br />
                    <Button mode="text">Text</Button>
                </>
            )
        },
        {
            name: "Headers",
            element: (
                <>
                    <TextBlock header={1}>Text</TextBlock>
                    <TextBlock header={2}>Text</TextBlock>
                    <TextBlock header={3}>Text</TextBlock>
                    <TextBlock header={4}>Text</TextBlock>
                    <TextBlock header={5}>Text</TextBlock>
                    <TextBlock header={6}>Text</TextBlock>
                </>
            )
        },
        {
            name: "Input",
            element: (
                <>
                    <TextBlock header={3}>Generic</TextBlock>
                    <br />
                    <Input />
                    <br />

                    <TextBlock header={3}>Placeholder</TextBlock>
                    <br />
                    <Input placeHolder="Place holder text" />
                    <br />

                    <TextBlock header={3}>Custom Icon</TextBlock>
                    <br />
                    <Input icon={{
                        light: <img src="" />,
                        dark: <img src="" />
                    }} />
                </>
            )
        }
    ]

    return (
        <App title="LuxJS Demo #1">
            <ScrollPane height="100%">
                <Flex padding="10px 30px" direction="column" gap="10px">
                    <TextBlock>Light Mode</TextBlock>
                    <Toggle onChange={(light) => {
                        if (light) {
                            theming.loadTheme(themingThemes.defaultLightTheme.author, themingThemes.defaultLightTheme.name);
                            return;
                        }

                        theming.loadTheme(themingThemes.defaultDarkTheme.author, themingThemes.defaultDarkTheme.name);
                    }} />
                </Flex>

                <div className="tabView">
                    <div className="tabs">
                        { tabs.map(tab => {
                            return (
                                <Button mode={currentTab == tab.name ? "outline" : "text"} onClick={() => {
                                    setCurrentTab(tab.name);
                                }}>{ tab.name }</Button>
                            )
                        }) }
                    </div>

                    <div className="renderer">
                        { tabs.map(tab => {
                            if (tab.name == currentTab) {
                                return tab.element;
                            }
                        }) }
                    </div>
                </div>
            </ScrollPane>
        </App>
    );
});
