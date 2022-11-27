import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class DemoFetch extends Component {

    state = {
        movies:{}
    }

    // getMovies = async () => {
    //     const data = await fetch('https://reactnative.dev/movies.json')
    //     .then((response) => response.json())
    //     .then((json)=> {
    //         return json
    //     })
    //     console.log(data)
    // }

    async getMovies() {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          console.log(json)
          this.setState({movies: json.movies});
        } catch (error) {
          console.log(error);
        } finally {
        
        }
    }

  render() {
    return (
      <SafeAreaView>
        <Text>{JSON.stringify(this.state.movies)}</Text>
      </SafeAreaView>
    )
  }

    componentDidMount(){
      this.getMovies()
    console.log("Component dismount")
    //Fetch là một worker thread
    // fetch('https://reactnative.dev/movies.json')
    // .then((response) => response.json())
    // .then((json)=> {
    //     this.setState({movies: json})
    // })
  }
}