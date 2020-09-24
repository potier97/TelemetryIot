import React, { Component } from 'react';
import { watchPlants, watchUserChnages } from '../firebase';

export const PlantsContext = React.createContext();

export class PlantContexProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plants: [],
            dataReady: false
        }
    };

    async componentDidMount() {
        this.userWatcherUnsub = watchUserChnages((user) => {
            if (user && !this.expenseWatcherUnsub) {
                this.expenseWatcherUnsub = watchPlants((plants) => {
                    this.setState({ plants, dataReady: true })
                })
            }
        })
    };


    componentWillUnmount() {
        if (this.expenseWatcherUnsub) {
            this.expenseWatcherUnsub();
        }
    }

    render() {
        const { children } = this.props;
        return (
            <PlantsContext.Provider value={this.state}>
                {children}
            </PlantsContext.Provider>
        )
    }

};

export const PlantContextConsumer = PlantsContext.Consumer;

