import React, { Component } from 'react'

export class Pessoa extends Component {

    state = {
        loading: true,
        pessoa: [],
    }

    async fetchPessoa() {
        this.setState({
            loading: true,
        }, async () => {
            const response = await fetch('https://api.randomuser.me/');
            const data = await response.json()
            this.setState({
                loading: false,
                pessoa: Object.values(data)[0][0],
            });
        })
    };

    componentDidMount() {
        this.fetchPessoa();
    }

    render() {
        const { loading, pessoa } = this.state;



        if (loading) return <div>Carregando...</div>
        return (
            <div>
                <img src={pessoa.picture.large} alt="pessoa"></img>
                <p>{pessoa.name.first}</p>
                <p>{pessoa.email}</p>
                <p>{pessoa.dob.age}</p>
            </div>
        )
    }
}