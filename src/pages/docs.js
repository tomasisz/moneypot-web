import React from 'react'
import Layout from '../components/layout'
import { Row, Col } from 'reactstrap';
import SectionDiv from '../components/section-div'
import PrivateKey from '../components/tools/create-private-key'
import Scrollspy from 'react-scrollspy'


const Docs = () => (
    <Layout>
        <SectionDiv>
            <Row>
                <Col className="sidenav">
                    <Scrollspy
                        className="list-group"
                        componentTag="div"
                        items={ ['create-new-priv-key', 'section-2', 'section-3'] } currentClassName="sidenav-active">
                        <a className="list-group-item list-group-item-action" href="#create-new-priv-key">Create New Private Key</a>
                        <a className="list-group-item list-group-item-action" href="#section-2">Section 2</a>
                        <a className="list-group-item list-group-item-action" href="#section-3">Section 3</a>
                    </Scrollspy>
                </Col>
                <Col className="docs-content">
                    <h1>Docs</h1>
                    <section id="create-new-priv-key">
                        <h2><a href="#create-new-priv-key">Create new private key</a>
                            <a href="#create-new-priv-key" className="anchor-section float-right">#</a>
                        </h2>
                        <hr />
                        <PrivateKey/>
                    </section>
                    <section id="section-2">
                        <h2><a href="#section-2">Section 2</a>
                            <a href="#section-2" className="anchor-section float-right">#</a>
                        </h2>
                        <hr />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium. Nisl pretium fusce id velit ut tortor pretium. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Vitae ultricies leo integer malesuada nunc vel risus. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Phasellus vestibulum lorem sed risus ultricies tristique. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Aenean euismod elementum nisi quis eleifend quam. Volutpat diam ut venenatis tellus in metus vulputate eu. Ultrices vitae auctor eu augue. Maecenas volutpat blandit aliquam etiam erat velit. Ridiculus mus mauris vitae ultricies leo. Donec enim diam vulputate ut pharetra sit amet aliquam id.

                        A scelerisque purus semper eget duis at tellus. Dictum sit amet justo donec enim diam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. At lectus urna duis convallis convallis tellus. Nibh nisl condimentum id venenatis. Justo eget magna fermentum iaculis eu. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Nulla at volutpat diam ut. Purus faucibus ornare suspendisse sed. Elementum sagittis vitae et leo. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Ante in nibh mauris cursus mattis molestie. Ac turpis egestas sed tempus urna et pharetra. Accumsan lacus vel facilisis volutpat est. Mi bibendum neque egestas congue. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Nisi scelerisque eu ultrices vitae auctor eu augue. Sit amet porttitor eget dolor morbi. Ut venenatis tellus in metus vulputate. In nibh mauris cursus mattis molestie a iaculis at.

                    </section>
                    <section id="section-3">
                        <h2><a href="#section-3">Section 3</a>
                            <a href="#section-3" className="anchor-section float-right">#</a>
                        </h2>
                        <hr />
                        Nec nam aliquam sem et. Et netus et malesuada fames ac turpis egestas maecenas. Libero enim sed faucibus turpis in. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Rhoncus dolor purus non enim praesent elementum facilisis leo. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ac odio tempor orci dapibus. Tortor at risus viverra adipiscing at in tellus integer. Proin libero nunc consequat interdum varius sit amet mattis. Sit amet consectetur adipiscing elit pellentesque habitant. Lacus sed turpis tincidunt id. Diam quam nulla porttitor massa id. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Amet tellus cras adipiscing enim eu. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.

                    </section>
                </Col>
            </Row>
        </SectionDiv>
    </Layout>
)

export default Docs

