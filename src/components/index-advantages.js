import React from 'react'
import {
    CardDeck,
    Card, CardImg, CardText,
    CardBody,
    Button
} from "reactstrap";

const IndexAdvantages = () => (
    <CardDeck>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="fast" />
            <CardBody>
                <h3 style={{ marginBottom: '1rem'}}>It's fast, almost instant!</h3>
                <CardText>Some text</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="privacy" />
            <CardBody>
                <h3 style={{ marginBottom: '1rem'}}>Protects your privacy</h3>
                <CardText>Some text</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="cost" />
            <CardBody>
                <h3 style={{ marginBottom: '1rem'}}>Very low fees!</h3>
                <CardText>Some text</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    </CardDeck>
)

export default IndexAdvantages
