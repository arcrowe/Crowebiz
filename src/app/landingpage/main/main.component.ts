import {Component, OnInit} from '@angular/core';

export interface Project {
  title: string;
  image: string;
  text: string;
  url: string;
  technology: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  p1: Project = {
    title: 'Books154F',
    image: 'assets/images/landingPage/Books154FImage.JPG',
    text: 'Online Bookstore ',
    technology: 'Angular - Django Rest',
    url: 'books154f/home'
  };
  p2: Project = {
    title: 'Memory Match',
    image: 'assets/images/landingPage/MMImage.JPG',
    text: 'Memory Match with Animation',
    technology: 'Angular',
    url: 'memory/'
  };
  p3: Project = {
    title: 'Tic Tac Toe',
    image: 'assets/images/landingPage/TicTacToeImage.JPG',
    text: 'Play against computer or opponent',
    technology: 'Angular - Converted from Tkinter/Python',
    url: 'tictactoe/'
  };
  p4: Project = {
    title: 'Stock Ticker',
    image: 'assets/images/landingPage/stockticker.jpeg',
    text: 'Waiting for Back End to be updated',
    technology: 'Angular, Plotly Dash Django',
    url: 'stock/'
  };
  p7: Project = {
    title: 'All Aboard',
    image: 'assets/images/landingPage/traingroup1.png',
    text: 'Yet to be converted from Flask',
    technology: 'Angular, Django Rest',
    url: ''
  };
  p6: Project = {
    title: 'Craps Are Us',
    image: 'assets/images/landingPage/crapTable.jpg',
    text: 'Pass Line Craps Game - Animated Dice',
    technology: 'Angular - SVG clickable Area',
    url: 'craps/'
  };
  p5: Project = {
    title: 'Earth Story',
    image: 'assets/images/landingPage/EarthStory.JPG',
    text: 'Climate Change - Extinction',
    technology: 'Angular',
    url: 'earth/home'
  };

  projects: Project[] = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6];


  constructor() {
  }

  ngOnInit(): void {
  }

}
