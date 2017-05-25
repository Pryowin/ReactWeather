var React = require('react');

var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openweathermap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    
    this.setState ({isLoading: true});

    openweathermap.getTemp(location).then(function(data) {
      that.setState({
        location: data.name,
        temp: data.main.temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      this.setState({isLoading: false});
    });
  },
  render: function() {

    var {temp, location, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Loading Weather</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div align="center">
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
