import React from 'react';
import io from 'socket.io-client';
import Element from './Element';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            data: null
        };

        this.getData();
    }

    getData() {
        var socket = io('');
        socket.on('data', (data) => {
            this.setState({
                data: data.data
            });
        });
    }

    render() {
        if (!this.state.data) {
            return null;
        }

        return (
            <div className='data-container'>
                {this.state.data.map((dataRow, dataRowIndex) => {
                    return (
                        <div key={`data-row-${dataRowIndex}`}>
                            {dataRow.map((dataElement, dataElementIndex) => {
                                return <Element element={dataElement} key={`element-${dataRowIndex}-${dataElementIndex}`} />;
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}
