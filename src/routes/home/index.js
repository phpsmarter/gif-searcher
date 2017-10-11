import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        const apiUrl = 'https://api.giphy.com';
        const key = 'xQx0lr9MDJtTm22usyKHwpBHtfwECaNj';
        const searchUrl = query => `${apiUrl}/v1/gifs/search?api_key=${key}&q=${query}`;
        fetch(searchUrl('dogs'))
            .then(s => s.json())
            .then(j => this.setState({ data: j.data }));
    }


    render() {
        const { data } = this.state;
        return(
            <div class={style.home}>
                <h1>Homeroute</h1>
                <Card>
                    <Card.Primary>
                        <Card.Title>Homecard</Card.Title>
                        <Card.Subtitle>Welcometohomeroute</Card.Subtitle>
                    </Card.Primary>
                    <Card.SupportingText>
                        Some text
                    </Card.SupportingText>
                    <Card.Actions>
                        <Card.Action>OKAY</Card.Action>
                    </Card.Actions>
                </Card>
                {
                    data.map(i => {
                        const gif = i.images.downsized.url;
                        return (
                            <img src={ gif } />
                        );
                    })
                }
            </div>
        );
    }
}

export default Home;
