import React, { Component } from 'react';
import { watchPlants, watchUserChnages } from '../firebase';

export const PlantsContext = React.createContext();

export class PlantContexProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plants:[],
            isSetup: false,
        }
    };

    componentDidMount() {

        watchUserChnages((user) => {
            if (user && !this.isSetup) {
                this.setState({
                    isSetup: true
                })
                watchPlants((plants) => {
                    this.setState({ plants })
                })
            }

        })
    };

    render() {
        return (
            <PlantsContext.Provider value={this.state}>
                {this.props.children}
            </PlantsContext.Provider>
        )
    }

};

export const PlantContextConsumer = PlantsContext.Consumer;

