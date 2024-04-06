# Web Development Project 5 - UCM Student Atmosphere Dashboard

Submitted by: Jaime Gomez

This web app: UCM Student Atmosphere Dashboard is an application that a student can look at the be able to the the upcomming weather at UC Merced. Whether its looking at the weather with a glance to prepare the correct outfits, or a quick check to make sure you dont forget an umbrella or check the wind/temperature for that event happening at school later, It is the perfect and simple application that will allow you to stay informed as a student at UCM about the weather so your never caught by surprise by the weather! 

Time spent: 18 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The list displays a list of data fetched using an API call**
- [X] **Data uses the useEffect React hook and async/await syntax**
- [X] **The app dashboard includes at least three summary statistics about the data such as**
  - [X] Average temperature (48 hours)
  - [X] Total Rainfall (48 hours)
  - [X] Average Wind Speed (48 hours)
- [X] **A search bar allows the user to search for an item in the fetched data**
- [X] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [X] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://https://imgur.com/a/XmCRjPq.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
https://imgur.com/a/XmCRjPq
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

One of the biggest challenges I Had when working on this application was using the API to my advantage to be able to build the dashboard application that I did. I spent a lot of time looking at documentation for the api OpenWeather and WeatherBit so that i could extract the data I needed to accomplish displaying the necesary information on my application. The second hardest part was access, grabing the json objects from the response to the api call, and then doing something with that data. I struggled to find an api thast was not limiting with calls per day, 50/api calls a day for free tier, which postponed a lot of my work process. I had to wait two days to continue to pull from the api and that was the biggest hurdle of this project. lastly, I struggled a lot on displaying the right information, luckily the .map function makes it more easy but it still takes knowing the json and the api to be able to work with it properly and efficiently.

## License

    Copyright [2024] [Jaime Gomez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
