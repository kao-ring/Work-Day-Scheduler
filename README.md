# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

- https://kao-ring.github.io/Work-Day-Scheduler/

- https://github.com/kao-ring/Work-Day-Scheduler

![Screen Shot 2020-07-10 at 1 27 59 AM](https://user-images.githubusercontent.com/66850293/87119728-cb293580-c24c-11ea-869f-a1a8b7898ee2.png)

## Added function

- I used [Moment.js](https://momentjs.com/) to get a current time.

- Used Set interval for updating current time.

- Making rows and cols using for loop and bootstrap classes.

- Second colum has textarea, and third colum has a save icon from awesome font. Each colum have unique number id to connect with time.

- To store each lines comment, I used localstorage. Also getting data from there everytime user reflesh the page.

## Bug / fix log

- js line 41, finally I got how to write with jQuery

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
