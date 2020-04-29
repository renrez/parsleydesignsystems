import React from 'react';
import '../../styles/design-system.css';
import IdContainer from '../../hoc/IdContainer/IdContainer';
import SectionContainer from "../../hoc/SectionContainer/SectionContainer";


const designSystem = () => (
    <IdContainer id="ds-container">
        <SectionContainer id="ds-overview" className="stack">
            <h1 className="center">The design system of Parsley Design Systems</h1>
            <p className="center">We eat our own dog food, everything Parsley Design Systems creates is done so with our design system product and applies an end to end design system led approach.</p>
        </SectionContainer>
        <SectionContainer id="ds-stack" className="stack">
            <h2 className="center">Spacing variables</h2>
            <div className="stack">
                <div className="box-background">
                    <p className="boxed m-5"><code>--s-5</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m-4"><code>--s-4</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m-3"><code>--s-3</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m-2"><code>--s-2</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m-1"><code>--s-1</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m0"><code>--s0</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m1"><code>--s1</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m2"><code>--s2</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m3"><code>--s3</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m4"><code>--s4</code></p>
                </div>
                <div className="box-background">
                    <p className="boxed m5"><code>--s5</code></p>
                </div>
            </div>
        </SectionContainer>
        <SectionContainer id="ds-headings" className="stack">
            <h2 className="center">Heading font sizes</h2>
            <h1>This is a h1 - primary heading</h1>
            <h2>This is a h2 - primary heading</h2>
            <h3>This is a h3 - primary heading</h3>
        </SectionContainer>
        <SectionContainer id="ds-links" className="stack">
            <h2 className="center">Links</h2>
            <div>
                <a href="#link-path">Link text</a>
            </div>
            <div>
                <a href="#link-path" className="button-primary">Link text</a>
            </div>
        </SectionContainer>
    </IdContainer>
);

export default designSystem;